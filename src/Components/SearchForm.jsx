import React, { useState } from "react";

// SearchForm component to handle property search input
function SearchForm ({onSearch}){
  // State to hold form data
  const [formData, setFormData] = useState({
    propertyType: "",   // Type of property (e.g., House, Flat)
    postcode: "",   // Postcode area for search
    minPrice: "",   // Minimum price for search
    maxPrice: "",   // Maximum price for search
    minBedrooms: "",  // Minimum number of bedrooms
    maxBedrooms: "",  // Maximum number of bedrooms
    dateFrom: "",   // Start date for property availability
    dateTo: "",   // End date for property availability
  });
  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;  // Destructure name and value from the event target
    setFormData({ ...formData, [name]: value });  // Update the formData state with the new value
  };
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Function to handle form submission
    onSearch(formData); // Pass the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="form">  {/* Form element with submit handler */}
      <div className="row">   {/* Row for property type and postcode inputs */}
        <div className="field">   {/* Field for property type selection */}
          <label>Property Type</label>
          <select
            name="propertyType"    // Name attribute for the select input
            value={formData.propertyType}   // Controlled component value
            onChange={handleChange}    // Change handler for the select input
            className="input"    // class name
          >
            <option value="">Select type</option>  {/* Default option */}
            <option value="House">House</option>  {/* Option for House */}
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Cottage">Cottage</option>
          </select>
        </div>
        <div className="field">   {/* Field for postcode input */}
          <label>Postcode Area</label>
          <input
            type="text"   // Input type for text
            name="postcode"    // Name attribute for the input
            placeholder="e.g. NW1"  // Placeholder text
            value={formData.postcode}  // Controlled component value
            onChange={handleChange}   // Change handler for the input
            className="input"   
          />
        </div>
      </div>

      <div className="row">   {/* Row for price inputs */}
        <div className="field">  {/* Field for minimum price input */}
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
        <div className="field">   {/* Field for maximum price input */}
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

      <div className="row">    {/* Row for bedroom inputs */}
        <div className="field">    {/* Field for minimum bedrooms input */}
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
        <div className="field">   {/* Field for maximum bedrooms input */}
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

      <div className="row">    {/* Row for date inputs */}
        <div className="field">    {/* Field for start date input */}
          <label>Date From</label>
          <input
            type="date"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">   {/* Field for end date input */}
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

      <button type="submit" className="button">    {/* Submit button for the form */}
        Search Properties
      </button>
    </form>
  );
};

export default SearchForm;
