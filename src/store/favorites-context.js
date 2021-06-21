import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites, favoriteMeetup];
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(({ id }) => meetupId !== id);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(({ id }) => meetupId === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
