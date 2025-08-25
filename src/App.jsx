import React from "react"
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import('./server')

function Home() {
  return (
    <section className="home-page">
      <h1>
        You got the travel plans, we got the travel vans.
      </h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">Find your van</Link>
    </section>
  )
}

function About() {
  return (
    <section className="about-page">
      <img src="/about-img.svg" alt="about page image" />
      <h1>
        Don’t squeeze in a sedan when you could relax in a van.
      </h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>
      <div className="action-section">
        <h2>Your destination is waiting.</h2>
        <h2>Your van is ready.</h2>
        <Link to="/vans">Explore our vans</Link>
      </div>
    </section>
  )
}

function Vans() {

  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    async function fetchVans() {
      try {
        const res = await fetch('/api/vans')
        const vans = await res.json()
        setVans(vans.vans)
      } catch(err) {
        console.log('an error occured when fetching vans: ', err)
      }
    }
    fetchVans()
  }, [])

  return(
    <section className="vans-section">
      <h1 className="section-title">Explore our van options</h1>
      <div className="vans-container">
        {vans.map(van => (
          <Link 
            to={`/vans/${van.id}`} 
            key={van.id}
            aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
          >
            <div className="van-card">
              <img src={van.imageUrl} alt={`Image of ${van.name}`} />
              <div className="van-info">
                <h2>{van.name}</h2>
                <div className="price-section">
                  <span className="van-price">{van.price}</span>
                  <span>/day</span>
                </div>
              </div>
              <span className={`van-type ${van.type}`}>
                {van.type}
              </span>
            </div>
          </Link>

        ))}
      </div>
    </section>
  )
}

function VanDetails() {

  const [details, setDetails] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data.vans))
  }, [id])

  return(
    <section className="van-details">
      <Link to="/vans">
        <FaArrowLeft />
        Back to all vans
      </Link>
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

export default function App() {
  return (
    <BrowserRouter>

      <div className="container">

        <header>
          <Link to="/">
            <h1>#vanlife</h1>
          </Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>

        <footer>
          &copy; {new Date().getFullYear()} #VANLIFE - All Rights Reserved
        </footer>

      </div>

    </BrowserRouter>
  )
}