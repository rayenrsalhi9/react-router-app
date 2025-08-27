import { Link, Outlet } from 'react-router-dom'
import HostVanDetails from '../pages/host/HostVanDetails'
import HostVanHeader from './HostVanHeader'
import { FaArrowLeft } from 'react-icons/fa'
import BackLink from './BackLink'

export default function HostVanLayout() {
  return (
    <section className="host-van-details">
        <BackLink />
        <div className="host-van-details-wrapper">
            <HostVanDetails />
            <HostVanHeader />
            <Outlet />
        </div>
    </section>
  )
}
