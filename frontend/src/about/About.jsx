import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPage from '../components/AboutPage';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16"> {/* Adjust the margin-top value as needed */}
        <AboutPage />
      </div>
      <Footer />
    </>
  );
}

export default About;
