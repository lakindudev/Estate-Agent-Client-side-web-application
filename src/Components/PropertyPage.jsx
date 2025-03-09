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
        fill="rgba(59, 130, 246, 0.5)" 
      />
      <Spotlight 
        className="fixed bottom-[-30%] right-[-10%]" 
        fill="rgba(139, 92, 246, 0.3)" 
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10">
        <div className="glass-card mb-8 rounded-xl p-6 backdrop-blur-md bg-white/10 shadow-xl border border-white/20 dark:bg-gray-900/30 dark:border-gray-700/30">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center dark:text-gray-100">
            Find Your Dream Property
          </h1>
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Browse our exclusive collection of premium properties. Use the search filters below to find your perfect home.
          </p>
          
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
      </div>
      
      <div className={`favorites-panel glass-effect ${showFavorites ? 'show' : ''}`}>
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