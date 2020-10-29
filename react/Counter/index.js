import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonStyles = {
    fontSize: "4rem",
    background: "var(--main-color)",
    color: "var(--background-color)",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const containerStyles = {
    display: "grid",
    placeItems: "center",
  };

  return (
    <div style={containerStyles}>
      <p style={{ fontSize: "4rem", margin: "0 0 1rem 0" }}>
        You clicked {count} times.
      </p>
      <button
        focusable="true"
        style={buttonStyles}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
    </div>
  );
};
