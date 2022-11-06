import { useNavigate } from 'react-router-dom';

import RegisterForm from '../components/register/RegisterForm'

function Register() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    }

    return (
        <div className='container max-w-2xl mx-auto my-8 rounded-lg shadow-lg px-8 py-5'>
            <h1 className='text-3xl font-bold mb-2'>Your Details</h1>
            <p>Already have an account? <button onClick={navigateToLogin} className='text-blue-500'>Sign in</button></p>
            <RegisterForm />
        </div>
    )
}

export default Register

