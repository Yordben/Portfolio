// filepath: src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/header">Header</Link>
      </nav>
    </header>
  );
};

export default Header;