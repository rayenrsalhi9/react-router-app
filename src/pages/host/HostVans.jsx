import React from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {

  const [hostVans, setHostVans] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setHostVans(data.vans))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="host-vans">
      {
        hostVans ? 
        (
          <>
            <h2>Your listed vans</h2>
            <div className="host-vans-container">
              {
                hostVans.map(van => (
                  <Link 
                    to={van.id} 
                    key={van.id}
                    aria-label={`View details for your van ${van.name}, priced at $${van.price} per day`}
                  >
                    <div className="host-vans-card">
                      <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                      <div className="host-vans-card-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </>
        ) : <h2>Loading...</h2>
      }
    </section>
  )
}
