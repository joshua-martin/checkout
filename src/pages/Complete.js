import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userSlice'

function Payment() {
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    if (!user.loggedIn) {
        navigate('/')
    }

    return <div>Complete</div>
}

export default Payment
