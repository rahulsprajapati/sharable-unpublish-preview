<?php
/**
 * Plugin Name: Share Post Preview
 * Plugin URI: https://github.com/rahulsprajapati/share-post-preview
 * Description: WordPress Plugin to generate a shareable post preview link for unpublished posts, enabling easy content previews without any account or login.
 * Author: Rahul Prajapati
 * Version: 0.1.0
 * Author URI: https://github.com/rahulsprajapati
 * License: GPL2+
 * Text Domain: share-post-preview
 * Domain Path: /languages
 *
 * @package share-post-preview
 */

namespace SharePostPreview;

const VERSION = '0.1.0';

/**
 * Get url with plugin directory path.
 *
 * @param  string $path Relative path of the plugin file.
 *
 * @return string
 */
function plugin_url( $path ) {
	return plugins_url( $path, __FILE__ );
}

/**
 * Get relative path with plugin directory path.
 *
 * @param  string $path Relative path of the plugin file.
 *
 * @return string
 */
function plugin_path( $path ) {
	return __DIR__ . '/' . $path;
}

require_once __DIR__ . '/src/namespace.php';
bootstrap();
