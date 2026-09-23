import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Product from './Components/Product';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Solutions from './Components/Solutions';

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* Global Navbar appears on all pages */}
        <Navbar />

        {/* Route Definitions */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions/>} />
        </Routes>

        {/* Global Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
