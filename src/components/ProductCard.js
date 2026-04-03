import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/CartContext";

function ProductCard({ image, title, price, product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h4>
        <Link to={`/product/${product.id}`}>
          {title}
        </Link>
      </h4>

      <h5>₹{price}</h5>

      <button
        className="btn-commerce"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;