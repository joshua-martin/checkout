import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../reducers/cartSlice'

import Button from '../ui/Button'
import SidebarValues from './SidebarValues'

const Sidebar = ({ showEditButton, showButton, buttonTitle, onClick }) => {
    const navigate = useNavigate()
    const cart = useSelector(selectCart)

    const handleEditStep = () => {
        navigate('/')
    }

    return (
        <div className="w-full rounded-lg p-6 shadow-lg">
            <div className="content prose-sm prose">
                <div className="flex flex-row justify-between">
                    <span className="font-bold uppercase tracking-wide text-gray-600">
                        Your Basket
                    </span>
                    <span className={`text-blue-500 ${!showEditButton && 'hidden'}`}>
                        <button onClick={handleEditStep}>Edit Basket</button>
                    </span>
                </div>

                {(() => {
                    if (cart.totalItems === 0) {
                        return (
                            <p className="mt-1 text-sm">You do not have any items in your cart</p>
                        )
                    } else {
                        return (
                            <>
                                <SidebarValues cart={cart} />

                                <Button
                                    onClick={onClick}
                                    classOverrides={`mt-2 py-4 ${showButton === false && 'hidden'}`}
                                    title={buttonTitle}
                                />
                            </>
                        )
                    }
                })()}
            </div>
        </div>
    )
}

export default Sidebar
