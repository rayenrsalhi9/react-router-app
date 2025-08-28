export default function VansFilters({ typeFilter, setSearchParams }) {

    function handleNewFilter(key, value) {
        setSearchParams(prev => {
            if (value === null) prev.delete(key)
            else prev.set(key, value)
            return prev
        })
    }

    return(
        <nav className="vans-filters">
            <button className={'filter simple' + (typeFilter === 'simple' ? ' active' : '')} onClick={() => handleNewFilter('type', 'simple')}>Simple</button>
            <button className={'filter rugged' + (typeFilter === 'rugged' ? ' active' : '')} onClick={() => handleNewFilter('type', 'rugged')}>Rugged</button>
            <button className={'filter luxury' + (typeFilter === 'luxury' ? ' active' : '')} onClick={() => handleNewFilter('type', 'luxury')}>Luxury</button>
            {
                typeFilter
                ? <button className='clear-filters-link' onClick={() => handleNewFilter('type', null)}>Clear filters</button>
                : null
            }
        </nav>
    )
}