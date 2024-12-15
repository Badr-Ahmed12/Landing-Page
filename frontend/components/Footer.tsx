import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
          <p className="text-gray-400">Building the future, one pixel at a time.</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-purple-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition duration-300">About</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition duration-300">Services</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Web Dev Lane</p>
          <p className="text-gray-400">Codeville, IN 12345</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@yourbrand.com</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-purple-400 transition duration-300"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-purple-400 transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-purple-400 transition duration-300"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-purple-400 transition duration-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} BadrDev. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

