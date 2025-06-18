import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./ProductData";
import "./ProductPage.css";
import BlueCards from "../components/BlueCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AIChatBot from "../components/AIchatbot";

const ProductPage = () => {
  const { category } = useParams();
  const product = productsData[category];
  if (!product) {
    return <div className="not-found">القسم غير موجود</div>;
  }

  return (
    <div className="product-page">

      {/* هيدر بخلفية صورة */}
        <Navbar />
      <div
        className="product-header"
        style={{ backgroundImage: `url(${product.headerImage})` }}>
        <div className="overlay">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="introData">
        <div className="introText">
          <p className="small-blue">{product.intro?.titleSmall}</p>
          <h2 className="large-title">{product.intro?.titleLarge}</h2>
        </div>

        <div className="introList">
          {product.intro?.items.map((item, idx) => (
            <div
              key={idx}
              className={`introItem ${item.id === product.intro?.activeItemId ? "active" : ""
                }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* قسم الصورة والوصف */}
      <div className="product-section">
        <div className="section-image">
          <img src={product.section.image} alt={product.title} />
        </div>
        <div className="section-text">
          <p>{product.section.text}</p>

          {product.section.title1 && <h3>{product.section.title1}</h3>}
          {product.section.text2 && (
            <ul className="feature-list">
              {product.section.text2.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>


      {/* المعرض */}
      <h1 className="gallery-title">{product.section.galleryTitle}</h1>
      <div className="product-gallery">
        {product.gallery.map((item, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={item.image} alt={`منتج ${idx + 1}`} />
            <div className="overlay">
              <p>{item.text}</p>
              <a href={item.link} className="btn">اعرف المزيد</a>
            </div>
          </div>
        ))}
      </div>


      <BlueCards />
      <AIChatBot/>
      <Footer />
    </div>
  );
};

export default ProductPage;
