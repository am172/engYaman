import React from "react";
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/Discover.png'
import vector3 from '../assets/Message.png'
import ropot from '../assets/ropot2.png'
import "../pages/Home.css";

const BlueCards = () => {
  return (
    <div className="blue-cards-section">
      {/* <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" /> */}

      <div className="card" onClick={() => window.open("/company-profile.pdf", "_blank")}>
        <img src={vector1} alt="تواصل معنا" />
        <h3> أطلع على</h3>
        <p>الملف التعريفي للشركة</p>
        <a href="/company-profile.pdf" target="_blank" rel="noopener noreferrer">
          <button>اعرف المزيد</button>
        </a>
      </div>


      <div className="card middle-card">
        <img src={vector2} alt="أحدث المنتجات" />
        <h3>أكتشف</h3>
        <p>احدث حلولنا و منتاجتنا</p>

        <a href="/products">
          <button> اعرف المزيد</button>
        </a>
      </div>

      <div className="card">
        <img src={vector3} alt="الملف التعريفي" />
        <h3>  تواصل معنا</h3>
        <p>سجل وسوف نتواصل معك</p>
        <a href="/contact">
          <button> سجل الان</button>
        </a>
      </div>
    </div>

  );
};

export default BlueCards;
