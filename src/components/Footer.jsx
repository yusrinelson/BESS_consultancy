// import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" relative bg-[url('assets/bess_cover.jpg')] bg-cover bg-center bg-no-repeat bg-fixed text-white py-8" id='contact'>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0 z-10">
          <img src="\src\assets\logo.jpg" alt='logo' width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0 z-10">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#clients" className="hover:underline">Clients</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right z-10">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>Muizenberg</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FaEnvelope className="mr-2" />
            <a href="mailto:admin@bessconsultancy.co.za" className="hover:underline">admin@bessconsultancy.co.za</a>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2" />
            <a href="tel:+27721514131" className="hover:underline">+27 72 151 4131</a>
          </div>
        </div>
      </div>
    </footer>
  );
}