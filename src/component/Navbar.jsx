import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-movie">Add Movie</Link></li>
            </ul>
         </nav>
    </div>
  )
}
