import { Navigate } from 'react-router-dom';
import SellerRow from '../components/checkout/SellerRow';
import Sidebar from '../components/layout/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';

function Delivery() {
    const user = useSelector(selectUser)

    if (user === '') {
        return <Navigate to='/' replace />;
    }

    return (
        <div className='container max-w-5xl mx-auto my-8 rounded-lg shadow-lg px-8 py-5 flex flex-row'>
            <div className='w-3/4'>
                <h1 className='text-3xl font-bold'>Select Delivery</h1>
                <h2 className='text-xl font-semibold'>Delivery to</h2>
                <p>Some guy</p>
                <p>Some address one, town, postcode</p>
                <p>+0000000000</p>
                <p><strong className='text-blue-500'>Change Address</strong></p>
                <hr />
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
                <hr />
                <SellerRow />
            </div>
            <Sidebar />
        </div>
    )
}

export default Delivery

