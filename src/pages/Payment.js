import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import { increment } from '../reducers/stepperSlice'

import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userSlice'
import AddressBlock from '../components/checkout/AddressBlock'
import { selectCart } from '../reducers/cartSlice'
import Button from '../components/ui/Button'

function Payment() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    if (!user.loggedIn) {
        navigate('/')
    }

    const handlePaymentStep = () => {
        dispatch(increment())
        navigate('/complete')
    }

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1 className="text-3xl font-bold">Select Delivery</h1>
                <h2 className="text-xl font-semibold">Delivery to</h2>
                <AddressBlock user={user.user} />
                <hr />
                <h2 className="text-xl font-semibold">Select Payment Method</h2>
                <h3 className="text-lg font-bold">Total {formatter.format(cart.total / 100)}</h3>
                <Button
                    title="Mock Payment"
                    classOverrides="py-4 mt-2"
                    onClick={handlePaymentStep}
                />
            </div>
            <Sidebar showButton={false} />
        </div>
    )
}

export default Payment
