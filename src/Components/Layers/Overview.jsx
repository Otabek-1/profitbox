import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Overview() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [balance, setBalance] = useState(12500);  // Example static balance

  const businesses = [
    {
      title: "Shop store | Online shop store",
      icon: "fas fa-store",
      stats: [
        { icon: "fas fa-users", value: "22k", label: "Users" },
        { icon: "fas fa-money-bill-wave", value: "+2k", label: "Profit" },
        { icon: "fas fa-star", value: "4.5", label: "Rating" },
      ],
      link: "/manage-shop",
    },
    {
      title: "MedCom | Consulting center",
      icon: "fas fa-headset",
      stats: [
        { icon: "fas fa-users", value: "15k", label: "Users" },
        { icon: "fas fa-money-bill-wave", value: "+1.2k", label: "Profit" },
        { icon: "fas fa-star", value: "4.2", label: "Rating" },
      ],
      link: "/manage-medcom",
    },
  ];

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-5">
      {/* Balance Box */}
      <div className="w-full bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-xl mb-8 shadow-lg">
        <div className="flex justify-between items-center text-white">
          <div className="text-lg font-semibold">Current Balance</div>
          <div className="text-2xl font-bold">${balance}</div>
        </div>
      </div>

      {/* Carousel of Business Cards */}
      <Slider {...carouselSettings}>
        {businesses.map((business, index) => (
          <div
            key={index}
            className="relative group w-full p-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            data-aos="fade-up"
          >
            {/* Neon Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300"></div>

            {/* Icon */}
            <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full text-white text-2xl mb-4 mx-auto shadow-lg">
              <i className={business.icon}></i>
            </div>

            {/* Title */}
            <h3 className="text-center text-xl font-semibold text-white mb-4">
              {business.title}
            </h3>

            {/* Stats */}
            <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
              {business.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <i className={`${stat.icon} text-lg text-green-400 mb-1`}></i>
                  <div className="font-medium">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to={business.link}
              className="block text-center bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
            >
              Manage
            </Link>
          </div>
        ))}
      </Slider>

      {/* Add Business Card */}
      <div
        className="flex flex-col items-center justify-center w-full h-56 bg-gradient-to-r from-gray-700 to-gray-900 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        data-aos="zoom-in"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-2xl mb-4">
          <i className="fas fa-plus"></i>
        </div>
        <Link
          to="/add-business"
          className="text-center text-white font-medium text-lg hover:underline"
        >
          Add your business cluster
        </Link>
      </div>
    </div>
  );
}
