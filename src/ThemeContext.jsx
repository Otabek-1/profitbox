import React, { createContext, useContext, useState } from 'react';

// ThemeContext yaratish
const ThemeContext = createContext();

// Custom provider yaratish
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Dastlabki qiymat 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); // Theme o'zgartirish
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeContext'dan foydalanish uchun custom hook
export const useTheme = () => useContext(ThemeContext);
