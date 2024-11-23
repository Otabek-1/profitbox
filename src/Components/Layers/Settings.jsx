import React from "react";

export default function Settings() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Form */}
      <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter new password"
            className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            id="prev-password"
            placeholder="Enter previous password"
            className="w-full bg-gray-700 text-white my-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mt-6">Social Media Links</h2>
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="@telegrm_username"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="https://instagram.com/instagram_username"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Twitter Link (full link)"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Save Changes
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        <p>© 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
}
