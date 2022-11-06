import { Navigate, useNavigate } from 'react-router-dom';
import CheckoutItem from '../components/checkout/CheckoutItem';
import Sidebar from '../components/layout/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';
import { selectCart } from '../reducers/cartSlice';

function Delivery() {
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)
    const navigate = useNavigate();

    if (user === '') {
        return <Navigate to='/' replace />;
    }

    const handleDeliveryStep = () => {
        navigate('/payment');
    }

    return (
        <div className='container max-w-5xl mx-auto flex flex-row my-8 space-x-6 items-start'>
            <div className='rounded-lg shadow-lg p-6 w-2/3 flex-shrink-0 prose-sm'>
                <h1 className='text-3xl font-bold'>Select Delivery</h1>
                <h2 className='text-xl font-semibold'>Delivery to</h2>
                <p className="mb-1">Some guy<br />
                    Some address one, town, postcode<br />
                    +0000000000</p>
                <p className='mt-0'><strong className='text-blue-500'>Change Address</strong></p>
                <hr className="my-4" />
                <h2 className='text-xl font-semibold'>Promotional code</h2>
                <div className='pb-4 w-auto inline-block'>
                    <span className='p-2 text-blue-500 shadow-md font-bold uppercase flex items-center rounded-lg w-auto'>
                        <span className='mr-2'>
                            TENOFF
                        </span>

                        <span title="Do Not Use Code" className='text-gray-600'><FontAwesomeIcon icon={solid('times')} /></span>
                    </span>
                </div>
                <p className='text-gray-600'><FontAwesomeIcon icon={solid('info-circle')} /> Some promotional terms and conditions</p>
                <hr className="my-4" />
                {cart.items.map((item) => <CheckoutItem key={`checkout_` + item.id} item={item} />)}

            </div>
            <Sidebar showEditButton={true} onClick={handleDeliveryStep} buttonTitle="Continue to Payment" />
        </div>
    )
}

export default Delivery

