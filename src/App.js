import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
