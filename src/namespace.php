<?php
/**
 * SharePostPreview Namespace.
 *
 * @package share-post-preview
 */

namespace SharePostPreview;

/**
 * Hook up all the filters and actions.
 */
function bootstrap() {

	add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_textdomain' );
	add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_plugin' );
}

/**
 * Load plugin text domain for text translation.
 */
function load_textdomain() {

	load_plugin_textdomain(
		'share-post-preview',
		false,
		basename( plugin_dir_url( __DIR__ ) ) . '/languages'
	);
}

/**
 * Load Plugin.
 */
function load_plugin() {
	add_action( 'init', __NAMESPACE__ . '\\register_rest_post_meta', 11 );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_scripts', 11 );
	add_action( 'wp_ajax_get_share_post_preview_token', __NAMESPACE__ . '\\get_share_post_preview_token' );

	add_action( 'query_vars', __NAMESPACE__ . '\\add_share_preview_query_var' );
	add_filter( 'posts_results', __NAMESPACE__ . '\\set_post_to_publish', 12, 2 );
}

/**
 * Get supported post types.
 *
 * @return array
 */
function get_supported_post_types() {
	$post_types = get_post_types( [ 'public' => true ] );

	$exclude_post_types = [
		'attachment',
	];

	$post_types = array_diff( $post_types, $exclude_post_types );

	return apply_filters( 'share_post_preview_types', $post_types );
}

/**
 * Register post meta for supported post types.
 */
function register_rest_post_meta() {
	$post_types = get_supported_post_types();

	$meta_keys = [
		'spp_enable_preview' => [
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'boolean',
		],
		'spp_expire' => [
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		],
	];

	foreach ( $post_types as $post_type ) {
		foreach ( $meta_keys as $meta_key => $args ) {
			register_post_meta( $post_type, $meta_key, $args );
		}
	}
}

/**
 * Enqueue helper JS/CSS script.
 */
function enqueue_scripts() {
	if ( ! file_exists( plugin_path( 'build/index.asset.php' ) ) ) {
		return;
	}

	$script_data = include plugin_path( 'dist/index.asset.php' );

	wp_enqueue_script(
		'share-post-preview-js',
		plugin_url( 'build/index.js' ),
		$script_data['dependencies'],
		$script_data['version'],
		true
	);

	wp_enqueue_style(
		'share-post-preview-css',
		plugin_url( 'build/index.css' ),
		array(),
		$script_data['version']
	);

	wp_localize_script(
		'share-post-preview-js',
		'sppObj',
		[]
	);
}

/**
 * This function is used to create a token for the plugin.
 *
 * @param string $action The action for which the token is created.
 * @param string $expire The time the token was generated.
 *
 * @return int The time-dependent variable.
 */
function create_share_link_token( $action = '', $expire = 0 ) {
	$expire = 'no-expire' === $expire ? $expire : strtotime( $expire );
	return substr( wp_hash( $action . $expire ), -12, 10 );
}

/**
 * Check if the token is valid.
 *
 * @param string $token The token to check.
 * @param string $action The action for which the token is created.
 * @param string $expire The time the token was generated.
 *
 * @return boolean
 */
function is_valid_token( $token, $action = -1, $expire = 0 ) {
	return hash_equals( $token, create_share_link_token( $action, $expire ) );
}

/**
 * Check if the preview is valid.
 *
 * @param \WP_Post $post The post object.
 * @param string   $request_token The request token.
 *
 * @return boolean|int Return -1 if the preview is not available, false if the preview is expired, true if the preview is valid.
 */
function is_valid_preview( $post, $request_token = '' ) {

	if ( empty( $request_token ) ) {
		$request_token = filter_input( INPUT_GET, 'spp_token', FILTER_SANITIZE_STRING );
	}

	if ( empty( $request_token ) ) {
		return -1;
	}

	$is_enable_preview = get_post_meta( $post->ID, 'spp_enable_preview', true );
	$expire = get_post_meta( $post->ID, 'spp_expire', true );

	if ( empty( $is_enable_preview ) || empty( $expire ) ) {
		return -1;
	}

	if ( 'no-expire' === $expire ) {
		return is_valid_token( $request_token, $post->ID, $expire );
	}

	$is_expired = wp_date( 'U' ) > wp_date( 'U', $expire );

	if ( $is_expired ) {
		delete_post_meta( $post->ID, 'spp_enable_preview' );
		delete_post_meta( $post->ID, 'spp_expire' );
		return false;
	}

	return is_valid_token( $request_token, $post->ID, $expire );
}

/**
 * Get share post preview token - ajax callback.
 *
 * @return void
 */
function get_share_post_preview_token() {
	$post_id = filter_input( INPUT_POST, 'post_id', FILTER_SANITIZE_NUMBER_INT );
	$expire = filter_input( INPUT_POST, 'expire', FILTER_SANITIZE_SPECIAL_CHARS );

	if ( empty( $post_id ) || empty( $expire ) ) {
		wp_send_json_error( __( 'Invalid request.', 'share-post-preview' ) );
	}

	wp_send_json_success( [ 'token' => create_share_link_token( $post_id, $expire ) ] );
}

/**
 * Add share preview query var.
 *
 * @param array $vars Query vars.
 *
 * @return array
 */
function add_share_preview_query_var( $vars ) {
	$vars[] = 'spp_token';

	return $vars;
}

/**
 * Set post to publish for shared post preview.
 *
 * @param array     $posts The post array.
 * @param \WP_Query $query The WP_Query object.
 *
 * @return array
 */
function set_post_to_publish( $posts, $query ) {

	$post = empty( $posts[0] ) ? null : $posts[0];

	$is_preview_request = (
	 	$query->is_main_query()
		&& ! $query->is_preview()
		&& ! $query->is_singular()
		&& ! $query->get( 'spp_token' )
	);

	$is_preview_request = apply_filters( 'is_share_post_preview_request', $is_preview_request, $post, $query );

	if (
		empty( $post )
		|| ! $post instanceof \WP_Post
		|| 'publish' === $post->post_status
		|| ! $is_preview_request
	) {
		return $posts;
	}

	// Redirect to the post if it's published post.
	if ( 'publish' === $post->post_status ) {
		wp_safe_redirect( get_permalink( $post ), 301 );
		exit;
	}

	$is_valid_preview = is_valid_preview( $post );

	if ( -1 === $is_valid_preview ) {
		wp_die( esc_html__( 'The preview is not available!', 'share-post-preview' ), 404 );
		exit;
	}

	if ( empty( $is_valid_preview ) ) {
		wp_die( esc_html__( 'The preview has expired!', 'share-post-preview' ), 404 );
		exit;
	}

	$post->post_status = 'publish';

	$posts[0] = $post;

	// Disable comments and pings for this post.
	add_filter( 'comments_open', '__return_false' );
	add_filter( 'pings_open', '__return_false' );

	return $posts;
}
