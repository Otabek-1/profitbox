import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

export default function CreateBusinessForShop(data) {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
}, []);

  const [productType, setProductType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [telegram, setTelegram] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const nav = useNavigate();
  const business_name = data.name[0];
  const owner = window.localStorage.getItem('access');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('shopname', business_name);
    formData.append('shopowner', owner);
    formData.append('shop_desc', description);
    formData.append('categories', productType);
    if (image) {
      formData.append('shop_picture', image);
    }

    axios
      .post('http://localhost:4000/addShop', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        setNotification({ show: true, message: 'Do’kon muvaffaqiyatli qo‘shildi!', type: 'success' });
        setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000); // 3 sekundda yo‘qoladi
      })
      .catch((err) => {
        setNotification({ show: true, message: 'Xatolik yuz berdi! Iltimos, qaytadan urinib ko‘ring.', type: 'error' });
        setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
      });
  };

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-xl max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Online Do'kon Ochish</h2>
      
      {/* Bildirishnoma */}
      {notification.show && (
        <div
          data-aos = "fade-up"
          className={`p-4 mb-4 text-white rounded-md ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productType" className="text-white">Nimalar sotiladi?</label>
          <input
            type="text"
            id="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Masalan: kiyim-kechak, elektronika, oziq-ovqat..."
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="text-white">Ta'rif</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            rows="4"
            placeholder="Do'koningiz haqida qisqacha ma'lumot..."
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="text-white">Do'kon rasmi</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            accept="image/*"
            required
          />
        </div>
        <div>
          <label htmlFor="telegram" className="text-white">Telegram Nickname</label>
          <input
            type="text"
            id="telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Masalan: @username"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-1/2 p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Do'konni Ochish
          </button>
          <button
            type="button"
            onClick={() => nav('/dashboard')}
            className="w-1/2 p-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
