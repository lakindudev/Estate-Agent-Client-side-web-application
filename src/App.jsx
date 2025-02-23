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
import HomePage from "./Components/HomePage.jsx";
import propertiesData from "./properties.json";
import PropertyPage from "./Components/PropertyPage";

function App() {
  // State to hold filtered properties and favorites
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties // Initial state set to all properties from JSON
  );
  const [favorites, setFavorites] = useState([]); // State to hold favorite properties

  // Function to handle property search based on form data
  const handleSearch = (formData) => {
    // Filter properties based on search criteria
    const filtered = propertiesData.properties.filter((property) => {
      const propertyDate = new Date(
        `${property.added.year}-${property.added.month}-${property.added.day}` // Convert added date to Date object
      );
      // Check if property matches the search criteria
      const matchesType = formData.propertyType
        ? property.type.toLowerCase() === formData.propertyType.toLowerCase() // Match property type
        : true;
      const matchesPostcode = formData.postcode
        ? property.location
            .toLowerCase()
            .includes(formData.postcode.toLowerCase()) // Match property location
        : true;
      const matchesMinPrice = formData.minPrice
        ? property.price >= formData.minPrice // Match minimum price
        : true;
      const matchesMaxPrice = formData.maxPrice
        ? property.price <= formData.maxPrice // Match maximum price
        : true;
      const matchesMinBedrooms = formData.minBedrooms
        ? property.bedrooms >= formData.minBedrooms // Match minimum bedrooms
        : true;
      const matchesMaxBedrooms = formData.maxBedrooms
        ? property.bedrooms <= formData.maxBedrooms // Match maximum bedrooms
        : true;
      const matchesDateFrom = formData.dateFrom
        ? propertyDate >= new Date(formData.dateFrom) // Match start date
        : true;
      const matchesDateTo = formData.dateTo
        ? propertyDate <= new Date(formData.dateTo) // Match end date
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

  // Function to clear all favorites
  const clearFavorites = () => {
    setFavorites([]); // Reset favorites to an empty array
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage onSearch={handleSearch} />} />
        <Route
          path="/favorites"
          element={
            <PropertyPage
              favorites={favorites}
              onRemoveFavorite={toggleFavorite}
              onClearFavorites={clearFavorites}
            >
              <h1 className="search-head text-white" id="search-area">
                Estate Agent Property Search
              </h1>
              <SearchForm onSearch={handleSearch} onToggleFavorites={undefined} showFavorites={false}/>
              <div className="propertyList">
                <h2 className="property-list-heading text-white">
                  Property List
                </h2>
                <div className="property-results">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={favorites.some(
                          (fav) => fav.id === property.id
                        )}
                      />
                    ))
                  ) : (
                    <p className="text-white">
                      No properties match your search criteria.
                    </p>
                  )}
                </div>
              </div>
            </PropertyPage>
          }
        />
        <Route
          path="/property/:id"
          element={
            <>
              <PropertyDetails />
            </>
          }
        />
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Route for Contact page */}
      </Routes>
      <Footer /> {/* Render the footer */}
    </Router>
  );
}

export default App;
