<?php
/**
 * Test for Plugin.
 *
 * @package share-post-preview
 */

namespace SharePostPreview\Tests;

use WP_UnitTestCase;

/**
 * SharePostPreview test case.
 */
class SharePostPreview extends WP_UnitTestCase {

	/**
	 * Test bootstrap.
	 */
	public function test_bootstrap() {
		$this->assertEquals( 10, has_action( 'plugins_loaded', 'SharePostPreview\\load_textdomain' ) );
		$this->assertEquals( 10, has_action( 'plugins_loaded', 'SharePostPreview\\load_plugin' ) );
	}

}
