import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:4000";
export default function CreateAccount() {
  const nav = useNavigate(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [uname, setUname] = useState('');
  const [err, setErr] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address) {
      alert("Address is required!");
      return;
    }

    const userData = {
      firstname: firstName,
      lastname: lastName,
      uname,
      phoneNumber,
      email,
      password,
      address, // Ensure this is not empty
    };

    // Submit the data
    axios.post(`${url}/register`, userData)
      .then(response => {
        console.log(response.data);
        alert('Account created successfully!');
        window.localStorage.setItem('access', response.data.accessid)
        nav("/dashboard");
      })
      .catch(error => {
        const e = error.response;
        const m = e['data'];
        setErr(m['message']);
      });
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 overflow-scroll">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Create Your Account with Us!
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="block text-lg text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

            </div>

            <div className="w-1/2">
              <label htmlFor="last-name" className="block text-lg text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="uname" className="block text-lg text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-lg text-gray-300 mb-2">
              Address
            </label>
            <input
              type="text"
              value={address}
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              onChange={(e) => setAddress(e.target.value)}
              required
            />

          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="age" className="block text-lg text-gray-300 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="phone-number" className="block text-lg text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder='With country code!'
              />
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="w-5 h-5 text-blue-500 dark:text-blue-300 focus:ring-blue-500"
              checked={agreement}
              onChange={() => setAgreement(!agreement)}
            />
            <label htmlFor="agreement" className="ml-2 text-gray-300">
              I agree to the <a href="#terms" className="text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-400">terms and conditions</a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Create Account
          </button>
          {err.length > 0 ? <span className='text-red-600 py-3' style={{ textAlign: "center", width: "100%" }}>{err}</span> : null}
        </form>
      </div>
    </div>
  );
}
