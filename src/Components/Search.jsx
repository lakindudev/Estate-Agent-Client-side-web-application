import React, { useState } from "react";
import SearchForm from "./SearchForm.jsx";
import PropertyCard from "./PropertyCard.jsx";
import FavoriteList from "./FavouriteList.jsx";
import propertiesData from "../properties.json";

function SearchPage() {
  const [filteredProperties, setFilteredProperties] = useState([]);
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
    <div>
      <h1 className="search-head">Search Properties</h1>
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
    </div>
  );
}

export default SearchPage;