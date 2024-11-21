import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // AOS CSS faylini import qilish
import "../index.css"
import video from "../resources/hero-back.mp4"
import { Link } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      easing: 'ease-in-out', // Animatsiya xarakteri
      once: true, // Sahifada faqat bir marta bajariladi
    });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 z-0 relative">
      <video
        src={video}
        autoPlay
        muted
        className="w-full h-auto fixed top-0 left-0 z-0"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="bg-gradient-to-b from-gray-500 to-transparent dark:from-gray-800 dark:to-transparent p-4 z-10 relative fixed">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">ProfitBox</div>

          {/* Navbar Links */}
          <div className="space-x-6">
            <a href="#home" className="text-white dark:text-gray-300 hover:text-gray-300" data-aos="fade-down">
              Home
            </a>
            <a href="#about" className="text-white dark:text-gray-300 hover:text-gray-300" data-aos="fade-down">
              About
            </a>
            <a href="#services" className="text-white dark:text-gray-300 hover:text-gray-300" data-aos="fade-down">
              Services
            </a>
            <a href="#contact" className="text-white dark:text-gray-300 hover:text-gray-300" data-aos="fade-down">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <section className="text-center py-20" data-aos="fade-up">
        <h1 className="text-6xl text-white dark:text-white font-semibold">
          Create your business, control it easily with us!
        </h1>
        <p className="text-xl text-gray-300 dark:text-gray-300 mt-4">
          Build your dream with us!
        </p>

        <div className="mt-8 space-x-4">
          {/* Learn More Button */}
          <Link
            to="/login"
            className="inline-block bg-transparent border-2 border-gray-700 text-white hover:bg-gray-700 dark:bg-blue-800 dark:text-gray-300 dark:hover:bg-blue-600 py-3 px-8 rounded-lg text-lg font-semibold transition-colors"
          >
            Learn More
          </Link>

          {/* Start Business Button */}
          <Link
            to="/login"
            className="inline-block bg-gray-600 hover:border-2 border-gray-700 text-white hover:bg-transparent  hover:border-gray-700 dark:bg-green-800 dark:text-gray-300 dark:hover:bg-green-600 py-3 px-8 rounded-lg text-lg font-semibold transition-colors"
          >
            Start Business
          </Link>
        </div>
      </section>

    </div>

  );
};

export default Landing;
