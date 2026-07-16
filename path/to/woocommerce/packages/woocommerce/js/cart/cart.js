// Update the JavaScript code to apply placeholder styles correctly when the mini-cart is opened after adding items asynchronously
import { Component } from '@wordpress/element';
import { applyFilters } from '@woocommerce/utils';
import { Cart } from '@woocommerce/block-library';

const CartPlaceholder = () => {
  return (
    <div className="woocommerce-mini-cart-placeholder">
      <div className="woocommerce-mini-cart-placeholder__item">
        <div className="woocommerce-mini-cart-placeholder__item-image">
          <img src={ 'https://example.com/product-placeholder.jpg' } />
        </div>
        <div className="woocommerce-mini-cart-placeholder__item-info">
          <h2 className="woocommerce-mini-cart-placeholder__item-title">
            Placeholder Product
          </h2>
          <p className="woocommerce-mini-cart-placeholder__item-description">
            This is a placeholder product.
          </p>
          <div className="woocommerce-mini-cart-placeholder__item-quantity">
            <input type="number" value="1" />
            <button>Update</button>
          </div>
          <button className="woocommerce-mini-cart-placeholder__item-remove">
            Remove
          </button>
          <span className="woocommerce-mini-cart-placeholder__item-sales-badge">
            On Sale
          </span>
        </div>
      </div>
    </div>
  );
};

const CartComponent = () => {
  const cart = Cart.getCart();

  if (cart.isPlaceholder) {
    return <CartPlaceholder />;
  }

  return (
    <div className="woocommerce-mini-cart">
      {cart.items.map((item) => (
        <div key={ item.id } className="woocommerce-mini-cart__item">
          <div className="woocommerce-mini-cart__item-image">
            <img src={ item.image } />
          </div>
          <div className="woocommerce-mini-cart__item-info">
            <h2 className="woocommerce-mini-cart__item-title">
              { item.name }
            </h2>
            <p className="woocommerce-mini-cart__item-description">
              { item.description }
            </p>
            <div className="woocommerce-mini-cart__item-quantity">
              <input type="number" value={ item.quantity } />
              <button>Update</button>
            </div>
            <button className="woocommerce-mini-cart__item-remove">
              Remove
            </button>
            <span className="woocommerce-mini-cart__item-sales-badge">
              { item.salesBadge }
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;