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
                hostVans.map(v => (
                  <Link to={`/host/vans/${v.id}`} key={v.id}>
                    <div className="host-vans-card">
                      <img src={v.imageUrl} alt={`Image of ${v.name}`} />
                      <div className="host-vans-card-info">
                        <h3>{v.name}</h3>
                        <p>${v.price}/day</p>
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
