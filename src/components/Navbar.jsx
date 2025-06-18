import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/productsData/Frame.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">
                    <Link to='/'><img src={logo} alt="شعار الشركة" /></Link>
                </h1>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>من نحن</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)}>منتجاتنا</Link></li>
                    <li><Link to="/companies" onClick={() => setMenuOpen(false)}>الشركات التابعة</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>تواصل معنا</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
