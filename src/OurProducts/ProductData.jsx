// src/data/productsData.js
import headerBuilding from "../assets/productsData/Group.png";
import sectionBuilding from "../assets/productsData/image.png";
import gallery1 from "../assets/productsData/image (1).png";
import gallery3 from "../assets/productsData/image (3).png";
import gallery4 from "../assets/productsData/image (4).png";
import gallery5 from "../assets/productsData/image (5).png";
import gallery6 from "../assets/productsData/image (6).png";
import gallery7 from "../assets/productsData/produvt.png";

// import headerElectricity from "../assets/productsData/electricity-header.jpg";
// import sectionElectricity from "../assets/productsData/electricity-section.jpg";
// import electricity1 from "../assets/productsData/electricity1.jpg";
// import electricity2 from "../assets/productsData/electricity2.jpg";
// import electricity3 from "../assets/productsData/electricity3.jpg";
// import electricity4 from "../assets/productsData/electricity4.jpg";
// import electricity5 from "../assets/productsData/electricity5.jpg";
// import electricity6 from "../assets/productsData/electricity6.jpg";

const productsData = {
    "building-materials": {
        title: "مواد البناء",
        description: "رمزًا للإبداع والجودة في السوقين السعودية والعالمية. نسعى إلى الارتقاء بمعايير التجارة والصناعة من خلال الخدمات والمنتجات الموثوقة، بما في ذلك ألواح الجبس والأسمنت، والمقاطع الفولاذية، والأسقف المعلقة، والتقنيات الكهربائية الذكية، وأنواع مختلفة من أنظمة التكييف، والرخام الطبيعي، والبورسلين، والسيراميك.",
        headerImage: headerBuilding,
        section: {
            image: sectionBuilding,
            text: "يستخدم لوح الجبس على نطاق واسع في كل من البناء السكني والتجاري نظرًا لخصائصه المقاومة للحريق وقدراته على عزل الصوت وسهولة التركيب. إنه بمثابة حل مثالي للجدران والأسقف والجدران، حيث يوفر سطحًا أملسًا للتشطيب والطلاء.",
            title1: "الميزات الرئيسية: ",
            text2: [
                "مقاومة الحريق: لوح الجبس غير قابل للاشتعال بشكل طبيعي، مما يجعله خيارًا آمنًا للجدران والأسقف الداخلية.",
                "عزل الصوت: تساعد كثافته وبنيته في تقليل انتقال الضوضاء، وتعزيز الخصوصية.",
                "التحكم في الرطوبة: تتوفر ألواح مقاومة للرطوبة مُصممة خصيصًا للمناطق ذات الرطوبة العالية مثل الحمامات والمطابخ.",
                "صديق للبيئة: مصنوع من الجبس الطبيعي، هذه المادة قابلة لإعادة التدوير وتساهم في ممارسات البناء المستدامة.",
                "سهولة التركيب: خفيف الوزن وسهل التعامل، يمكن قطع ألواح الجبس حسب الحجم باستخدام أدوات بسيطة، مما يسهل التركيب السريع والفعال."
            ],
            galleryTitle: "أنواع و حلول الجبس"
        },

        gallery: [
            {

                image: gallery7,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            },
            {
                image: gallery3,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            },
            {
                image: gallery4,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            },
            {
                image: gallery5,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            },
            {
                image: gallery6,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            },
            {
                image: gallery1,
                text: "نوفر لك أفضل الأسقف المعدنية المصممة بعناية.",
                link: "/products/building-materials/metal-ceilings"
            }
        ],
        intro: {
            titleSmall: "اختر وتعرف",
            titleLarge: "نقدم لك أفضل المنتجات وأفضل الحلول",
            items: [
                { name: "الجبس", id: "gypsum" },
                { name: "أسقف معدنية", id: "metal-ceilings" },
                { name: "ألواح أسمنتية", id: "cement-boards" },
                { name: "مقاطع فولاذية", id: "steel-sections" },
                { name: "مواد عزل", id: "insulation" },
                { name: "دهانات", id: "paints" },
                { name: "أبواب ونوافذ", id: "doors-windows" },
                { name: "معدات يدوية", id: "tools" },
            ],
            activeItemId: "gypsum", // القسم الحالي
        },
    },

    // "electricity": {
    //     title: "منتجات الكهرباء",
    //     description: "حلول كهربائية متكاملة بتقنيات حديثة وموثوقة.",
    //     headerImage: headerElectricity,
    //     section: {
    //         image: sectionElectricity,
    //         text: "منتجاتنا تشمل الكابلات، المفاتيح، وحدات الطاقة، وأنظمة التوصيل الذكية."
    //     },
    //     gallery: [
    //         // electricity1,
    //         // electricity2,
    //         // electricity3,
    //         // electricity4,
    //         // electricity5,
    //         // electricity6,
    //     ]
    // },

    // ممكن تضيف باقي الأقسام بنفس الشكل
};

export default productsData;

