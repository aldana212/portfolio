import React from "react";

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Usa 'auto' para un salto instantáneo
    });
  };

  return (
    <button className="fixed bottom-10 right-10 w-[50px] h-[50px] flex items-center justify-center z-30 backdrop-blur-xl bg-(--secondary)/50 hover:bg-(--secondary) transition-all duration-200
        border border-(--border)/50 hover:border-(--border)
        group p-3 rounded-full cursor-pointer" onClick={scrollToTop}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--muted-foreground) group-hover:text-(--foreground)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M12 5V19M12 5L6 11M12 5L18 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default FloatingButton;
