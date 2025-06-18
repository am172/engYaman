import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import Navbar from '../components/Navbar';
import logo from '../assets/logo2.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import BlueCards from '../components/BlueCards';
import Footer from '../components/Footer';
import AIChatBot from '../components/AIchatbot';

const ContactUs = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-header">
                <h1>تواصل  <span style={{ color: "blue" }}>معنا</span></h1>
                <p>
                    تنضوي تحت مظلة "شركة العربية للاستثمار" خمس شركات متخصصة تعمل كل منها على تحقيق الجودة
                    والكفاءة في مجالها وتلبية احتياجات السوق السعودي بمستوى عال من الاحترافية
                </p>
            </div>

            <div className="contact-section">
                <div className="contact-overlay">
                    <div className="contact-container">
                        <div className="contact-form">
                            <input type="text" placeholder="الاسم" />
                            <input type="email" placeholder="البريد الإلكتروني" />
                            <input type='tele' placeholder="رقم الجوال " />
                            <textarea placeholder="رسالتك"></textarea>
                            <br />
                            <button>إرسال الرسالة</button>
                        </div>

                        <div className="contact-info">
                            <h2>معلومات التواصل</h2>
                            <p>أخبرنا عن ما تريد وسوف نتواصل معك فى أسرع وقت</p>
                            <div className="linkes">
                                <div className="info-item">
                                    <FaPhoneAlt className="icon" />
                                    <span>+966 123 456 789</span>
                                </div>
                                <div className="info-item">
                                    <FaEnvelope className="icon" />
                                    <span>info@company.com</span>
                                </div>
                                <div className="info-item">
                                    <FaWhatsapp className="icon" />
                                    <span>+966 500 123 456</span>
                                </div>
                                <div className="info-item">
                                    <FaMapMarkerAlt className="icon" />
                                    <span>الرياض، السعودية</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="Cards_rspnsv">
                <BlueCards />
            </div>

            {/* FOOTER */}
            <AIChatBot/>
            <Footer />
        </div>
    );
};

export default ContactUs;
