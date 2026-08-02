import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import CompetitiveProgramming from './pages/CompetitiveProgramming/CompetitiveProgramming';
import Achievements from './pages/Achievements/Achievements';
import Contact from './pages/Contact/Contact';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page wrapper with fade animation
const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            <Route path="/experience" element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            } />
            <Route path="/projects" element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            } />
            <Route path="/competitive-programming" element={
              <PageWrapper>
                <CompetitiveProgramming />
              </PageWrapper>
            } />
            <Route path="/achievements" element={
              <PageWrapper>
                <Achievements />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
