import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../src/page/Home";
import About from "./page/About";
import Header from "./components/Header";
import "../src/assets/css/main.css";
import Footer from "./components/Footer";
import Contact from "./page/Contact";
import ProductDetail from "./page/ProductDetail";
import Cart from "./page/Cart";
import { useEffect } from "react";
import { actFetchAllMenusAsync } from "./store/menus/action";
function App() {
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(actFetchAllMenusAsync());
  }, [distpatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
