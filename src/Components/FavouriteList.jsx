import React from "react";

function FavoriteList({ favorites, onRemoveFavorite }) {
  const handleDrop = (e) => {
    const property = JSON.parse(e.dataTransfer.getData("property"));
    onRemoveFavorite(property);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  console.log("Favorites in FavoriteList:", favorites); // Debugging log

  return (
    <div className="favorite-list" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>Favorite Properties</h2>
      {favorites.length > 0 ? (
        favorites.map((property) => (
          <div key={property.id} className="favorite-item">
            <p>{property.type} - {property.location}</p>
            <button onClick={() => onRemoveFavorite(property)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No favorite properties added yet.</p>
      )}
    </div>
  );
}

export default FavoriteList;
