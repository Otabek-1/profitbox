import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Overview() {
  const [combinedData, setCombinedData] = useState([]); // Bitta massivda barcha ma'lumotlar
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const accessToken = window.localStorage.getItem('access');

    // Shops va Edu Centerlarni birlashtirib olish
    const fetchData = async () => {
      try {
        const [shopsResponse, centersResponse] = await Promise.all([
          axios.get('http://localhost:4000/shopsOf', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }),
          axios.get('http://localhost:4000/centerof', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }),
        ]);

        const shopsData = shopsResponse.data.map((shop) => ({
          ...shop,
          type: 'shop', // Shopsni belgilash uchun
        }));

        const centersData = centersResponse.data.map((center) => ({
          ...center,
          type: 'center', // Edu Centerlarni belgilash uchun
        }));

        setCombinedData([...shopsData, ...centersData]);
      } catch (error) {
        console.error('Ma\'lumotlarni yuklashda xatolik:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <div className="text-2xl font-bold">$12500</div>
        </div>
      </div>

      {/* Unified Carousel */}
      {loading ? (
        <div className="text-center text-white">Ma'lumotlarni yuklash...</div>
      ) : (
        <Slider {...carouselSettings}>
          {combinedData.map((item) => (
            <div
              key={item.id}
              className="relative group w-full p-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300"></div>

              <div className="flex items-center justify-center w-full h-32 bg-gray-700 rounded-xl overflow-hidden mb-4">
                <img
                  src={`http://localhost:4000/${item.type === 'shop' ? item.shop_picture : item.edu_picture}`}
                  alt={item.type === 'shop' ? item.shopname : item.center_name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-center text-xl font-semibold text-white mb-4">
                {item.type === 'shop' ? item.shopname : item.center_name}
              </h3>

              <p className="text-gray-400 text-sm text-center mb-4">
                {item.type === 'shop' ? item.shop_desc : item.edu_desc}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
                <div className="text-center">
                  <i className="fas fa-star text-lg text-yellow-400 mb-1"></i>
                  <div className="font-medium">{item.rating}</div>
                  <div className="text-xs">Rating</div>
                </div>
                {item.type === 'shop' ? (
                  <div className="text-center">
                    <i className="fas fa-users text-lg text-green-400 mb-1"></i>
                    <div className="font-medium">{item.subscribers}</div>
                    <div className="text-xs">Subscribers</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <i className="fas fa-tags text-lg text-blue-400 mb-1"></i>
                    <div className="font-medium">{item.categories.join(', ')}</div>
                    <div className="text-xs">Categories</div>
                  </div>
                )}
              </div>

              <Link
                to={item.type === 'shop' ? `/shop/${item.id}` : `/center/${item.id}`}
                className="block text-center bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
              >
                View {item.type === 'shop' ? 'Shop' : 'Center'}
              </Link>
            </div>
          ))}
        </Slider>
      )}

      {/* Add Business Cluster */}
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
