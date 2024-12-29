import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SearchForm from "./Components/SearchForm.jsx";
import propertiesData from "./properties.json";
import PropertyCard from "./Components/PropertyCard.jsx";
import React, { useState } from "react";


function App() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

  const handleSearch = (formData) => {
    const filtered = propertiesData.properties.filter((property) => {
      const matchesType = formData.propertyType
        ? property.type.toLowerCase() === formData.propertyType.toLowerCase()
        : true;
      const matchesPostcode = formData.postcode
        ? property.location.toLowerCase().includes(formData.postcode.toLowerCase())
        : true;
      const matchesMinPrice = formData.minPrice ? property.price >= formData.minPrice : true;
      const matchesMaxPrice = formData.maxPrice ? property.price <= formData.maxPrice : true;
      const matchesMinBedrooms = formData.minBedrooms
        ? property.bedrooms >= formData.minBedrooms
        : true;
      const matchesMaxBedrooms = formData.maxBedrooms
        ? property.bedrooms <= formData.maxBedrooms
        : true;
      const matchesDateFrom = formData.dateFrom
        ? new Date(`${property.added.year}-${property.added.month}-${property.added.day}`) >=
          new Date(formData.dateFrom)
        : true;
      const matchesDateTo = formData.dateTo
        ? new Date(`${property.added.year}-${property.added.month}-${property.added.day}`) <=
          new Date(formData.dateTo)
        : true;

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

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <h1 className="search-head">Estate Agent Property Search</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="property-results">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default App;
