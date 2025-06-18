import React from "react";
import "./About.css";
import aboutImage from "../assets/productsData/9c44e47be0c33d417e0c3db237efb6d50f8f503a.png"; // بدّلها بالصورة الحقيقية
import value1 from "../assets/Fast.png";
import value2 from "../assets/Creative.png";
import value3 from "../assets/Quality.png";
import value4 from "../assets/Business.png";
import suadi from '../assets/suadi.png'
import Navbar from '../components/Navbar'
import chart from "../assets/chart.png";
import Footer from "../components/Footer";
import BlueCards from "../components/BlueCards";
import AIChatBot from "../components/AIchatbot";



const About = () => {
    return (
        <div className="about-page">
            
                <Navbar />
                <section className="intro">
                    <h1>عن العربية <span style={{ color: "#1141D8" }}>للأستثمار</span> </h1>
                    <p className="intro-subtext">
                        تنضوي تحت مظلة "شركة العربية للاستثمار" خمس شركات متخصصة تعمل كل منها على تحقيق الجودة والكفاءة في مجالها وتلبية احتياجات السوق السعودي بمستوى عال من الاحترافية.
                    </p>
                </section>

                <section className="about-image">
                    <img src={aboutImage} alt="عن الشركة" />
                </section>

                <section className="about-story">
                    <div className="about-text">
                        <h2>نروي قصة نجاح دامت سنوات</h2>
                        <p>
                            تأسست شركة الاستثمار العربي عام 2017 في المملكة العربية السعودية، وهي رمز للإبداع والجودة في السوق السعودي والعالمي. نسعى إلى رفع معايير التجارة والصناعة من خلال خدمات ومنتجات موثوقة، بما في ذلك ألواح الجبس والأسمنت، والمقاطع الفولاذية، والأسقف المعلقة، والتقنيات الكهربائية الذكية، وأنواع مختلفة من أنظمة التكييف، والرخام الطبيعي، والبورسلين، والسيراميك.
                            نطمح إلى بناء مستقبل مزدهر مع عملائنا وشركائنا، ملتزمين بتقديم حلول مستدامة تضيف قيمة حقيقية.
                        </p>
                    </div>
                </section>
            


            <section className="core-values">
                <h2> <span style={{ color: "#1141D8" }}>قيمنا</span> الأساسية</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <img src={value2} alt="الابتكار" />
                        <h3>بالإبتكار المستمر</h3>
                        <p>نسعى دائما ان نقدم ابتكارتنا و خبرتنا لنواكب أحدث التقنيات ونقدم حلولاً مبتكرة تلبي تطلعات عملائنا</p>
                    </div>
                    <div className="value-card">

                        <img src={value1} alt="الوقت" />
                        <h3>التسليم فى الوقت المناسب</h3>
                        <p>نلتزم بالجدول الزمني لضمان تسليم المشاريع بكفاءة واحترافية فى الوقت المحدد</p>
                    </div>
                    <div className="value-card">
                        <img src={value4} alt="العميل" />
                        <h3>التركيز ع العميل</h3>
                        <p>نضع احتياجات عملائنا في مقدمة أولوياتنا لتقديم حلول متميزة</p>
                    </div>
                    <div className="value-card">

                        <img src={value3} alt="الجوده" />
                        <h3>الإلتزام بمعايير الجودة</h3>
                        <p>نلتزم بأعلى معايير الجودة لضمان تقديم منتجات وخدمات استثنائية</p>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="vision-container">
                    <div className="vision-image-wrapper">
                        <div className="vision-image-background" />
                        <img src={suadi} alt="رجل سعودي" className="vision-image" />
                    </div>
                    <div className="vision-content">
                        <div className="vision-block">
                            <h2 className="vision-title">رؤيتنا</h2>
                            <p className="vision-text">
                                أن نصبح الشريك الأول في القطاعات التي نخدمها من خلال تقديم حلول مبتكرة ومستدامة. نسعى لإحداث تأثير إيجابي في السوق السعودي عبر الجودة، السرعة، والالتزام. هدفنا تحقيق الريادة وتعزيز البنية التحتية الاقتصادية للمملكة بما يدعم رؤية 2030.
                            </p>
                        </div>
                        <div className="vision-block">
                            <h2 className="vision-title">رسالتنا</h2>
                            <p className="vision-text">
                                نضع الجودة والسرعة في مقدمة أولوياتنا لتقديم منتجات وخدمات تتجاوز توقعات العملاء. نركز على بناء شراكات قوية وتحقيق الابتكار المستمر لتطوير القطاعات الصناعية والتجارية. نلتزم بالمعايير العالمية والجداول الزمنية لضمان رضا عملائنا وفهمهم للمستهدف.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ORG CHART */}
            <div className="chart">
                <br />
                <br />
                <h1>الهيكل التظيمي للشركة</h1>
                <img src={chart} alt="" />
            </div>

            {/* BLUE CARDS */}
            <div className="Cards_rspnsv">
                <BlueCards />
            </div>


            <AIChatBot/>
            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default About;
