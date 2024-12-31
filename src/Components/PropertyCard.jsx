import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property, onToggleFavorite, isFavorite }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  return (
    <div className="property-card" draggable onDragStart={handleDragStart}>
      <img src={property.picture || "/images/house/prop1.jpg"}alt={property.type} className="property-card-image" />
      <div className="property-card-content">
        <h3>{property.thumbnail}</h3>
        <p><strong>Type:</strong>{property.type}</p>
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> £{property.price.toLocaleString()}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>

        <div className="card-button">

          <Link to={`/property/${property.id}`} className="view-details-btn btn">
            View Details
          </Link>

          <button
            className={`favourite-btn btn ${isFavorite ? "favorite" : ""}`}
            onClick={() => onToggleFavorite(property)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorite ? "red" : "none"}
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
