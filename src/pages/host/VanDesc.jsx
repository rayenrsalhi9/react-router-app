import { useOutletContext } from "react-router-dom"

export default function VanDesc() {

  const { name, type, description } = useOutletContext()

  return (
    <div className="host-van-description">
      <p>
        <b>Name: </b>
        { name }
      </p>
      <p>
        <b>Category: </b>
        { type[0].toUpperCase() + type.slice(1) }
      </p>
      <p>
        <b>Description: </b>
        { description }
      </p>
      <p>
        <b>Visibility: </b>
        Public
      </p>
    </div>
  )
}