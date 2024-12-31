import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import default styles

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

  // Generate Google Map URL for the property based on its location
  const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(property.location)}`;

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
        <h2>{property.thumbnail}</h2>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Tenure:</strong> {property.tenure}</p>
        
        {/* Tabs for Description, Floor Plan, and Google Map */}
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          <TabPanel>
            <div dangerouslySetInnerHTML={{ __html: property.description }} />
          </TabPanel>
          
          <TabPanel>
            <div className="floor-plan">
              {/* Display the floor plan for the current property */}
              <img src={property.floorPlan} alt="Floor Plan" />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="google-map">
              <iframe
                title="Google Map"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={googleMapUrl}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyDetails;
