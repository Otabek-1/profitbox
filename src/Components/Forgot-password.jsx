import React, { useRef } from 'react';

export default function Forgotpassword() {
  const inputsRef = useRef([]);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value.length === 1 && inputsRef.current[index + 1]) {
      // Keyingi inputga fokus berish
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <p className="text-sm text-center text-gray-400">
          Enter the verification code we sent to your email.
        </p>
        <form className="space-y-4">
          <div
            className="flex w-full items-center gap-2 justify-center"
          >
            {Array(5) // 5ta input uchun massiv yaratish
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1} // Har bir input faqat 1ta belgi qabul qiladi
                  className="w-[50px] h-[70px] text-center text-5xl text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={(el) => (inputsRef.current[index] = el)} // Har bir inputni refga saqlash
                  onChange={(e) => handleInputChange(index, e)} // Hodisa boshqaruvi
                />
              ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Verify Code
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Remember your password?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
