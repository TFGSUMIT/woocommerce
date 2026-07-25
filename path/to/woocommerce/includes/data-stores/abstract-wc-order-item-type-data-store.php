<?php
/**
 * Abstract order item type data store.
 *
 * @package WooCommerce\Includes\DataStores
 */

defined( 'ABSPATH' ) || exit;

/**
 * Abstract order item type data store.
 */
abstract class WC_Data_Store_Abstract_Order_Item_Type_Data_Store {
	/**
	 * Unified order item cache store instance.
	 *
	 * @var WC_Data_Store_Unified_Order_Item_Cache
	 */
	private $unified_order_item_cache;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->unified_order_item_cache = new WC_Data_Store_Unified_Order_Item_Cache();
	}

	/**
	 * Get the order item data.
	 *
	 * @param int $order_id Order ID.
	 * @param int $item_id Order item ID.
	 * @return array|false Order item data or false on failure.
	 */
	public function get_order_item_data( $order_id, $item_id ) {
		return $this->unified_order_item_cache->get_order_item_data( $order_id, $item_id );
	}
}