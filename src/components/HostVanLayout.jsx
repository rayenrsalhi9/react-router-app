import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import HostVanDetails from '../pages/host/HostVanDetails'
import HostVanHeader from './HostVanHeader'
import BackLink from './BackLink'

export default function HostVanLayout() {

  const [vanDetails, setVanDetails] = React.useState(null)

  const {id} = useParams()

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans[0]))
      .catch(err => console.log(err))
  }, [id])

  return (
    <section className="host-van-details">
        <BackLink />
        <div className="host-van-details-wrapper">
            {
              vanDetails ?
              (
                <>
                  <HostVanDetails vanDetails={vanDetails} />
                  <HostVanHeader />
                  <Outlet/>
                </>
              ) : <h2>Loading...</h2>
            }
        </div>
    </section>
  )
}
