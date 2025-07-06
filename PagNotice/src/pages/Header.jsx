import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/form">Formulario</Link>
        </div>
        <div className="nav-center">
          <Link to="/" className="home-link">Inicio</Link>
        </div>
        <div className="nav-right">
          <Link to="/list">Lista</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
