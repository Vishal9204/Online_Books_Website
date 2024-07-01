import React from 'react';
import books from '../../public/books.jpg';

function AboutPage() {
  return (
    <div className="min-w-full min-h-screen mt-16 bg-slate-100 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src={books} alt="Books" className="rounded-lg shadow-md max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Welcome to our e-commerce store! We are passionate about bringing you the best products and
              the best shopping experience. Our mission is to provide top-quality items at great prices.
            </p>
            <p className="text-lg mb-4">
              Founded in [Year], we have grown from a small startup to a leading retailer in the industry. 
              We value our customers and strive to meet their needs with exceptional service and support.
            </p>
            <p className="text-lg">
              Thank you for choosing us. We hope you enjoy your shopping experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
