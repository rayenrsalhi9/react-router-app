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
import HostVans from "./pages/host/HostVans";

import HostVanLayout from "./components/HostVanLayout";
import VanDesc from "./pages/host/VanDesc";
import VanPricing from "./pages/host/VanPricing";
import VanPhotos from "./pages/host/VanPhotos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<VanDesc />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}