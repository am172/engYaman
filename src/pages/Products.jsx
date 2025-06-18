import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import img1 from "../assets/Frameintern.png";
import img2 from "../assets/Frame 1000001769.png";
import img3 from "../assets/Frame 1000001770.png";
import img4 from "../assets/Frame 1000001772.png";
import img5 from "../assets/Frame 1000001773.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlueCards from "../components/BlueCards";
import AIChatBot from "../components/AIchatbot";


const Products = () => {
    const products = [
        { image: img2, name: " مواد البناء", link: "/products/building-materials" },
        { image: img5, name: " التكييف", link: "/products/conditioning" },
        { image: img4, name: " رخام", link: "/products/marble" },
        { image: img3, name: " الكهرباء", link: "/products/electric" },
        { image: img1, name: " انترنت الاشياء", link: "/products/IOS" },
    ];

    return (
        <div id="products">
            {/* HERO */}
            <div id="products-hero">
                <Navbar />
                <div id="hero-text">
                    <h1 id="products-title">منتجاتنا</h1>
                    <p id="products-desc" className="desc-full">
                        رمزًا للإبداع والجودة في السوقين السعودية والعالمية. نسعى إلى الارتقاء
                        بمعايير التجارة والصناعة من خلال الخدمات والمنتجات الموثوقة، بما في ذلك
                        ألواح الجبس والأسمنت، والمقاطع الفولاذية، والأسقف المعلقة، والتقنيات
                        الكهربائية الذكية، وأنواع مختلفة من أنظمة التكييف، والرخام الطبيعي،
                        والبورسلين، والسيراميك.
                    </p>

                    <p id="products-desc" className="desc-short">
                        نقدم منتجات تشمل الجبس، الفولاذ، الأسقف، الكهرباء، الرخام، والسيراميك بمعايير عالية.
                    </p>
                </div>
            </div>

            {/* PRODUCTS */}
            <div id="products-grid">
                {products.map((product, index) => (
                    <Link to={product.link} key={index} className="product-item">
                        <img src={product.image} alt={product.name} />
                    </Link>
                ))}
            </div>

             {/* BLUE CARDS */}
                        <BlueCards/>
            
                        <AIChatBot></AIChatBot>
                        {/* FOOTER */}
                        <Footer/>
        </div>
    );
};

export default Products;

