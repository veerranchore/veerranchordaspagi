import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import HomePage from './pages/HomePage'
import BookOrderPage from './pages/BookOrderPage'
import JourneyPage from './pages/JourneyPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookOrderPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)
