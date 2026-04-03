import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Checkout Page</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title} - {item.qty}</p>
        </div>
      ))}

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;