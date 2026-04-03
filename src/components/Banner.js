import React from "react";
import { Link } from "react-router-dom";
import "./css/global.css";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <section className="about-commerce">
      <div className="container">
        <h1>Welcome to our Summer Camp!</h1>
        <p>Our experienced staff creates a safe, supportive space where campers grow, make friends, and build lasting memories. We believe every child thrives when free to explore their interests.</p>
        <Link to="/About" className="btn-commerce">About</Link>
      </div>
    </section>
  );
}

export default Header;