import { useOutletContext } from "react-router-dom"

export default function VanPricing() {

  const { price } = useOutletContext()

  return (
    <div className="host-van-pricing">
      <p>$ {price}<span>/day</span> </p>
    </div>
  )
}