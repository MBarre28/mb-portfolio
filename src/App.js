import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/NavBar/navbar';
import Footer from './component/NavBar/footer';
import HomePage from './component/NavBar/home';
import AboutPage from './component/NavBar/about';
import ProjectPage from './component/NavBar/project';
import ContactPage from './component/NavBar/contact';
import Video from './component/NavBar/video';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
