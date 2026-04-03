import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../components/css/home.css";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); 

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="all-product-box">
      <h2>Products</h2>
      <div className="product-grid">
        <div className="container">
          {products.slice(0, visibleCount).map((item) => (
            <ProductCard
              key={item.id}
              image={item.thumbnail}
              title={item.title}
              price={item.price}
              product={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      {visibleCount < products.length && (
        <button className="btn-commerce" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Home;