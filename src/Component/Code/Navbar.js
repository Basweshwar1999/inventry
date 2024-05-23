import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav >
        <ul style={{display:'flex',justifyContent:'space-around'}}>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/home">Home</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
