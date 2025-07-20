// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from "./Pages/CompanyList"
import Contact from './Pages/Contact';
import Infra from './Pages/Infra';
import Home from './Pages/Home';
import Career from './Pages/Career';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infra" element={<Infra />} />
        <Route path="/comp" element={<CompanyList />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
