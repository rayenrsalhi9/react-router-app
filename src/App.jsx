import { BrowserRouter, Routes, Route } from "react-router-dom"
import('./server')

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import Home from "./pages/Home";
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetails from "./pages/vans/VanDetails"

import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />

          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}