import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
    {/* خلفية Blurs */}
    <div className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-10 top-10 left-20"></div>
    <div className="absolute w-[300px] h-[300px] bg-pink-500 rounded-full blur-3xl opacity-10 bottom-0 right-10"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-wrap justify-between gap-10">
        
        {/* عن الشركة */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
          <p className="text-gray-400 leading-relaxed">
            We craft beautiful and functional digital experiences that empower brands
            and engage audiences worldwide. Innovation and creativity are at the heart of everything we do.
          </p>
        </div>

        {/* روابط سريعة */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-purple-400 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Web Dev Lane</p>
          <p className="text-gray-400">Codeville, IN 12345</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@yourbrand.com</p>
        </div>

        {/* نشرة بريدية */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get our latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-lg text-gray-800 outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-r-lg transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* فاصل */}
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} BadrDev. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaFacebook /></a>
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaInstagram /></a>
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaLinkedin /></a>
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaGithub /></a>
          <a href="#" className="text-2xl hover:text-purple-400 transition"><FaYoutube /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
