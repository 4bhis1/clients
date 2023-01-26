import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="main-nav">
      <div className="logo"></div>

      {Array(3)
        .fill(" ")
        .map(() => (
          <div className="box" />
        ))}
    </div>
  );
};

export default Navigation;
