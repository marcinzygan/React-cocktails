import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  console.log(loading);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div>
      {cocktails.map((drink) => {
        console.log(drink);

        return <Cocktail key={drink.id} {...drink} />;
      })}
    </div>
  );
};

export default CocktailList;
