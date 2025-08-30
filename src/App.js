import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/NavBar/navbar';
import Footer from './component/NavBar/footer';
import HomePage from './component/NavBar/home';
import AboutPage from './component/NavBar/about';
import ProjectPage from './component/NavBar/project';
import ContactPage from './component/NavBar/contact';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
