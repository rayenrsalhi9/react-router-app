import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="home-page">
<<<<<<< HEAD
      <h1>
        You got the travel plans, we got the travel vans.
      </h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">Find your van</Link>
=======
      <div className="home-page-wrapper">
        <h1>
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">Find your van</Link>
      </div>
>>>>>>> 9f801f8 (returned to the original design, but i'm doing all work by myself, AI just ruined it.)
    </section>
  )
}