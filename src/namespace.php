<?php
/**
 * SharableUnpublishPreview Namespace.
 *
 * @package sharable-unpublish-preview
 */

namespace SharableUnpublishPreview;

/**
 * Hook up all the filters and actions.
 */
function bootstrap() {

	// Bootstrap plugin functionality...
	add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_textdomain' );
	add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_plugin' );
}

/**
 * Load plugin text domain for text translation.
 */
function load_textdomain() {

	load_plugin_textdomain(
		'sharable-unpublish-preview',
		false,
		basename( plugin_dir_url( __DIR__ ) ) . '/languages'
	);
}

/**
 * Load Plugin.
 */
function load_plugin() {

	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\admin_enqueue_scripts', 11 );
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_scripts', 11 );
}

/**
 * Enqueue helper JS/CSS script in the admin.
 *
 * @param string $hook Hook for the current page in the admin.
 */
function admin_enqueue_scripts( $hook ) {

	if ( ! in_array( $hook, [ 'post.php', 'post-new.php' ], true ) ) {
		return;
	}

	wp_enqueue_style(
		'sharable-unpublish-preview-admin-css',
		plugin_dir_url( __FILE__ ) . 'assets/css/sharable-unpublish-preview-admin.css',
		[],
		VERSION
	);

	wp_enqueue_script(
		'sharable-unpublish-preview-admin-js',
		plugin_dir_url( __FILE__ ) . 'assets/js/sharable-unpublish-preview-admin.js',
		[
			'wp-util',
		],
		VERSION,
		true
	);
}

/**
 * Enqueue helper JS/CSS script.
 *
 * @param string $hook Hook for the current page in the admin.
 */
function enqueue_scripts( $hook ) {

	wp_enqueue_style(
		'sharable-unpublish-preview-css',
		plugin_dir_url( __FILE__ ) . 'assets/css/sharable-unpublish-preview.css',
		[],
		VERSION
	);

	wp_enqueue_script(
		'sharable-unpublish-preview-js',
		plugin_dir_url( __FILE__ ) . 'assets/js/sharable-unpublish-preview.js',
		[
			'wp-util',
		],
		VERSION,
		true
	);
}
