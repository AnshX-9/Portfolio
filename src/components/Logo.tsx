import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <text
          fill="currentColor"
          fontFamily="Dancing Script, cursive"
          fontSize="40" // Adjusted font size to make it smaller
          fontWeight="bold"
          x=""
          y="65"  // Adjusted the y-coordinate to position the text slightly higher
        >
          Ansh
        </text>
      </g>
    </svg>
  );
}

export default Logo;
