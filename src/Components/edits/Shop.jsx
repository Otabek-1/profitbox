import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Shop() {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showTg, setShowTg] = useState(false);
  const [telegramChannel, setTelegramChannel] = useState('');
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productDesc: '',
    productImage: '',
    productSize: ''
  });
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/shop/${id}/${window.localStorage.getItem('access')}`)
      .then((response) => {
        setShop(response.data);
        setLoading(false);
        setTelegramChannel(response.data.telegram_channel || '');
      })
      .catch((error) => {
        console.error('Error fetching shop data:', error);
        setLoading(false);
      });

    if (id) {
      axios
        .get(`http://localhost:4000/getshopproducts?id=${id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [id]);

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      axios
        .put('http://localhost:4000/addtgch', { id, channel: telegramChannel })
        .then((response) => {
          console.log('Telegram channel updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating telegram channel:', error);
        });
    }
  };

  const handleTelegramChannelChange = (event) => {
    setTelegramChannel(event.target.value);
  };

  const handleProductInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append('shop_id', id);
    formData.append('product_name', newProduct.productName);
    formData.append('product_desc', newProduct.productDesc);
    formData.append('sizes', newProduct.productSize.split(' '));

    // Function to convert a base64 string to a Blob
    function dataURLtoBlob(dataURL) {
      const [metadata, base64Data] = dataURL.split(',');
      const mime = metadata.match(/:(.*?);/)[1]; // Extract the MIME type
      const binary = atob(base64Data); // Decode the base64 string
      const length = binary.length;
      const buffer = new ArrayBuffer(length);
      const view = new Uint8Array(buffer);

      for (let i = 0; i < length; i++) {
        view[i] = binary.charCodeAt(i);
      }

      return new Blob([view], { type: mime });
    }


    // Append the image if it exists
    if (newProduct.productImage) {
      const imageBlob = dataURLtoBlob(newProduct.productImage); // Convert base64 to Blob
      formData.append('product_picture', imageBlob, 'image.jpg');
    }

    axios
      .post('http://localhost:4000/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      })
      .then((response) => {
        console.log('Product added:', response.data);
        setShowModal(false); // Close the modal after adding the product
        setProducts([...products, response.data]); // Update the product list
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  const handleProductImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({
          ...newProduct,
          productImage: reader.result, // storing base64 encoded image
        });
      };
      reader.readAsDataURL(file); // Read the file as a base64 URL
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!shop) {
    return <div className="text-center text-white">Shop not found!</div>;
  }

  return (
    <div className="p-5 bg-gray-900 min-h-screen flex gap-3 overflow-hidden">
      <div className="box w-1/3 h rounded-lg relative bg-slate-700 px-5 py-40 flex flex-col justify-start">
        <img
          src={shop.shop_picture ? `http://localhost:4000/${shop.shop_picture}` : 'https://via.placeholder.com/150'}
          className="w-[100%] h-[150px] object-cover rounded-tl-lg rounded-tr-lg absolute top-0 left-0"
          alt=""
        />
        <h3 className="shop-name text-white font-medium text-3xl">{shop.shopname}</h3>
        <p className="desc text-white py-5 text-sm">{shop.shop_desc}</p>
        <span className="subs text-white">Daily customers: {shop.subscribers}</span>
        <span className="rating text-white">Rating: <i className="fas fa-star text-yellow-400"></i> {shop.rating}</span>
        <span className="lenpro text-white">Number of products: {products.length}</span>
        <div className="cat text-white flex items-center gap-2 py-3">
          Categories:
          {shop.categories.map((category, index) => (
            <span key={index} className="inline-block bg-gray-800 text-white px-2 py-1 text-sm rounded mr-2">
              {category}
            </span>
          ))}
        </div>
        <span className="tg-channel text-white">Connected telegram channel: {shop.telegram_channel ? shop.telegram_channel : "Not connected"}</span>
        <div className="conn my-2 flex flex-col gap-3">
          <button onClick={() => setShowTg(true)} className="btn text-white px-5 py-2 bg-slate-500 rounded-lg">{shop.telegram_channel ? "Change channel" : "Connect channel"}</button>
          {showTg ? (
            <input
              placeholder="Enter channel nick ex: @your_channel"
              value={telegramChannel}
              type="text"
              name="channel"
              id="channel"
              className="w-full h-10 p-2 rounded-md bg-transparent border-2 border-slate-500 text-white outline-none"
              onChange={handleTelegramChannelChange}
              onKeyDown={handleEnterPress}
            />
          ) : null}
        </div>

        <div className="btns absolute bottom-4">
          <button className="btn px-5 py-3 border-2 border-slate-500 text-white rounded-lg" onClick={() => { nav("/dashboard") }}>Back</button>
        </div>
      </div>

      <div className="products w-2/3 h rounded-lg relative bg-slate-700 px-5 py-5 flex flex-col gap-5">
        <h3 className="prod-title text-3xl text-white">Products</h3>
        <div className="products w-full h flex gap-3 flex-wrap overflow-y-scroll">
          {products.map((product, index) => (
            <div key={index} className="product w-[200px] h-[300px] rounded-lg bg-transparent border-2 border-slate-400 flex relative flex-col px-3 py-32 overflow-hidden">
              <img
                src={product.product_picture ? `http://localhost:4000/${product.product_picture}` : 'https://via.placeholder.com/150'}
                className="w-full h-[120px] object-cover absolute left-0 top-0"
                alt=""
              />
              <h4 className="product-name text-white font-medium text-xl">{product.product_name}</h4>
              <div className="sizes flex my-3 gap-2 w-full flex-wrap">
                {product.sizes.map((size, sizeIndex) => (
                  <span key={sizeIndex} className="size px-3 py-1 bg-slate-500 text-white rounded-lg text-xs">
                    {size}
                  </span>
                ))}
              </div>

              <div className="btns flex items-center absolute bottom-5 gap-4">
                <button className="btn px-5 py-2 bg-slate-400 text-white text-sm rounded-lg">Delete</button>
              </div>
            </div>
          ))}
          <div
            className="product w-[200px] h-[300px] rounded-lg bg-transparent border-2 border-slate-400 flex relative items-center justify-center flex-col px-3 py-32 border-dotted overflow-hidden cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <span className="add text-white flex flex-col items-center">
              <i className="fas fa-plus text-white w-[50px] h-[50px] flex items-center justify-center bg-slate-400 rounded-full"></i>
              Add product
            </span>
          </div>
        </div>
      </div>

      {/* Modal for Adding Product */}
      {showModal && (
        <div className="modal fixed inset-0 p-5 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="modal-content bg-slate-700 p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl text-white mb-4">Add New Product</h2>
            <form onSubmit={handleProductSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-white">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={newProduct.productName}
                  onChange={handleProductInputChange}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Product Description</label>
                <textarea
                  name="productDesc"
                  value={newProduct.productDesc}
                  onChange={handleProductInputChange}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Product Size (space separated)</label>
                <input
                  type="text"
                  name="productSize"
                  value={newProduct.productSize}
                  onChange={handleProductInputChange}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Product Image</label>
                <input
                  type="file"
                  name="productImage"
                  onChange={handleProductImageChange}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                />
                {/* Image preview */}
                {newProduct.productImage && (
                  <div className="mt-3">
                    <img
                      src={newProduct.productImage}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="btn text-white px-5 py-2 bg-slate-500 rounded-lg w-full"
              >
                Add Product
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-white underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
