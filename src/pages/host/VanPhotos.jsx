import { useOutletContext } from "react-router-dom"

export default function VanPhotos() {

  const { imageUrl, name } = useOutletContext()

  return (
    <div className="host-van-photos">
      <img src={imageUrl} alt={`Image of ${name}`} />
      <img src={imageUrl} alt={`Image of ${name}`} />
      <img src={imageUrl} alt={`Image of ${name}`} />
      <img src={imageUrl} alt={`Image of ${name}`} />
      <img src={imageUrl} alt={`Image of ${name}`} />
    </div>
  )
}