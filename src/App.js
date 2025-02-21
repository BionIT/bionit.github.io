import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <AppTheme>
    <CssBaseline enableColorScheme />
    <AppAppBar />
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </AppTheme>
      <Footer />
    </Router>
  );
}

export default App;
