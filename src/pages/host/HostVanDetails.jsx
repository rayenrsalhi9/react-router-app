import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

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
    <>
      <Link to="/host/vans" className="return-to-all-van-link">
        <FaArrowLeft />
        Back to all vans
      </Link>
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
    </>
  ) : <h2>Loading...</h2>

  return (
    <section className="host-van-details">
        {vanElement}
    </section>
  )
}
