import { Navigate, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../reducers/userSlice'

import LoginForm from '../components/login/LoginForm'
import Button from '../components/ui/Button'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const user = useAppSelector(selectUser)

    const navigateToRegister = () => {
        navigate('/register')
    }

    if (user.loggedIn) return <Navigate to="/delivery" replace />

    return (
        <div className="container mx-auto my-8 max-w-2xl">
            <div className="rounded-lg px-8 py-5 shadow-lg">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <LoginForm />
                <p className="divider relative mb-0 text-center text-gray-600">
                    <span className="relative inline-block bg-white px-3 font-bold">OR</span>
                </p>
                <Button
                    title="Checkout as guest"
                    onClick={navigateToRegister}
                    classOverrides="btn-alternate"
                />
            </div>
        </div>
    )
}

export default Login
