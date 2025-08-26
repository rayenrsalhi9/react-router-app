import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return(
        <header>
          <Link to="/">
            <h1>#vanlife</h1>
          </Link>
          <nav>
            <NavLink to="/host" className={({isActive}) => isActive ? 'active' : null}>
              Host
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : null}>
              About
            </NavLink>
            <NavLink to="/vans" className={({isActive}) => isActive ? 'active' : null}>
              Vans
            </NavLink>
          </nav>
        </header>
    )
}