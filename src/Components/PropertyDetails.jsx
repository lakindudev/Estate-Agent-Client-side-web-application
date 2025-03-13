import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBed, FaHome, FaMapMarkerAlt, FaPoundSign, FaRegClock } from "react-icons/fa";

function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(property?.pictures?.[0] || property?.picture);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (!property) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Property not found.</p>
      </div>
    );
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const googleMapUrl = `https://www.google.com/maps?q=${property.location}&output=embed`;
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="property-details max-w-7xl mx-auto px-4 py-8 md:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - Images */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="property-main-image overflow-hidden rounded-xl shadow-lg">
            <motion.img 
              key={mainImage}
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={mainImage} 
              alt="Main property view" 
              className="main-image w-full h-[400px] object-cover"
            />
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="property-thumbnails flex gap-2 mt-4 overflow-x-auto pb-2"
          >
            {property.pictures?.map((pic, index) => (
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                src={pic}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail h-20 w-20 object-cover rounded-lg cursor-pointer transition-all duration-200 
                  ${mainImage === pic ? "ring-2 ring-blue-500 opacity-100" : "opacity-70 hover:opacity-100"}`}
                onClick={() => handleThumbnailClick(pic)}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right column - Info */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="property-info"
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold mb-4 text-gray-300"
          >
            {property.thumbnail}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <FaHome className="text-blue-500" />
              <span><strong>Type:</strong> {property.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt className="text-blue-500" />
              <span><strong>Location:</strong> {property.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaPoundSign className="text-blue-500" />
              <span><strong>Price:</strong> £{property.price.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaBed className="text-blue-500" />
              <span><strong>Bedrooms:</strong> {property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaRegClock className="text-blue-500" />
              <span><strong>Tenure:</strong> {property.tenure}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6"
          >
            <Tabs className="property-tabs">
              <TabList className="flex mb-4 border-b">
                <Tab className="px-4 py-2 font-medium cursor-pointer transition-colors duration-200 hover:text-blue-600 focus:outline-none mr-4 border-b-2 border-transparent selected:border-blue-500 selected:text-blue-600">
                  Description
                </Tab>
                <Tab className="px-4 py-2 font-medium cursor-pointer transition-colors duration-200 hover:text-blue-600 focus:outline-none mr-4 border-b-2 border-transparent selected:border-blue-500 selected:text-blue-600">
                  Floor Plan
                </Tab>
                <Tab className="px-4 py-2 font-medium cursor-pointer transition-colors duration-200 hover:text-blue-600 focus:outline-none border-b-2 border-transparent selected:border-blue-500 selected:text-blue-600">
                  Google Map
                </Tab>
              </TabList>

              <TabPanel>
                <AnimatePresence mode="wait">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: property.description }} 
                  />
                </AnimatePresence>
              </TabPanel>
              
              <TabPanel>
                <AnimatePresence mode="wait">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="floor-plan"
                  >
                    <img 
                      src={property.floorPlan} 
                      alt="Floor Plan" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </motion.div>
                </AnimatePresence>
              </TabPanel>

              <TabPanel>
                <AnimatePresence mode="wait">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="google-map rounded-lg overflow-hidden shadow-md"
                  >
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
                  </motion.div>
                </AnimatePresence>
              </TabPanel>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PropertyDetails;
