import React, { useState } from 'react';

export default function CreateBusinessForShop() {
  // Form state
  const [productType, setProductType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [gmail, setGmail] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  
  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const shopData = {
      productType,
      description,
      image,
      gmail,
      phone,
      telegram,
    };

    console.log('Shop Data:', shopData);

    // Reset form (optional)
    setProductType('');
    setDescription('');
    setImage(null);
    setGmail('');
    setPhone('');
    setTelegram('');
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle cancel click to open modal
  const handleCancel = () => {
    setIsModalOpen(true);
  };

  // Handle modal confirmation (Cancel action)
  const handleModalClose = (confirm) => {
    if (confirm) {
      // Reset form if confirmed
      setProductType('');
      setDescription('');
      setImage(null);
      setGmail('');
      setPhone('');
      setTelegram('');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-xl max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Online Do'kon Ochish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Type */}
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

        {/* Description */}
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

        {/* Main Image Upload */}
        <div>
          <label htmlFor="image" className="text-white">Do'kon rasmi</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            accept="image/*"
            required
          />
          {image && (
            <div className="mt-4">
              <img src={image} alt="Shop" className="w-48 h-48 object-cover rounded-md" />
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <label htmlFor="gmail" className="text-white">Gmail</label>
          <input
            type="email"
            id="gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Masalan: example@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-white">Telefon raqam</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Masalan: +998 99 123 45 67"
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

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-1/2 p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Do'konni Ochish
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 p-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Modal for Cancel Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-semibold text-center">Are you sure?</h3>
            <div className="mt-4 text-center">
              <button
                onClick={() => handleModalClose(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => handleModalClose(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
