import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Dashboard from './Components/Dashboard';
import { ThemeProvider } from './ThemeContext';

const App = () => {
    return (
        <ThemeProvider> {/* Wrapping the entire app with ThemeProvider */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<CreateAccount />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
