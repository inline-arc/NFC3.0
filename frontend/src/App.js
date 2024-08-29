import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './components/hero';
import Login from './components/login';
function App() {
  
            
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Default or home route */}
        <Route path="/login" element={<Login />} /> {/* Route for login */}
      </Routes>
    </Router>
  );
}

export default App;
