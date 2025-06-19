import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import gypsumDesktop from "../assets/2.png";
import gypsumMobile from "../assets/3.png";
import electricDesktop from "../assets/productsData/1.png";
import electricMobile from "../assets/productsData/5.png";
import techDesktop from "../assets/productsData/4.png";
import techMobile from "../assets/productsData/8.png";

import AIChatBot from "../components/AIchatbot";
import BranchesMap from "../components/BranchesMap";
import ceilingImage from "../assets/Frame 22.png";
import insulationImage from "../assets/Frame 22 (1).png";
import cementImage from "../assets/Frame 22 (2).png";
import marbleImage from "../assets/Frame 48.png";
import gypsumImage from "../assets/Frame 49.png";
import partner from "../assets/Frame 48 (1).png"
import partner1 from "../assets/Frame 49 (1).png"
import partner2 from "../assets/Frame 50.png"
import partner3 from "../assets/Frame 51.png"
import partner4 from "../assets/Frame 52.png"
import partner5 from "../assets/Frame 53.png"
import comp from "../assets/productsData/charts.png"
import img from "../assets/projects/image.svg"
import img1 from "../assets/projects/image-1.svg"
import img2 from "../assets/projects/image-2.svg"
import img3 from "../assets/projects/image-3.svg"
import img4 from "../assets/projects/image-4.svg"
import logo1 from '../assets/productsData/newLogo.png'

import { FaArrowLeft } from "react-icons/fa6";
import Footer from "../components/Footer";
import BlueCards from "../components/BlueCards";

const slides = [
    {
        title: "العربية للجبس",
        shortText: "ريادة في إنتاج وتوريد حلول الجبس عالية الجودة...",
        fullText: "ريادة في إنتاج وتوريد حلول الجبس عالية الجودة. نقدم مجموعة شاملة...",
        image: gypsumDesktop,
        mobileImg: gypsumMobile,
    },
    {
        title: "العربية للكهرباء",
        shortText: "حلول كهربائية مبتكرة للمباني والمنشآت...",
        fullText: "نوفر حلولًا كهربائية متكاملة تواكب التطور الصناعي وتدعم البنية التحتية...",
        image: electricDesktop,
        mobileImg: electricMobile,
    },
    {
        title: "العربية للتكنولوجيا",
        shortText: "خدمات برمجية وحلول رقمية متقدمة...",
        fullText: "نحن نقدم حلول تقنية معلومات متكاملة تشمل تطوير البرمجيات، الشبكات، والأمن السيبراني...",
        image: techDesktop,
        mobileImg: techMobile,
    },
]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="split-landing">

            {/* HERO */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <div className="hero-right">
                            <h1>{currentSlide.title}</h1>
                            <p className="hero-p">
                                <span className="full-text">{currentSlide.fullText}</span>
                                <span className="short-text">{currentSlide.shortText}</span>
                            </p>
                            <div className="buttons-container">
                                <Link to="/products">
                                    <button className="discover">اكتشف منتجاتنا</button>
                                </Link>
                                <Link to="/contact">
                                    <button className="contus">تواصل معنا</button>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-left">
                            <nav className="hero-navbar">
                                <button id="mobile-menu" className="menu-toggle" onClick={toggleMenu}>☰</button>
                                <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
                                    <li><Link to="/home">الرئيسية</Link></li>
                                    <li><Link to="/about"> من نحن</Link></li>
                                    <li><Link to="/products">منتجاتنا</Link></li>
                                    <li><Link to="/companies">الشركات التابعة</Link></li>
                                    <li><Link to="#">شركاؤنا</Link></li>
                                    <li><Link to="/contact">تواصل معنا</Link></li>
                                    <li className="logogo"><img className="logo" src={logo1} alt="لوجو" /></li>
                                </ul>
                            </nav>

                            <img className="worker" src={currentSlide.image} alt="عامل ديسكتوب" />
                            <img className="worker-mobile" src={currentSlide.mobileImg} alt="عامل موبايل" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <div className="about-container">
                <div className="about-header">
                    <h2>ماذا تعرف عن</h2>
                    <h3>العربية للإستثمار</h3>
                    <p className="about-p">
                        تأسست شركة "الشركة العربية للاستثمار" في عام 2017 في المملكة العربية السعودية، لتكون رمزًا للإبداع والجودة في السوقين السعودية والعالمية. نسعى إلى الارتقاء بمعايير التجارة والصناعة من خلال الخدمات والمنتجات الموثوقة، بما في ذلك ألواح الجبس والأسمنت، والمقاطع الفولاذية، والأسقف المعلقة، والتقنيات الكهربائية الذكية، وأنواع مختلفة من أنظمة التكييف، والرخام الطبيعي، والبورسلين، والسيراميك.
                    </p>
                    <Link to="/about">اعرف المزيد <FaArrowLeft /> </Link>
                </div>
                <br />

                <div className="section-with-text-image">
                    <div className="details">
                        <h4>
                            نعمل على تحقيق افضل <span className="highlight">جودة بمنتجاتنا</span>
                        </h4>
                        <p>
                            تعرف الأن على منتاجات العربية للاستثمار والتى تعد من افضل المنتاجات فى السوق السعودى. نعمل دائما على ان نكون شريك النجاح لعملائنا.
                        </p>
                    </div>
                    <div className="image-side">
                        <Link to="/products">
                            <div className="img-container">
                                <img id="sideP" src={ceilingImage} alt="سقف" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="image-pairs">
                    <div className="image-row uneven-1">
                        <Link to="/products">
                            <div className="img-container large">
                                <img src={insulationImage} alt="عزل" />
                            </div>
                        </Link>
                        <Link to="/products">
                            <div className="img-container small">
                                <img src={marbleImage} alt="رخام" />
                            </div>
                        </Link>
                    </div>

                    <div className="image-row uneven-2">
                        <Link to="/products">
                            <div className="img-container small">
                                <img src={cementImage} alt="أسمنت" />
                            </div>
                        </Link>
                        <Link to="/products">
                            <div className="img-container large">
                                <img src={gypsumImage} alt="جبس" />
                            </div>
                        </Link>
                    </div>
                </div>
                <br />
            </div>

            {/* PARTNERS */}
            <div className="partners-section">
                <h4>شركائنا في <span className="highlight">النجاح</span></h4>
                <p>
                    تندرج تحت مظلة "شركة العربية للاستثمار" خمس شركات متخصصة تعمل كل منها على تحقيق الجودة والكفاءة في مجالها وتلبية احتياجات السوق السعودي بمستوى عال من الاحترافية
                </p>
                <div className="partners-logos">
                    <img src={partner} alt="شريك 1" />
                    <img src={partner1} alt="شريك 2" />
                    <img src={partner2} alt="شريك 3" />
                    <img src={partner3} alt="شريك 4" />
                    <img src={partner4} alt="شريك 5" />
                    <img src={partner5} alt="شريك 6" />
                </div>
            </div>

            {/* COMPANIES */}
            <div className="companies">
                <div className="compDetails">
                    <h4>الشركات التابعه <span className="highlight">للعربيه للإستثمار</span></h4>
                    <p>
                        تندرج تحت مظلة "شركة العربية للاستثمار" خمس شركات متخصصة تعمل كل منها على تحقيق الجودة والكفاءة في مجالها وتلبية احتياجات السوق السعودي بمستوى عال من الاحترافية
                    </p>
                </div>
                <br />
                <div className="landing-container">
                    <div className="center-image">
                        <img src={comp} alt="Ain" />
                    </div>
                </div>
            </div>

            {/* GALLERY */}
            <div className="gallery-container">
                <div className="top-row">
                    {[img2, img1, img].map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`صورة ${index + 1}`} />
                            <div className="overlay">
                                <h3>مشروع {index + 1}</h3>
                                <p>تفاصيل مختصرة للمشروع</p>
                                <button>اعرف المزيد</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bottom-row">
                    {[img3, img4].map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`صورة ${index + 4}`} />
                            <div className="overlay">
                                <h3>مشروع {index + 4}</h3>
                                <p>تفاصيل مختصرة للمشروع</p>
                                <button>اعرف المزيد</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BRANCHES */}
            <div className="branches-container">
                <div className="content-section">
                    <h2>فروع العربية للاستثمار</h2>
                    <h3>الرياض</h3>
                    <ul>
                        <li>المكتب الرئيسي (الربوة)</li>
                        <li>مدينة الرياض الصناعية مستودعات (مدن)</li>
                        <li>مستودع فحص دوري</li>
                        <li>معرض مدينة موسى الصناعية</li>
                    </ul>
                    <h3>المدينة المنورة</h3>
                    <ul><li>صالة عرض ومستودع</li></ul>
                    <h3>حفر الباطن</h3>
                    <ul><li>صالة عرض ومستودع</li></ul>

                    <Link to="/contact">
                        <button className="contact-btn">تواصل معنا</button>
                    </Link>
                </div>
                <div className="map-section">
                    <div className="ifram"><BranchesMap /></div>
                </div>
            </div>

            {/* BLUE CARDS + AI */}
            <BlueCards />
            <AIChatBot />

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Home;
