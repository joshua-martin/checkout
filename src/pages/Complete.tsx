import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../reducers/userSlice'
import { CartItem, selectCart } from '../reducers/cartSlice'
import { useAppSelector } from '../app/hooks'
import AddressBlock from '../components/checkout/AddressBlock'
import SidebarValues from '../components/sidebar/SidebarValues'
import CompleteItem from '../components/complete/CompleteItem'

const Payment = () => {
    const navigate = useNavigate()
    const user = useAppSelector(selectUser)
    const cart = useAppSelector(selectCart)

    const { items } = cart

    useEffect(() => {
        if (!user.loggedIn) {
            navigate('/')
        }
    })

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:flex-nowrap lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1 className="text-3xl font-bold">Complete</h1>
                <h2 className="text-xl font-semibold">Deliver to</h2>
                <AddressBlock user={user.user} />
                <hr className="my-4" />
                {items.map((item: CartItem) => (
                    <CompleteItem key={`complete_` + item.id} item={item} />
                ))}
                <SidebarValues cart={cart} />
            </div>
        </div>
    )
}

export default Payment
