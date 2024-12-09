import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [responseText, setResponseText] = useState('none');
  const [errorText, setError] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [user, setUser] = useState({});
  const inputsRef = useRef([]);

  // Emailni tasdiqlash funksiyasi
  const sendCode = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Iltimos, to‘g‘ri email kiriting.');
      return;
    }

    axios
      .post('http://localhost:4000/forgot-password', { email }, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.data); // Serverdan foydalanuvchi ma'lumotlarini olish
        setShowCodeInput(true); // Kodni kiritish bo'limini ko'rsatish
        setResponseText('none');
      })
      .catch((error) => {
        setError(error.response?.data?.message || 'Xatolik yuz berdi');
        setResponseText('block');
      });
  };

  // Kodni tekshirish funksiyasi
  const checkCode = (e) => {
    e.preventDefault();

    const data = {
      id: user.id,
      code: code,
    };

    axios
      .post('http://localhost:4000/check-code', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        alert('Kod muvaffaqiyatli tasdiqlandi!');
        setChangePassword(true); // Yangi parolni o'zgartirish formasini ko'rsatish
      })
      .catch((err) => {
        console.log(err);
        alert('Kod xato kiritildi.');
      });
  };

  // Yangi parolni saqlash funksiyasi
  const updatePassword = (e) => {
    e.preventDefault();

    const data = {
      id: user.id,
      newPassword: newPassword,
    };

    axios
      .put('http://localhost:4000/update-password', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        alert('Parol muvaffaqiyatli yangilandi!');
        window.location.href = '/login'; // Login sahifasiga yo‘naltirish
      })
      .catch((err) => {
        console.log(err);
        alert('Parolni yangilashda xatolik yuz berdi.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      {!showCodeInput && !changePassword && (
        <div className="w-full flex flex-col max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
          <p className="text-sm text-center text-gray-400">
            Email manzilingizni kiriting.
          </p>
          <form onSubmit={sendCode} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-2 px-3 bg-gray-700 rounded-lg text-white outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
            >
              Send Code
            </button>
            <p className="text-red-600 text-center" style={{ display: responseText }}>
              {errorText}
            </p>
          </form>
        </div>
      )}

      {showCodeInput && !changePassword && (
        <div className="w-full flex flex-col max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Verify Code</h1>
          <p className="text-sm text-center text-gray-400">
            Email manzilingizga yuborilgan kodni kiriting.
          </p>
          <form onSubmit={checkCode} className="space-y-4">
            <div className="flex gap-2 justify-center">
              {Array(5)
                .fill('')
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-20 text-5xl outline-none focus:border-blue-500 border-2 text-center bg-gray-700 text-white rounded-lg"
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCode((prev) => prev + value);
                      if (value.length === 1 && inputsRef.current[index + 1]) {
                        inputsRef.current[index + 1].focus();
                      }
                    }}
                  />
                ))}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
            >
              Verify Code
            </button>
          </form>
        </div>
      )}

      {changePassword && (
        <div className="w-full flex flex-col max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Change Password</h1>
          <p className="text-sm text-center text-gray-400">
            Yangi parolingizni kiriting.
          </p>
          <form onSubmit={updatePassword} className="space-y-4">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full py-2 px-3 bg-gray-700 rounded-lg text-white outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
            >
              Change Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
