import React from "react";
import { motion } from "framer-motion";

function About() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">About HavenHub</h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Welcome to HavenHub! Our mission is to simplify the property search
            experience for homebuyers and investors. We are committed to providing a
            user-friendly platform that connects people to their dream properties
            efficiently.
          </motion.p>
        </div>

        {/* Our Story Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium">Our Story Image</p>
              </div>
            </div>
          </div>
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              HavenHub was founded with the belief that finding the perfect home
              shouldn't be a stressful process. By combining cutting-edge technology
              with a deep understanding of the real estate market, we aim to
              revolutionize property search.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Our journey began in 2020 when a group of real estate professionals and tech enthusiasts 
              came together with a shared vision: to create a platform that makes finding your dream home 
              as simple and enjoyable as possible. Since then, we've been dedicated to building innovative 
              solutions that address the real challenges faced by property seekers.
            </motion.p>
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We provide a comprehensive suite of tools and services designed to make your property 
              search experience seamless and successful.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                ),
                title: "Advanced Search",
                description: "Find properties that match your exact criteria with our powerful search filters."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                ),
                title: "Favorites List",
                description: "Save and organize properties you love for easy comparison and future reference."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                ),
                title: "Detailed Insights",
                description: "Access comprehensive property information to make informed decisions."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                ),
                title: "Expert Support",
                description: "Get assistance from our team of real estate professionals whenever you need it."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="order-2 md:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Vision
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              We envision a future where technology bridges the gap between people and
              their ideal living spaces. At HavenHub, we strive to bring transparency,
              simplicity, and joy to the property search journey.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Our goal is to become the most trusted platform for property seekers worldwide, 
              known for our innovative approach, user-centric design, and commitment to excellence. 
              We believe that everyone deserves to find a place they can truly call home.
            </motion.p>
          </div>
          
          <div className="order-1 md:order-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium">Our Vision Image</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Our dedicated team of professionals is committed to helping you find your perfect property.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in real estate, Sarah leads our team with passion and expertise."
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Michael brings innovative tech solutions to make your property search experience seamless."
              },
              {
                name: "Priya Patel",
                role: "Head of Customer Relations",
                bio: "Priya ensures that every client receives personalized attention and exceptional service."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700">
                  {/* Replace with actual team member photos */}
                  <div className="w-full h-64 bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center">
                    <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "HavenHub made finding our dream home so easy! The search filters were incredibly helpful, and we found exactly what we were looking for within weeks.",
                author: "David & Emma Thompson",
                location: "New homeowners in Colombo"
              },
              {
                quote: "As a first-time buyer, I was nervous about the process. The HavenHub team guided me every step of the way, making it a stress-free experience.",
                author: "Rajiv Mendis",
                location: "First-time homeowner"
              },
              {
                quote: "The detailed property insights helped us make an informed decision. We couldn't be happier with our new investment property!",
                author: "Amara Fernando",
                location: "Property investor"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative"
              >
                <svg className="w-12 h-12 text-blue-100 dark:text-blue-900 absolute top-6 left-6 opacity-25" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your property search journey with HavenHub today and discover the perfect place to call home.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Browse Properties
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;