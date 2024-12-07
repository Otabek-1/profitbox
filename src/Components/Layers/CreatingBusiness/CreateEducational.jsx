import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEducational(data) {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const edu_name = data.name || "Educational Center Name"; // Fallback value
  const owner = window.localStorage.getItem('access');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('center_name', edu_name);
    formData.append('center_owner', owner);
    formData.append('edu_picture', image); 
    formData.append('edu_desc', description);
    formData.append('categories', categories);

    try {
      const response = await axios.post('http://localhost:4000/addedu', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Educational Center created:', response.data);
      nav('/dashboard'); 
    } catch (error) {
      console.error('Error creating educational center:', error.response || error);
    }

    setDescription('');
    setImage(null);
    setCategories('');
    setSocialLink('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = (confirm) => {
    if (confirm) {
      setDescription('');
      setImage(null);
      setCategories('');
      nav('/dashboard');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-xl max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        Educational Center Yaratish
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="text-white">Ta'rif</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            rows="4"
            placeholder="Ta'lim markazi haqida qisqacha ma'lumot..."
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="text-white">Markazning Rasm</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            accept="image/*"
            required
          />
          {image && <p className="mt-2 text-white">Fayl: {image.name}</p>}
        </div>

        <div>
          <label htmlFor="socialLink" className="text-white">Ijtimoiy Tarmoq</label>
          <input
            type="text"
            id="socialLink"
            value={socialLink}
            onChange={(e) => setSocialLink(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            placeholder="Masalan: https://facebook.com/edu"
          />
        </div>

        <div>
          <label htmlFor="categories" className="text-white">Kategoriyalar</label>
          <input
            type="text"
            id="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            placeholder="Math, Physics, Chemistry..."
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="w-1/2 p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Yaratish
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 p-3 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Bekor Qilish
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-semibold text-center">
              Ishonchingiz komilmi?
            </h3>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleModalClose(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Ha
              </button>
              <button
                onClick={() => handleModalClose(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Yo'q
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
