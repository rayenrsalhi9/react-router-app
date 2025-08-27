import { NavLink } from "react-router-dom"

export default function HostHeader() {
  return (
    <header className="host-header">
        <nav>
            <NavLink to="." end className={({isActive}) => isActive ? 'active' : null}>Dashboard</NavLink>
            <NavLink to="income" className={({isActive}) => isActive ? 'active' : null}>Income</NavLink>
            <NavLink to="vans" className={({isActive}) => isActive ? 'active' : null}>Vans</NavLink>
            <NavLink to="reviews" className={({isActive}) => isActive ? 'active' : null}>Reviews</NavLink>
        </nav>
    </header>
  )
}
