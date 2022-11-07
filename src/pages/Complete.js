import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userSlice'
import AddressBlock from '../components/checkout/AddressBlock'
import SidebarValues from '../components/sidebar/SidebarValues'
import { selectCart } from '../reducers/cartSlice'
import CompleteItem from '../components/complete/CompleteItem'

function Payment() {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)

    if (!user.loggedIn) {
        navigate('/')
    }

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1 className="text-3xl font-bold">Complete</h1>
                <h2 className="text-xl font-semibold">Deliver to</h2>
                <AddressBlock user={user.user} />
                <hr className="my-4" />
                {cart.items.map((item) => (
                    <CompleteItem key={`complete_` + item.id} item={item} />
                ))}
                <SidebarValues cart={cart} />
            </div>
        </div>
    )
}

export default Payment
