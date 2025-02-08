import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import OptionsPage from './pages/OptionsPage'
import AboutPage from './pages/AboutPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)