import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackLink() {
    return (
        <Link to=".." relative="path" className="return-to-all-van-link">
            <FaArrowLeft />
            Back to all vans
        </Link>
    )
}