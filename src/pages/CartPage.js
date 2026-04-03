import { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
const delivery = subtotal > 0 ? 50 : 0;
const total = subtotal + delivery;

const formatPrice = (amount) =>
  amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const handleClearCart = () => {
  if (window.confirm("Are you sure you want to clear cart?")) {
    clearCart();
  }
};

  return (
    <div className="cart-page">
        <div className="container">
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-container">
          <div className="left-cart-box">
          <div className="all-cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-img-left">
                  <img src={item.thumbnail} alt={item.title} className="cart-img" />
                  <h4>{item.title}</h4>
                </div>

                <div className="cart-img-right">
                <p>₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Total: ₹{item.price * item.qty}</p>

                <button className="btn-commerce" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
                </div>
              </div>
            ))}
          </div>
          <div class="text-center">
<button className="btn-commerce" onClick={handleClearCart}>
  Clear Cart
</button>
</div>
</div>
          <div className="order-summary">
            <h5>Order Summary</h5>

            <p><span>Subtotal:</span> ₹{formatPrice(subtotal)}</p>
            <p><span>Delivery:</span> ₹{formatPrice(delivery)}</p>
            <p className="total-amount"><span>Total:</span> ₹{formatPrice(total)}</p>

            <button class="btn-commerce" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
      </div>
    </div>
  );
}

export default CartPage;