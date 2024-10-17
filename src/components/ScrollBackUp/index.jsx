import React, { useState, useEffect } from "react";

const ScrollBackUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollButton}>
          &#8679; {/* Unicode arrow-up symbol or custom icon */}
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollButton: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#04396d",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },
};

export default ScrollBackUp;
