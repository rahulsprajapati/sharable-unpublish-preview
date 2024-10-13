<?php
/**
 * Test for Plugin.
 *
 * @package sharable-unpublish-preview
 */

namespace SharableUnpublishPreview\Tests;

use WP_UnitTestCase;

/**
 * SharableUnpublishPreview test case.
 */
class SharableUnpublishPreview extends WP_UnitTestCase {
	
	/**
	 * Test bootstrap.
	 */
	public function test_bootstrap() {
		$this->assertEquals( 10, has_action( 'plugins_loaded', 'SharableUnpublishPreview\\load_textdomain' ) );
		$this->assertEquals( 10, has_action( 'plugins_loaded', 'SharableUnpublishPreview\\activate_plugin' ) );
	}

}
