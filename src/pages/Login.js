import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/login/LoginForm'
import './Login.css'

function Login() {
    const navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/register')
    }

    return (
        <div className="container mx-auto my-8 max-w-2xl rounded-lg px-8 py-5 shadow-lg">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <LoginForm />
            <p className="divider relative mb-0 text-center text-gray-600">
                <span className="relative inline-block bg-white px-3 font-bold">OR</span>
            </p>
            <button
                type="button"
                className="mt-4 w-full rounded-lg border border-blue-500 py-4 font-bold tracking-wide text-blue-500 shadow-sm transition-colors hover:bg-blue-500 hover:text-white"
                onClick={navigateToRegister}
            >
                Checkout as guest
            </button>
        </div>
    )
}

export default Login
