import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // Container for the Footer component
    <div className="text-white  bg-gray-600 flex justify-center items-center flex-col  w-full h-2/5 p-8 ">
      <div>
        <Link to="/">
          <h2 className="hover:text-gray-400 font-bold text-lg mb-4">
            Kick Movies
          </h2>
        </Link>
      </div>
      <div>
        <h4 className=" hover:text-gray-400 font-bold text-lg mb-4">
          Follow Us
        </h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400">
          &copy; 2024 Kick Movies. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
