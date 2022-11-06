import { useNavigate } from 'react-router-dom'

import RegisterForm from '../components/register/RegisterForm'

function Register() {
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/')
    }

    return (
        <div className="container mx-auto my-8 max-w-2xl rounded-lg px-8 py-5 shadow-lg">
            <h1 className="mb-2 text-3xl font-bold">Your Details</h1>
            <p>
                Already have an account?{' '}
                <button onClick={navigateToLogin} className="text-blue-500">
                    Sign in
                </button>
            </p>
            <RegisterForm />
        </div>
    )
}

export default Register
