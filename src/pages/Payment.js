import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { increment } from "../reducers/stepperSlice";

import { useSelector } from "react-redux";
import { selectUser } from "../reducers/userSlice";

function Payment() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    if (user === '') {
        return <Navigate to='/' replace />;
    }

    const handlePaymentStep = () => {
        dispatch(increment());
        navigate('/complete');
    }

    return (
        <div className='container max-w-5xl mx-auto my-8 rounded-lg shadow-lg px-8 py-5 flex flex-row'>
            <div className='w-3/4'>
                <h1 className='text-3xl font-bold'>Select Delivery</h1>
                <h2 className='text-xl font-semibold'>Delivery to</h2>
                <p>Some guy</p>
                <p>Some address one, town, postcode</p>
                <p>+0000000000</p>
                <hr />
                <h2 className='text-xl font-semibold'>Select Payment Method</h2>
                <h3 className='text-lg font-bold'>Total £7.32</h3>
                <hr />
                <button type='submit' onClick={handlePaymentStep} className='rounded-lg shadow-sm border border-green-500 text-white bg-green-500 w-full py-4 mt-4 font-bold tracking-wide transition-colors hover:bg-green-700'>Mock Payment</button>
            </div>
            <Sidebar payment />
        </div>
    )
}

export default Payment

