import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <h1><Link to="/">MehluliB</Link></h1>
          <nav>
            <Link to="/">Home</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} MehluliB</div>
      </footer>
    </div>
  );
}
