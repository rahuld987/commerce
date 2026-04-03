import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./images/logo.png";
import { CartContext } from "../pages/CartContext";
import cart from "./images/cart.png";
import "./css/global.css";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Header({ cartCount, wishlistCount }) {
  const [isSticky, setIsSticky] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-right">
          <div className="wishlist-icon"><Link to="/"><span>❤️ {wishlistCount}</span></Link></div>
          {/* <div className="cart-icon">
            <Link onClick={() => navigate("/cart")}><img src={cart} alt="cart" /> <span>({cart.length})</span></Link>
          </div> */}
          <div class="cart-value" onClick={() => navigate("/cart")}>
        🛒 <span>Cart</span> ({cart.length})
      </div>
        </div>
      </div>
    </header>
  );
}

export default Header;