import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Dashboard from './Components/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<CreateAccount />} />
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
