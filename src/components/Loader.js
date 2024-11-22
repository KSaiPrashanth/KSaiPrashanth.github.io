// Loader.js
import React from "react";
import "./Loader.css"; // You can style the spinner here

const Loader = () => {
  return (
    <>
      <div className="progress-loader">
        <div className="progress"></div>
      </div>
    </>
  );
};

export default Loader;
