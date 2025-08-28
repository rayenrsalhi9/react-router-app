import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import VansFilters from "../../components/VansFilters"
import { fetchVans } from "../../api"

export default function Vans() {

  const [vans, setVans] = React.useState([])
  React.useEffect(() => {
    fetchVans().then(data => setVans(data))
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const vansToDisplay = typeFilter ? 
  vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) :
  vans

  return(
    <section className="vans-section">
      <h1 className="section-title">Explore our van options</h1>

      <VansFilters typeFilter={typeFilter} setSearchParams={setSearchParams} />

      <div className="vans-container">
        {vansToDisplay.map(van => (
          <Link 
            to={van.id} 
            key={van.id}
            state={{ search: searchParams.toString(), type: typeFilter}}
            aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
          >
            <div className="van-card">
              <img src={van.imageUrl} alt={`Image of ${van.name}`} />
              <div className="van-info">
                <h2>{van.name}</h2>
                <div className="price-section">
                  <span className="van-price">{van.price}</span>
                  <span>/day</span>
                </div>
              </div>
              <span className={`van-type ${van.type}`}>
                {van.type}
              </span>
            </div>
          </Link>

        ))}
      </div>
    </section>
  )
}