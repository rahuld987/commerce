import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ addToCart, toggleWishlist, wishlist }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const isWishlisted = wishlist?.some(item => item.id === product?.id);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setMainImage(data.thumbnail);

        fetch(`https://dummyjson.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(res => {
            const filtered = res.products.filter(p => p.id !== data.id);
            setRelatedProducts(filtered.slice(0, 4));
          });
      });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  const images = (product.images || []).slice(0, 4);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-detail">
      <div class="product-top">
        <div className="container">

          <div className="left">
            <img className="main-img" src={mainImage} alt={product.title} />

            <div className="thumbs">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  onClick={() => setMainImage(img)}
                  className={`thumb ${mainImage === img ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="right">
            <h2>{product.title}</h2>

            <div className="price">
              <span className="new">₹{product.price}</span>
              <span className="old">
                ₹{Math.round(product.price / (1 - product.discountPercentage / 100))}
              </span>
            </div>

            <div className="rating">
              ⭐ {product.rating} / 5
            </div>

            <p className="desc">{product.description}</p>

            <div className="cart-box">
              <div className="qty-box">
                <button onClick={decreaseQty}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQty}>+</button>
              </div>

              <div class="both-button">
                <button className="btn-commerce" onClick={() => addToCart(product, quantity)} >
                  Add to Cart
                </button>

                <button className="btn-wishlist" onClick={() => toggleWishlist(product)}>
                  {isWishlisted ? "❤️ Remove Wishlist" : "🤍 Add Wishlist"}
                </button>
              </div>
            </div>

            <div className="extra">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products-section">
        <div className="container">
          <h2 className="related-title">Related Products</h2>

          <div className="related-products">
            {relatedProducts.map((item) => (
              <div key={item.id} className="related-card">
                <img src={item.thumbnail} alt={item.title} />

                <h4>{item.title}</h4>

                <h5>₹{item.price}</h5>
<button 
  className="btn-commerce" 
  onClick={() => addToCart(item, 1)}
>
  Add to Cart
</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;