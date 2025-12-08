import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import SportsMassage from './Components/Services/SportsMassage';
import DeepTissueMassage from './Components/Services/DeepTissueMassage';
import SwedishMassage from './Components/Services/SwedishMassage';
import AcupunctureDryNeedling from './Components/Services/AcupunctureDryNeedling';
import StrokeRehabilitation from './Components/Services/StrokeRehabilitation';
import FallsIntervention from './Components/Services/FallsIntervention';
import PostHospitalRehabilitation from './Components/Services/PostHospitalRehabilitation';
import RespiratoryRehabilitation from './Components/Services/RespiratoryRehabilitation';
import MobilePhysiotherapy from './Components/Services/MobilePhysiotherapy';
import OccupationalTherapy from './Components/Services/OccupationalTherapy';
import VitaminB12 from './Components/Services/VitaminB12';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Awards from './Components/Awards/Awards';
import ScrollToTop from './Components/Shared/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sports-massage" element={<SportsMassage />} />
          <Route path="/services/deep-tissue-massage" element={<DeepTissueMassage />} />
          <Route path="/services/swedish-massage" element={<SwedishMassage />} />
          <Route path="/services/acupuncture-dry-needling" element={<AcupunctureDryNeedling />} />
          <Route path="/services/stroke-rehabilitation" element={<StrokeRehabilitation />} />
          <Route path="/services/falls-intervention" element={<FallsIntervention />} />
          <Route path="/services/post-hospital-rehabilitation" element={<PostHospitalRehabilitation />} />
          <Route path="/services/respiratory-rehabilitation" element={<RespiratoryRehabilitation />} />
          <Route path="/services/mobile-physiotherapy" element={<MobilePhysiotherapy />} />
          <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
          <Route path="/services/vitamin-b12" element={<VitaminB12 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
