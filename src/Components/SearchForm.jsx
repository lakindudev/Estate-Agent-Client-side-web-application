import React, { useState } from "react";


function SearchForm (){
  const [formData, setFormData] = useState({
    propertyType: "",
    postcode: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div className="field">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select type</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Cottage">Cottage</option>
          </select>
        </div>
        <div className="field">
          <label>Postcode Area</label>
          <input
            type="text"
            name="postcode"
            placeholder="e.g. NW1"
            value={formData.postcode}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Min Price</label>
          <input
            type="number"
            name="minPrice"
            placeholder="Min price"
            value={formData.minPrice}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label>Max Price</label>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max price"
            value={formData.maxPrice}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Min Bedrooms</label>
          <input
            type="number"
            name="minBedrooms"
            placeholder="Min bedrooms"
            value={formData.minBedrooms}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label>Max Bedrooms</label>
          <input
            type="number"
            name="maxBedrooms"
            placeholder="Max bedrooms"
            value={formData.maxBedrooms}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Date From</label>
          <input
            type="date"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label>Date To</label>
          <input
            type="date"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <button type="submit" className="button">
        Search Properties
      </button>
    </form>
  );
};

export default SearchForm;
