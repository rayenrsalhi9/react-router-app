import { useOutletContext } from "react-router-dom"

export default function VanDesc() {

  const { description } = useOutletContext()

  return (
    <div className="host-van-description">
      <p>
        { description }
      </p>
    </div>
  )
}