import React from "react";
import { Link } from "react-router-dom";

// PropertyCard component to display individual property details
function PropertyCard({ property, onToggleFavorite, isFavorite }) {
  // Function to handle the drag start event
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property)); // Set the property data for drag-and-drop
  };

  return (
    <div className="property-card" draggable onDragStart={handleDragStart}>
      {" "}
      {/* Make the card draggable */}
      <img
        src={property.picture || "/images/house/prop1.jpg"}
        alt={property.type}
        className="property-card-image"
      />
      <div className="property-card-content">   {/* Container for property details */}
        <h3>{property.thumbnail}</h3>   {/* Display property thumbnail */}
        <p>
          <strong>Type:</strong>
          {property.type}     {/* Display property type */}
        </p>
        <p>
          <strong>Location:</strong> {property.location}   {/* Display property location */}
        </p>
        <p>
          <strong>Price:</strong> £{property.price.toLocaleString()}  {/* Display property price formatted with commas */}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}   {/* Display number of bedrooms */}
        </p>

        <div className="card-button">   {/* Container for action buttons */}
          <Link
            to={`/property/${property.id}`}  // Link to property details page
            className="view-details-btn btn"
          >
            View Details
          </Link>

          <button
            className={`favourite-btn btn ${isFavorite ? "favorite" : ""}`}  // Button to toggle favorite status
            onClick={() => onToggleFavorite(property)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorite ? "red" : "none"}  // Fill color based on favorite status
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
