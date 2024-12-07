import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    const data = {
      email: email,
      psw: password
    }
    e.preventDefault();
    axios.post('http://localhost:4000/login', data,{ 
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then((res)=>{
      if(res.status==200){
        window.localStorage.setItem('access', res.data.accessid);
        window.location.href = '/dashboard';
      }else{
        alert("Invalid email or password");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-400">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-sm text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-400">
              Create New Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
