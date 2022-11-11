import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userSlice'

import RegisterForm from '../components/register/RegisterForm'

const Register = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)

    const navigateToLogin = () => {
        navigate('/login')
    }

    if (user.loggedIn) return <Navigate to="/delivery" replace />

    return (
        <div className="container mx-auto my-8 max-w-2xl">
            <div className="prose-sm prose rounded-lg px-8 py-5 shadow-lg">
                <h1>Your Details</h1>
                <p>
                    Already have an account?{' '}
                    <button onClick={navigateToLogin} className="font-semibold text-blue-500">
                        Sign in
                    </button>
                </p>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register
