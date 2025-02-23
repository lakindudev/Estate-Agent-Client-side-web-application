import React, { useState } from "react";
import { Spotlight } from "./Spotlight";
import SearchForm from "./SearchForm";
import FavoriteList from "./FavouriteList";

const PropertyPage = ({ children, favorites, onRemoveFavorite, onClearFavorites }) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="property-page-background min-h-screen w-full relative">
      <Spotlight 
        className="fixed top-[-40%] left-[-20%] lg:left-[-10%] md:top-[-20%]" 
        fill="white" 
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10">
        {React.Children.map(children, child => {
          if (child.type === SearchForm) {
            return React.cloneElement(child, {
              onToggleFavorites: toggleFavorites,
              showFavorites: showFavorites
            });
          }
          return child;
        })}
      </div>
      <div className={`favorites-panel ${showFavorites ? 'show' : ''}`}>
        <FavoriteList
          favorites={favorites}
          onRemoveFavorite={onRemoveFavorite}
          onClearFavorites={onClearFavorites}
        />
      </div>
    </div>
  );
};

export default PropertyPage;