<?php
/**
 * Plugin Name: Sharable Unpublish Preview
 * Plugin URI: https://github.com/rahulsprajapati/sharable-unpublish-preview
 * Description: WordPress Plugin to generate a shareable preview link for unpublished WordPress posts, enabling easy content previews without any account or login.
 * Author: Rahul Prajapati
 * Version: 0.1.0
 * Author URI: https://github.com/rahulsprajapati
 * License: GPL2+
 * Text Domain: sharable-unpublish-preview
 * Domain Path: /languages
 *
 * @package sharable-unpublish-preview
 */

namespace SharableUnpublishPreview;

const VERSION = '0.1.0';

require_once __DIR__ . '/src/namespace.php';
bootstrap();
