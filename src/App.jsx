import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import PropertyCard from "./Components/PropertyCard.jsx";
import PropertyDetails from "./Components/PropertyDetails.jsx";
import FavoriteList from "./Components/FavouriteList.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import propertiesData from "./properties.json";


function App() {
    // State to hold filtered properties and favorites
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties    // Initial state set to all properties from JSON
  );
  const [favorites, setFavorites] = useState([]);   // State to hold favorite properties

  // Function to handle property search based on form data
  const handleSearch = (formData) => {
    // Filter properties based on search criteria
    const filtered = propertiesData.properties.filter((property) => {
      const propertyDate = new Date(
        `${property.added.year}-${property.added.month}-${property.added.day}`   // Convert added date to Date object
      );
      // Check if property matches the search criteria
      const matchesType = formData.propertyType
        ? property.type.toLowerCase() === formData.propertyType.toLowerCase()    // Match property type
        : true;
      const matchesPostcode = formData.postcode
        ? property.location
            .toLowerCase()
            .includes(formData.postcode.toLowerCase())   // Match property location
        : true;
      const matchesMinPrice = formData.minPrice    
        ? property.price >= formData.minPrice      // Match minimum price
        : true;
      const matchesMaxPrice = formData.maxPrice
        ? property.price <= formData.maxPrice     // Match maximum price
        : true;
      const matchesMinBedrooms = formData.minBedrooms
        ? property.bedrooms >= formData.minBedrooms    // Match minimum bedrooms
        : true;
      const matchesMaxBedrooms = formData.maxBedrooms
        ? property.bedrooms <= formData.maxBedrooms    // Match maximum bedrooms
        : true;
      const matchesDateFrom = formData.dateFrom
        ? propertyDate >= new Date(formData.dateFrom)    // Match start date
        : true;
      const matchesDateTo = formData.dateTo
        ? propertyDate <= new Date(formData.dateTo)     // Match end date
        : true;

      // Return true if all conditions match
      return (
        matchesType &&
        matchesPostcode &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesDateFrom &&
        matchesDateTo
      );
    });
    // Update the state with filtered properties
    setFilteredProperties(filtered);
  };

  // Function to toggle favorite status of a property
  const toggleFavorite = (property) => {
    setFavorites((prevFavorites) => {
      // Check if the property is already a favorite
      if (prevFavorites.some((fav) => fav.id === property.id)) {
        // Remove from favorites if it exists
        return prevFavorites.filter((fav) => fav.id !== property.id);
      }
      // Add to favorites if it doesn't exist
      return [...prevFavorites, property];
    });
  };

  // Function to handle click on "Search Now" button
  const handleHomeBtnClick = () => {
    const searchArea = document.getElementById("search-area");
    if (searchArea) {
      // Smooth scroll to the search area
      searchArea.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the search area
    }
  };

  return (
    <Router>
      <NavBar />
      <div className="image-container">   {/* Render the navigation bar */}
        <img
          src="https://t3.ftcdn.net/jpg/03/22/06/68/360_F_322066808_CANrp7u5Cdiz7700TJReqKD299d2AZtD.jpg"
          alt="landpage_img"
          className="landpage_img"
        />
        <div className="overlay-heading">Welcome to the HeavenHub</div>   {/* Overlay heading */}
        <div className="overlay-text"> Discover your dream Property</div>
        <button className="home-btn" onClick={handleHomeBtnClick}>   {/* Button to trigger search area scroll */}
          {" "}
          Search Now
        </button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="search-head" id="search-area">
                Estate Agent Property Search     {/* Main heading for search area */}
              </h1>
              <SearchForm onSearch={handleSearch} />    {/* Render search form */}
              <div className="propertyList">
                <h2 className="property-list-heading">Property List</h2>   {/* Heading for property list */}
                <div className="property-results">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                      <PropertyCard
                        key={property.id}       // Unique key for each property card
                        property={property}    // Pass property data to PropertyCard
                        onToggleFavorite={toggleFavorite} // Pass toggle function
                        isFavorite={favorites.some(
                          (fav) => fav.id === property.id   // Check if property is favorite
                        )}
                      />
                    ))
                  ) : (
                    <p>No properties match your search criteria.</p>  // Message if no properties found
                  )}
                </div>
              </div>
              <FavoriteList
                favorites={favorites}    // Pass favorite properties to FavoriteList
                onRemoveFavorite={toggleFavorite}    // Pass toggle function
              />
            </>
          }
        />
        
        <Route path="/property/:id" element={<PropertyDetails />} />   {/* Route for property details */}
        <Route
          path="/favorites"     
          element={
            <FavoriteList
              favorites={favorites}    // Pass favorite properties to FavoriteList
              onRemoveFavorite={toggleFavorite}   // Pass toggle function
            />
          }
        />
        <Route path="/about" element={<About />} />   {/* Route for About page */}
        <Route path="/contact" element={<Contact />} />   {/* Route for Contact page */}
      </Routes>
      <Footer />   {/* Render the footer */}
    </Router>
  );
}

export default App;
