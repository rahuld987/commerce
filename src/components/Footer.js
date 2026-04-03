import React, { useEffect, useState } from "react";
import "./css/global.css";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  // 👇 Show button when scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
    <footer className="footer">
        <div class="footer-bottom">
            <div class="container">
              <p>© 2026 Commerce. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    
    
    {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          Top
        </button>
      )}
      </>
  );
}

export default Footer;