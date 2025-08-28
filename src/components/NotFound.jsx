import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="not-found-section">
        <h2>
            Sorry, the page you were looking for was not found.
        </h2>
        <Link to='/'>Go back to home page</Link>
    </section>
  )
}
