import { useCallback, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../reducers/userSlice'
import { increment } from '../reducers/stepperSlice'
import { selectCart } from '../reducers/cartSlice'

import Sidebar from '../components/sidebar/Sidebar'
import AddressBlock from '../components/checkout/AddressBlock'
import Button from '../components/ui/Button'

const Payment = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
    const cart = useAppSelector(selectCart)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    useEffect(() => {
        if (user.loggedIn) {
            navigate('/')
        }
    })

    const handlePaymentStep = useCallback(() => {
        dispatch(increment())
        navigate('/complete')
    }, [dispatch, navigate])

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:flex-nowrap lg:space-x-6">
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
