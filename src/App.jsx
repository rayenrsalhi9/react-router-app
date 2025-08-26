import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import('./server')

import Header from "./components/Header";
import Footer from "./components/Footer"; 

import Home from "./pages/Home";
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

export default function App() {
  return (
    <BrowserRouter>

      <div className="container">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}