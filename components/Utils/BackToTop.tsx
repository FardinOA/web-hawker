"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show the button after scrolling 1000px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: isVisible ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="fixed bottom-8 right-8 text-primary-foreground w-10 h-11 rounded-md  bg-primary "
      >
        ↑
      </motion.button>
    </>
  );
};

export default BackToTop;
