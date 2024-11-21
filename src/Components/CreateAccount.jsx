import React, { useState } from 'react';

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreement) {
      alert("You must agree to the terms and conditions!");
      return;
    }
    console.log({
      firstName, lastName, email, password, address, age, phoneNumber
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
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
                className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
                value={firstName}
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
              id="address" 
              name="address" 
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Country, District, City'
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
        </form>
      </div>
    </div>
  );
}