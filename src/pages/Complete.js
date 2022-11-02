import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userSlice';

function Payment() {
    const user = useSelector(selectUser)

    if (user === '') {
        return <Navigate to='/' replace />;
    }

    return (
        <div>Complete</div>
    )
}

export default Payment

