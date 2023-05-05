import { NavLink } from "react-router-dom"

function Cart() {
  return (
    <div className="cart-container container">
      <h2>Shopping Cart</h2>
      <div className="cart-empty text-center">
        <p>
          Your cart is empty. <br />
          <span>Go to the store and buy some products!</span>
        </p>
        <div className="start-shopping">
          <NavLink to="/">
            <button className="rounded-md border-2 border-blue text-blue hover:text-white hover:bg-blue transition ease-in-out px-6 py-2 my-6">
              Start Shopping
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
          <div className="cart-item" key="{cartItem.id}>">
            <div className="cart-product">
              <img src="{cartItem.thumbnail}" alt="{cartItem.title}" />
              <div>
                <h3>Title</h3>
                <p>Description</p>
                <button>Remove</button>
              </div>
            </div>
            <div className="cart-product-price">
              <h3>€100</h3>
            </div>
            <div className="cart-product-quantity">
              <button>-</button>
              <div className="count">2</div>
              <button>+</button>
            </div>
            <div className="cart-product-total-price">
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <button className="clear-cart">Clear Cart</button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal:</span>
              <span className="amount">Amount</span>
            </div>
            <p>Taxes and shipping calculated at cheokout</p>
            <button>Check out</button>
            <div className="continue-shopping">
              <NavLink to="/">
                <span>Continue Shopping</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
