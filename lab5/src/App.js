import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import QuizList from './pages/QuizList';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navigation Bar */}
        <Navbar expand="lg" variant="dark" className="custom-navbar sticky-top shadow-sm">
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
              PizzaHouse Portal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link 
                  as={NavLink} 
                  to="/" 
                  className={({ isActive }) => isActive ? "active-link" : ""}
                  end
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  as={NavLink} 
                  to="/about"
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  About
                </Nav.Link>
                <Nav.Link 
                  as={NavLink} 
                  to="/news"
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  News
                </Nav.Link>
                <Nav.Link 
                  as={NavLink} 
                  to="/quiz"
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  Quiz
                </Nav.Link>
                <Nav.Link 
                  as={NavLink} 
                  to="/contact"
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/quiz" element={<QuizList />} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="custom-footer mt-auto">
          <Container className="text-center">
            <h5 className="fw-bold text-white mb-3 text-uppercase">PizzaHouse Portal</h5>
            <p className="mb-0">
              © 2026 FPT University FER202. All Rights Reserved. Correct & Complete Lab 5.
            </p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
