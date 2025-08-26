import { BrowserRouter, Routes, Route } from "react-router-dom"
import('./server')

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetails from "./pages/vans/VanDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}