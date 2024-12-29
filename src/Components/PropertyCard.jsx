import React from "react";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.picture}
        alt={property.type}
        className="property-card-image"
      />
      <div className="property-card-content">
        <h3>{property.type}</h3>
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> £{property.price.toLocaleString()}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Description:</strong> {property.description}
        </p>
      </div>

    </div>
    
  );
}

export default PropertyCard;
