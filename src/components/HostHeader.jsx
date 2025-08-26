import { NavLink } from "react-router-dom"

export default function HostHeader() {
  return (
    <header className="host-header">
        <nav>
            <NavLink to="/host" end className={({isActive}) => isActive ? 'active' : null}>Dashboard</NavLink>
            <NavLink to="/host/income" className={({isActive}) => isActive ? 'active' : null}>Income</NavLink>
            <NavLink to="/host/reviews" className={({isActive}) => isActive ? 'active' : null}>Reviews</NavLink>
            <NavLink to="/host/vans" className={({isActive}) => isActive ? 'active' : null}>Vans</NavLink>
        </nav>
    </header>
  )
}
