import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackLink({state}) {
    return (
        <Link 
            to={state.search ? `..?${state.search}` : '..'} 
            relative="path" 
            className="return-to-all-van-link"
        >
            <FaArrowLeft />
            Back to {state.type ? state.type : 'all'} vans
        </Link>
    )
}