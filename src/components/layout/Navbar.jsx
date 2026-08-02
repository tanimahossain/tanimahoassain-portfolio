import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/competitive-programming', label: 'Competitive Programming' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src="/initials-logo.svg" alt="Tanima Hossain" className="navbar-logo-image" />
                </NavLink>

                <ul id="navbar-links" className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    className="navbar-mobile-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar-links"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
