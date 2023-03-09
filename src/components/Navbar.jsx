import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <div>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
    )
}