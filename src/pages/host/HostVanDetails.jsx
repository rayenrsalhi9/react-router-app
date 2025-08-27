export default function HostVanDetails({vanDetails}) {

  return(
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
  )
}
