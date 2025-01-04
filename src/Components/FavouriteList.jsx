import React from "react";

// FavoriteList component to display a list of favorite properties
function FavoriteList({ favorites, onRemoveFavorite }) {
    // Function to handle the drop event for drag-and-drop
  const handleDrop = (e) => {
    const property = JSON.parse(e.dataTransfer.getData("property"));  // Retrieve the property data from the drag event
    onRemoveFavorite(property);  // Call the function to remove the dropped property from favorites
  };
  // Function to allow dragging over the drop area
  const handleDragOver = (e) => {
    e.preventDefault();  // Prevent default behavior to allow drop
  };

  return (
    <div
      className="favorite-list"
      onDrop={handleDrop}     // Event handler for drop event
      onDragOver={handleDragOver}   // Event handler for drag over event
    >
      <h2>Favorite Properties</h2>  {/* Heading for the favorite properties section */}
      {favorites.length > 0 ? (   // Check if there are any favorite properties
        favorites.map((property) => (   // Map through the list of favorite properties
          <div key={property.id} className="favorite-item">   {/* Unique key for each favorite item */}
            <p>
              {property.type} - {property.location}  {/* Display property type and location */}
            </p>
            <button onClick={() => onRemoveFavorite(property)}>Remove</button> {/* Button to remove property from favorites */}
          </div>
        ))
      ) : (
        <p>No favorite properties added yet.</p>
      )}
    </div>
  );
}

export default FavoriteList;
