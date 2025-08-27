import React from 'react'

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
                  <div className="host-vans-card" key={v.id}>
                    <img src={v.imageUrl} alt={`Image of ${v.name}`} />
                    <div className="host-vans-card-info">
                      <h3>{v.name}</h3>
                      <p>${v.price}/day</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
        ) : <h2>Loading...</h2>
      }
    </section>
  )
}
