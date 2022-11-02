import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { increment } from '../../reducers/stepperSlice';

function Sidebar({ payment = false }) {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleDeliveryStep = () => {
        dispatch(increment());
        navigate('/payment');
    }

    return (
        <div className='p-4 shadow-lg rounded-lg w-full'>
            <div className="content">
                <div className="flex flex-row justify-between">
                    <span className='uppercase tracking-wide text-gray-600'>
                        Your Basket
                    </span>
                    <span className={`text-blue-500 ${payment && "hidden"}`}>
                        <a> Edit Basket</a>
                    </span>
                </div>

                <div className='flex flex-row justify-between'>
                    <span>Subtotal (1 Item)</span>
                    <span className='font-semibold'>
                        £17.32
                    </span>
                </div>

                <div className='flex flex-row justify-between'>
                    <span>Delivery</span>
                    <span className='font-semibold'>
                        Free
                    </span>
                </div>

                <div className='flex flex-row justify-between text-green-500'>
                    <span>Discount Applied</span>
                    <span className='font-semibold'>
                        £10.00
                    </span>
                </div>

                <div className='flex flex-row justify-between text-xl font-semibold'>
                    <span>Total</span>
                    <span>
                        £7.32
                    </span>
                </div>

                <button type='submit' onClick={handleDeliveryStep} className={`rounded-lg shadow-sm border border-green-500 text-white bg-green-500 w-full py-4 mt-4 font-bold tracking-wide transition-colors hover:bg-green-700 ${payment && "hidden"}`}>Continue to Payment</button>
            </div>
        </div>
    )
}

export default Sidebar

