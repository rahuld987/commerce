function Cart({ cart }) {
  return (
    <div>
      <h1>Cart Items</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;