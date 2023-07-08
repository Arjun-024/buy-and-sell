import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>

        <nav>
          <Link to="/" className="brand">
            <img src="https://static.vecteezy.com/system/resources/previews/019/493/243/original/black-discord-logo-black-discord-icon-black-discord-symbol-free-free-vector.jpg" alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
        </Routes>

        <footer>
          Made with ❤️ by Arjun
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;