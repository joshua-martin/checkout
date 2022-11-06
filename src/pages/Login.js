import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/login/LoginForm'
import './Login.css'

function Login() {

    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    }

    return (
        <div className='container max-w-2xl mx-auto my-8 rounded-lg shadow-lg px-8 py-5'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <LoginForm />
            <p className='text-gray-600 mb-0 text-center divider relative'>
                <span className='inline-block bg-white px-3 font-bold relative'>OR</span>
            </p>
            <button type='button' className='rounded-lg shadow-sm border border-blue-500 text-blue-500 w-full py-4 mt-4 font-bold tracking-wide transition-colors hover:bg-blue-500 hover:text-white' onClick={navigateToRegister}>Checkout as guest</button>
        </div>
    )
}

export default Login

