import { NavLink } from "react-router-dom";

export default function HostVanHeader() {
  return (
    <header>
        <nav>
            <NavLink to="." end className={({isActive}) => isActive ? 'active' : null}>Details</NavLink>
            <NavLink to="pricing" className={({isActive}) => isActive ? 'active' : null}>Pricing</NavLink>
            <NavLink to="photos" className={({isActive}) => isActive ? 'active' : null}>Photos</NavLink>
        </nav>
    </header>
  )
}
