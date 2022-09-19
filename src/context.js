import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // Fetch data
  const fetchData = useCallback(
    async function () {
      try {
        setLoading(true);
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        if (data.drinks) {
          const newCockatils = data.drinks.map((drink) => {
            const { strDrink, idDrink, strDrinkThumb, strAlcoholic, strGlass } =
              drink;
            return {
              id: idDrink,
              name: strDrink,
              img: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCockatils);
          setLoading(false);
        } else {
          setCocktails([]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [searchTerm]
  );
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
