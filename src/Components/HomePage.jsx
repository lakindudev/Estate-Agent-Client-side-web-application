import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm.jsx";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { Button } from "./MovingBorder.jsx";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

function HomePage({ onSearch }) {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Function to handle the "Search Now" button click
  const handleSearchNowClick = () => {
    navigate("/favorites"); // Navigate to the /favorites route
  };

  const testimonials = [
    {
      quote: "HavenHub made finding our dream home so easy and stress-free! The interface was intuitive and the recommendations were spot-on.",
      name: "John & Jane Doe",
      title: "Homeowners",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5
    },
    {
      quote: "The team at HavenHub is professional and very helpful. They guided me through every step of the investment process.",
      name: "Sarah Smith",
      title: "Property Investor",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5
    },
    {
      quote: "We found the perfect property within our budget. Highly recommend! The filters helped us narrow down exactly what we wanted.",
      name: "Michael Brown",
      title: "First-time Buyer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4
    },
    {
      quote: "The virtual tours saved us so much time in our property search. Being able to view homes remotely was a game-changer.",
      name: "Emily Johnson",
      title: "Remote Buyer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5
    },
    {
      quote: "Their market insights helped us make an informed decision. The data they provided gave us confidence in our purchase.",
      name: "David Wilson",
      title: "Real Estate Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5
    },
  ];

  const features = [
    {
      title: "Wide Range of Properties",
      description: "Explore a diverse selection of properties tailored to your needs and preferences.",
      icon: "🏠",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Advanced Search Filters",
      description: "Narrow down your options with our powerful search tools designed for precision.",
      icon: "🔍",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Expert Guidance",
      description: "Get expert advice from our experienced agents throughout your journey.",
      icon: "👨‍💼",
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Virtual Tours",
      description: "Explore properties from the comfort of your home with immersive 3D tours.",
      icon: "🖥️",
      color: "from-emerald-500 to-green-400"
    },
    {
      title: "Market Insights",
      description: "Stay informed with the latest real estate trends and property valuations.",
      icon: "📊",
      color: "from-rose-500 to-red-400"
    },
    {
      title: "Secure Transactions",
      description: "Your safety and security are our top priorities with encrypted processes.",
      icon: "🔒",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <div className="home-page bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        style={{ opacity, scale }}
        className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="absolute inset-0 w-full h-full bg-[url('/src/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 mix-blend-multiply"></div>
        
        <div className="hero-content relative z-10 text-center max-w-4xl px-6">
          <TextGenerateEffect
            words="Find Your Dream Property"
            className="!text-7xl !font-bold !mb-6 !text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            duration={0.5}
          />
          <TextGenerateEffect
            words="Discover the perfect home with HavenHub's exclusive listings"
            className="!text-2xl !text-gray-200 !mb-10"
            duration={0.3}
          />
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            <Button
              onClick={handleSearchNowClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
            >
              Explore Properties
            </Button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              onClick={() => navigate("/about")}
            >
              Learn More
            </motion.button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-2"
            >
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-white/60 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section - Enhanced UI */}
      <motion.div 
        ref={featuresRef}
        className="features-section py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
            >
              Our Advantages
            </motion.div>
            
            <TextGenerateEffect
              words="Why Choose HavenHub?"
              className="!text-5xl !font-bold !mb-6 !text-center !text-white"
              duration={0.5}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover the unique benefits that make us the preferred choice for property seekers worldwide.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                
                <div className="feature-card h-full bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {feature.icon}
                    </div>
                    
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={featuresInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{feature.description}</p>
                  
                  <div className="mt-auto">
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={featuresInView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className={`h-full bg-gradient-to-r ${feature.color}`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <Button
              onClick={() => navigate("/about")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section - Enhanced UI */}
      <motion.div 
        ref={testimonialsRef}
        className="testimonials-section py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-[url('/src/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400"
            >
              Testimonials
            </motion.div>
            
            <TextGenerateEffect
              words="What Our Clients Say"
              className="!text-5xl !font-bold !mb-6 !text-center !text-white"
              duration={0.5}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Custom testimonial cards instead of InfiniteMovingCards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" }}
                  className="testimonial-card bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Quote icon */}
                  <div className="mb-6">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500/30">
                      <path d="M17.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H12.5C13.163 12.5 13.7989 12.2366 14.2678 11.7678C14.7366 11.2989 15 10.663 15 10V7.5C15 6.83696 15.2634 6.20107 15.7322 5.73223C16.2011 5.26339 16.837 5 17.5 5H20M35 25H25C24.337 25 23.7011 24.7366 23.2322 24.2678C22.7634 23.7989 22.5 23.163 22.5 22.5V15C22.5 14.337 22.7634 13.7011 23.2322 13.2322C23.7011 12.7634 24.337 12.5 25 12.5H30C30.663 12.5 31.2989 12.2366 31.7678 11.7678C32.2366 11.2989 32.5 10.663 32.5 10V7.5C32.5 6.83696 32.7634 6.20107 33.2322 5.73223C33.7011 5.26339 34.337 5 35 5H37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-gray-300 mb-8 flex-grow">{testimonial.quote}</p>
                  
                  {/* Rating stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-blue-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
            ></motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>View All Testimonials</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </motion.button>
          </motion.div>
          
          {/* Testimonial stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-2">2,500+</div>
              <div className="text-gray-300">Properties Sold</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 mb-2">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        ref={ctaRef}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="cta-section py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative"
      >
        <div className="absolute inset-0 bg-[url('/src/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-multiply"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Start your search today with HavenHub and discover the perfect property that meets all your needs.</p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300"
            onClick={handleSearchNowClick}
          >
            Start Your Search
          </motion.button>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <div className="text-3xl mb-3 text-blue-400">🏠</div>
              <h3 className="text-xl font-semibold mb-2">1000+</h3>
              <p className="text-gray-400">Properties Available</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <div className="text-3xl mb-3 text-blue-400">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-2">500+</h3>
              <p className="text-gray-400">Happy Families</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <div className="text-3xl mb-3 text-blue-400">🌟</div>
              <h3 className="text-xl font-semibold mb-2">4.9/5</h3>
              <p className="text-gray-400">Customer Rating</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
