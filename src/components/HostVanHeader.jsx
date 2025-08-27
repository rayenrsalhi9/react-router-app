import { NavLink } from "react-router-dom";

export default function HostVanHeader() {
  return (
    <header>
        <nav>
            <NavLink to="/host/vans/:id">Details</NavLink>
            <NavLink to="/host/vans/:id/pricing">Pricing</NavLink>
            <NavLink to="/host/vans/:id/photos">Photos</NavLink>
        </nav>
    </header>
  )
}
