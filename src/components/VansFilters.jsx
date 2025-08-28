export default function VansFilters({ searchParams, setSearchParams }) {
    return(
        <nav className="vans-filters">
            <button className='filter simple' onClick={() => setSearchParams({type: 'simple'})}>Simple</button>
            <button className='filter rugged' onClick={() => setSearchParams({type: 'rugged'})}>Rugged</button>
            <button className='filter luxury' onClick={() => setSearchParams({type: 'luxury'})}>Luxury</button>
            {
                searchParams.get('type')
                ? <button className='clear-filters-link' onClick={() => setSearchParams({})}>Clear filters</button>
                : null
            }
        </nav>
    )
}