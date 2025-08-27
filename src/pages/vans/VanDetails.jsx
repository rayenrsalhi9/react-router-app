import React from "react"
import { useParams } from "react-router-dom"
import BackLink from '../../components/BackLink'

export default function VanDetails() {

  const [details, setDetails] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data.vans))
  }, [id])

  return(
    <section className="van-details">
      <BackLink />
      {
        details ?
        <div className="van">
          <img src={details.imageUrl} alt={`Image of ${details.name}`} />
          <div className="van-info">
            <h2>
              {details.name}
            </h2>
            <span className={`van-type ${details.type}`}>
              {details.type}
            </span> 
            <p className="price">
              {details.price}
              <span>/day</span>
            </p>
            <p className="description">
              {details.description}
            </p>
            <button>Rent this van</button>
          </div>
        </div> :
        <h2>Loading details...</h2>
      }
    </section> 
  )
}