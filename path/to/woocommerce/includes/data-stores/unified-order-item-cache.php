<?php
/**
 * Unified order item cache store.
 *
 * @package WooCommerce\Includes\DataStores
 */

defined( 'ABSPATH' ) || exit;

/**
 * Unified order item cache store.
 */
class WC_Data_Store_Unified_Order_Item_Cache {
	/**
	 * Cache store instance.
	 *
	 * @var WC_Data_Store_Cache
	 */
	private $cache_store;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->cache_store = new WC_Data_Store_Cache();
	}

	/**
	 * Get the cached order item data.
	 *
	 * @param int $order_id Order ID.
	 * @param int $item_id Order item ID.
	 * @return array|false Order item data or false on failure.
	 */
	public function get_order_item_data( $order_id, $item_id ) {
		$cache_key = $this->get_cache_key( $order_id, $item_id );
		return $this->cache_store->get( $cache_key );
	}

	/**
	 * Set the cached order item data.
	 *
	 * @param int $order_id Order ID.
	 * @param int $item_id Order item ID.
	 * @param array $data Order item data.
	 */
	public function set_order_item_data( $order_id, $item_id, $data ) {
		$cache_key = $this->get_cache_key( $order_id, $item_id );
		$this->cache_store->set( $cache_key, $data );
	}

	/**
	 * Get the cache key for the order item data.
	 *
	 * @param int $order_id Order ID.
	 * @param int $item_id Order item ID.
	 * @return string Cache key.
	 */
	private function get_cache_key( $order_id, $item_id ) {
		return 'wc_order_item_data_' . $order_id . '_' . $item_id;
	}
}