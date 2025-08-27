import { Link, Outlet } from 'react-router-dom'
import HostVanDetails from '../pages/host/HostVanDetails'
import HostVanHeader from './HostVanHeader'
import { FaArrowLeft } from 'react-icons/fa'

export default function HostVanLayout() {
  return (
    <section className="host-van-details">
        <Link to="/host/vans" className="return-to-all-van-link">
            <FaArrowLeft />
            Back to all vans
        </Link>
        <div className="host-van-details-wrapper">
            <HostVanDetails />
            <HostVanHeader />
            <Outlet />
        </div>
    </section>
  )
}
