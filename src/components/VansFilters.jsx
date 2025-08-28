import { NavLink, Link } from 'react-router-dom'

export default function VansFilters() {
    return(
        <nav className="vans-filters">
            <NavLink to='?type=simple' className='filter simple'>Simple</NavLink>
            <NavLink to='?type=rugged' className='filter rugged'>Rugged</NavLink>
            <NavLink to='?type=luxury' className='filter luxury'>Luxury</NavLink>
            <Link to='.' className='clear-filters-link'>Clear filters</Link>
        </nav>
    )
}