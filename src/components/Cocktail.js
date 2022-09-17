import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, img, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Cocktail;
