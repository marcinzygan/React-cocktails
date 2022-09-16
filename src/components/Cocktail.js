import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ strDrinkThumb, strDrink }) => {
  return (
    <div>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt="" className="cocktail img" />
    </div>
  );
};

export default Cocktail;
