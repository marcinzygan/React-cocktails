import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ img, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" className="cocktail img" />
    </div>
  );
};

export default Cocktail;
