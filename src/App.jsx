// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from './pages/About';
import ContactUs from "./pages/Contact";
import Companies from "./pages/Companies";
import ProductPage from "./OurProducts/ProductPage";
import ProductDetails from "./OurProducts/Details";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/products/building-materials/metal-ceilings" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/companies" element={<Companies />} />
            
        </Routes>
    );
};

export default App;
