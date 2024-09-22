import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const Header = ({ searchTerm, setSearchTerm, cartItemsCount }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="ShoppyGlobe Logo" style={{ height: '40px', marginRight: '10px' }} /> {/* Adjust height and margin */}
          <h1 style={{ margin: 0 }}>ShoppyGlobe</h1>
        </Link>
      </div>
      <nav>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
        <Link to="/cart" className="cart-icon" data-count={cartItemsCount}>
          🛒
        </Link>
      </nav>
    </header>
  );
};

export default Header;
