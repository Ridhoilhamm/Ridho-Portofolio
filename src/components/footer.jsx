import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="portofolio" className="w-full bg-white py-6 flex flex-col items-center justify-center border-t">
      <div className="flex space-x-5 mb-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 transition duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 transition duration-300">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 transition duration-300">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-600">
        © 2025 Ridho Ilham. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
