import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from '../assets/productsData/Frame.svg'
import '../pages/Home.css'
const Footer = () => {
  return (
      <footer className="footer">
                    <div className="footer-main">
                        {/* يمين - اللوجو */}
                        <div className="footer-section logo">
                            <img src={logo} alt="شعار الشركة" />
                        </div>
    
                        {/* وسط - روابط الموقع */}
                        <div className="footer-section links">
                            <a href="/products">منتجاتنا</a>
                            <a href="/about">من نحن</a>
                            <a href="/companies">الشركات التابعة</a>
                            <a href="/contact">تواصل معنا</a>
                        </div>
    
                        {/* يسار - السوشيال ميديا */}
                        <div className="footer-section social">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaWhatsapp /></a>
                        </div>
                    </div>
                    <hr />
                    {/* سطر الحقوق */}
                    <div className="footer-bottom">
                        © {new Date().getFullYear()} جميع الحقوق محفوظه
                    </div>
                </footer>
  )
}

export default Footer
