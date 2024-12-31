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
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (formData) => {
    const filtered = propertiesData.properties.filter((property) => {
      const propertyDate = new Date(`${property.added.year}-${property.added.month}-${property.added.day}`);
      const matchesType = formData.propertyType ? property.type.toLowerCase() === formData.propertyType.toLowerCase() : true;
      const matchesPostcode = formData.postcode ? property.location.toLowerCase().includes(formData.postcode.toLowerCase()) : true;
      const matchesMinPrice = formData.minPrice ? property.price >= formData.minPrice : true;
      const matchesMaxPrice = formData.maxPrice ? property.price <= formData.maxPrice : true;
      const matchesMinBedrooms = formData.minBedrooms ? property.bedrooms >= formData.minBedrooms : true;
      const matchesMaxBedrooms = formData.maxBedrooms ? property.bedrooms <= formData.maxBedrooms : true;
      const matchesDateFrom = formData.dateFrom ? propertyDate >= new Date(formData.dateFrom) : true;
      const matchesDateTo = formData.dateTo ? propertyDate <= new Date(formData.dateTo) : true;

      return matchesType && matchesPostcode && matchesMinPrice && matchesMaxPrice && matchesMinBedrooms && matchesMaxBedrooms && matchesDateFrom && matchesDateTo;
    });
    setFilteredProperties(filtered);
  };

  const toggleFavorite = (property) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === property.id)) {
        return prevFavorites.filter((fav) => fav.id !== property.id);
      }
      return [...prevFavorites, property];
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="search-head">Estate Agent Property Search</h1>
              <SearchForm onSearch={handleSearch} />
              <div className="property-results">
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      onToggleFavorite={toggleFavorite}
                      isFavorite={favorites.some((fav) => fav.id === property.id)}
                    />
                  ))
                ) : (
                  <p>No properties match your search criteria.</p>
                )}
              </div>
              <FavoriteList favorites={favorites} onRemoveFavorite={toggleFavorite} />
            </>
          }
        />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/favorites" element={<FavoriteList favorites={favorites} onRemoveFavorite={toggleFavorite} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
