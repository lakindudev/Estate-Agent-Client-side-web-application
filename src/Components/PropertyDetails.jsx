import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../properties.json";

function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(property?.pictures?.[0] || property.picture);

  if (!property) {
    return <p>Property not found.</p>;
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="property-details">
      <div className="property-main-image">
        <img src={mainImage} alt="Main property view" className="main-image" />
      </div>
      <div className="property-thumbnails">
        {property.pictures?.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${mainImage === pic ? "active" : ""}`}
            onClick={() => handleThumbnailClick(pic)}
          />
        ))}
      </div>
      <div className="property-info">
        <h2>{property.type}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Tenure:</strong> {property.tenure}</p>
        <p><strong>Description:</strong> {property.description}</p>
      </div>
    </div>
  );
}

export default PropertyDetails;
