export default function VansFilters({ typeFilter, setSearchParams }) {
    return(
        <nav className="vans-filters">
            <button className='filter simple' onClick={() => setSearchParams({type: 'simple'})}>Simple</button>
            <button className='filter rugged' onClick={() => setSearchParams({type: 'rugged'})}>Rugged</button>
            <button className='filter luxury' onClick={() => setSearchParams({type: 'luxury'})}>Luxury</button>
            {
                typeFilter
                ? <button className='clear-filters-link' onClick={() => setSearchParams({})}>Clear filters</button>
                : null
            }
        </nav>
    )
}