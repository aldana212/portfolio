import React from "react";

const TanStackIcon = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="#FF4154"
        strokeWidth="2"
      />
      <path
        d="M12 6v12M6 12h12"
        stroke="#FF4154"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TanStackIcon;
