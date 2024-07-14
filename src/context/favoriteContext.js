"use client"
import { createContext, useState, useContext } from "react";


export const FavoriteContext = createContext();

FavoriteContext.displayName = "Favoritos";

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  function addFavoriteVideo(newFavorite) {
    const favoriteRepeate = favorite.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorite];
    if (!favoriteRepeate) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList = favorite.filter((item) => item.id !== newFavorite.id);
    return setFavorite(newList);
  }
  return { favorite, addFavoriteVideo };
}
