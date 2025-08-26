import { Link } from "react-router-dom"

export default function HostHeader() {
  return (
    <header className="host-header">
        <nav>
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
        </nav>
    </header>
  )
}
