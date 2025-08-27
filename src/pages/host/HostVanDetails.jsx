import React from 'react'
import { useParams } from 'react-router-dom'

export default function HostVanDetails() {

  const [vanDetails, setVanDetails] = React.useState(null)

  const {id} = useParams()

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans[0]))
      .catch(err => console.log(err))
  }, [id])

  const vanElement = vanDetails ? (
    <div className="host-van-details-card">
      <img src={vanDetails.imageUrl} alt={`Image of ${vanDetails.name}`} />
      <div className="host-van-details-card-info">
        <span className={`van-type ${vanDetails.type}`}>
          {vanDetails.type}
        </span>
        <h2>{vanDetails.name}</h2>
        <p className='van-price'>${vanDetails.price}<span>/day</span></p>
      </div>
    </div>
  ) : <h2>Loading...</h2>

  return vanElement
}
