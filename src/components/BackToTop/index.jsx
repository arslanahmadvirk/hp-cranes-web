import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
export default function BackToTop({}) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-4 rounded-full bg-primary-yellow transition duration-300 shadow z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <BsArrowUp className="w-8 h-8" />
    </button>
  );
}
