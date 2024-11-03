import React from "react";

const BackIcon = ({ width = 24, height = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-arrow-left"
    viewBox="0 0 24 24"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default BackIcon;
