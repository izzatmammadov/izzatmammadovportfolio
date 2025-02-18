import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 699) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 z-50 right-5 bg-[#ff6002] sm:bg-[#01ffff] p-3 rounded-full shadow-md transition-all duration-500 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp color="white" size={24} />
    </button>
  );
};

export default Scroll;
