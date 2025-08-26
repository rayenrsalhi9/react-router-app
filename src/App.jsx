import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import('./server')

import Home from "./pages/Home";
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

export default function App() {
  return (
    <BrowserRouter>

      <div className="container">

        <header>
          <Link to="/">
            <h1>#vanlife</h1>
          </Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>

        <footer>
          &copy; {new Date().getFullYear()} #VANLIFE - All Rights Reserved
        </footer>

      </div>

    </BrowserRouter>
  )
}