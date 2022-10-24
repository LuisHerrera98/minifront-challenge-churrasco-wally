import React from "react";

import "../styles/product.css";

export const Product = ({ name, description, picture }) => {
  return (
    <div className="product-card">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{description} </p>
    </div>
  );
}
