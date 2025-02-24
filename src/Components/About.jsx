import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About HavenHub
      </motion.h1>
      <p>
        Welcome to HavenHub! Our mission is to simplify the property search
        experience for homebuyers and investors. We are committed to providing a
        user-friendly platform that connects people to their dream properties
        efficiently.
      </p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our Story
      </motion.h2>
      <p>
        HavenHub was founded with the belief that finding the perfect home
        shouldn't be a stressful process. By combining cutting-edge technology
        with a deep understanding of the real estate market, we aim to
        revolutionize property search.
      </p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        What We Offer
      </motion.h2>
      <ul>
        <li>
          A comprehensive database of properties tailored to your preferences.
        </li>
        <li>Advanced search filters to narrow down your options.</li>
        <li>
          A favorite listing feature to save and revisit properties you love.
        </li>
        <li>Detailed property insights to help you make informed decisions.</li>
      </ul>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Our Vision
      </motion.h2>
      <p>
        We envision a future where technology bridges the gap between people and
        their ideal living spaces. At HavenHub, we strive to bring transparency,
        simplicity, and joy to the property search journey.
      </p>
    </div>
  );
}

export default About;