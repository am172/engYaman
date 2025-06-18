import React, { useState } from "react";
import productData from "./ProductDetails";
import "./ProductDetails.css";
import Navbar from "../components/Navbar";
import BlueCards from "../components/BlueCards";
import Footer from "../components/Footer";
import AIChatBot from "../components/AIchatbot";

const ProductDetails = () => {
    const [activeCatalog, setActiveCatalog] = useState("desc");
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleSelect = (key, value) => {
        setSelectedOptions({ ...selectedOptions, [key]: value });
    };

    return (
        <div className="product-page">
            {/* Section: Search & Categories */}
            <div className="navbor">
                <Navbar />
            </div>

            <div className="padding">
                <div className="search-bar">
                    <input type="text" placeholder="🔍 بحث..." />
                </div>



                <div className="categories">
                    {["الجبس", "الكهرباء", "الرخام", "التكييف", "المعلومات", "العزل", "ألواح ساندوتش", "جبس بورد", "اكسسوارات"].map((cat, i) => (
                        <div
                            key={i}
                            className={`category ${cat === productData.category ? "active" : ""}`}
                        >
                            {cat}
                        </div>
                    ))}
                </div>
                <div className="pathes">
                    <p>
                        منتاجتنا / مواد بناء / الجبس / <span style={{ color: "#1141D8" }}>اسقف جبس مثقب</span>
                    </p>


                </div>
                {/* Section: Product Info */}
                <div className="product-info">
                    <div className="product-text">
                        <h2>{productData.title}</h2>
                        <p>{productData.description}</p>
                        <div className="product-options">
                            {Object.entries(productData.options).map(([key, values], i) => (
                                <div className="option-group" key={i}>
                                    <label>{key}</label>
                                    <select onChange={(e) => handleSelect(key, e.target.value)}>
                                        <option disabled selected>اختر {key}</option>
                                        {values.map((val, j) => (
                                            <option key={j} value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                        <button className="sample-button">طلب عينة</button>
                    </div>
                    <div className="product-image">
                        <img src={productData.image} alt={productData.title} />
                    </div>
                </div>

                {/* Section: Overview */}
                <div className="overview">
                    <h3>نظرة عامة</h3>
                    <p>{productData.overview}</p>
                </div>

                {/* Section: Catalogs */}
                <div className="catalogs">
                    <div className="tabs">
                        {productData.catalogs.map((cat) => (
                            <div
                                key={cat.id}
                                className={`tab ${cat.id === activeCatalog ? "active" : ""}`}
                                onClick={() => setActiveCatalog(cat.id)}
                            >
                                {cat.title}
                            </div>
                        ))}
                    </div>

                    <div className="catalog-content">
                        {Array.isArray(productData.catalogs.find((c) => c.id === activeCatalog)?.content) ? (
                            <ul className="feature-list">
                                {productData.catalogs.find((c) => c.id === activeCatalog).content.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{productData.catalogs.find((c) => c.id === activeCatalog)?.content}</p>
                        )}

                        {/* <a className="download-icon" href="#" title="تنزيل الكتالوج">📥</a> */}
                    </div>
                </div>

            </div>

            <BlueCards />
            <AIChatBot/>
            <Footer/>
        </div>
    );
};

export default ProductDetails;
