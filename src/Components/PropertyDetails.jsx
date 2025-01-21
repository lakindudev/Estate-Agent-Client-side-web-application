import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; 

function PropertyDetails() {
  const { id } = useParams();   // Extracting property ID from URL parameters
  const property = propertiesData.properties.find((p) => p.id === id);  // Finding the property by ID
  const [mainImage, setMainImage] = useState(property?.pictures?.[0] || property.picture);  // State for the main image
 
  // If property is not found, display a message
  if (!property) {
    return <p>Property not found.</p>;
  }
  // Function to handle thumbnail image click
  const handleThumbnailClick = (image) => {
    setMainImage(image);   // Update the main image to the clicked thumbnail
  };

  // Google Map URL for the property based on its location
  const googleMapUrl = `https://www.google.com/maps?q=${property.location}&output=embed`;
  return (
    <div className="property-details">   {/* Main container for property details */}
      <div className="property-main-image">
        <img src={mainImage} alt="Main property view" className="main-image" />   {/* Display the main property image */}
      </div>
      <div className="property-thumbnails">   {/* Container for thumbnail images */}
        {property.pictures?.map((pic, index) => (  // Map through property pictures
          <img
            key={index}   // Unique key for each thumbnail
            src={pic}
            alt={`Thumbnail ${index + 1}`}  // Alt text for accessibility
            className={`thumbnail ${mainImage === pic ? "active" : ""}`}  // Add active class if it's the main image
            onClick={() => handleThumbnailClick(pic)}  // Click handler to change main image
          />
        ))}
      </div>
      <div className="property-info"> {/* Container for property information */}
        <h2>{property.thumbnail}</h2>  {/* Display property thumbnail as title */}
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
            <div dangerouslySetInnerHTML={{ __html: property.description }} />  {/* Display property description */}
          </TabPanel>
          
          <TabPanel>
            <div className="floor-plan">
              {/* Display the floor plan for the current property */}
              <img src={property.floorPlan} alt="Floor Plan" />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="google-map">  {/* Container for Google Map */}
              <iframe
                title="Google Map"
                width="100%"  // Full width
                height="400"
                frameBorder="0"
                style={{ border: 0 }}  // Inline style to remove border
                src={googleMapUrl}
                allowFullScreen=""
                aria-hidden="false"  // Accessibility attribute
                tabIndex="0"  // Tab index for accessibility
              ></iframe>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyDetails;
