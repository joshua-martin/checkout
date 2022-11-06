import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { useSelector } from 'react-redux'
import { selectCart } from '../../reducers/cartSlice'

function Sidebar({ showEditButton, showButton, buttonTitle, onClick }) {
    const cart = useSelector(selectCart)
    const navigate = useNavigate()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

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
                                <p className="my-1 flex flex-row justify-between">
                                    <span>
                                        Subtotal ({cart.totalItems} Item{cart.totalItems > 1 && 's'}
                                        )
                                    </span>
                                    <span className="font-semibold">
                                        {formatter.format(cart.subtotal / 100)}
                                    </span>
                                </p>

                                <p className="my-1 flex flex-row justify-between">
                                    <span>Delivery</span>
                                    <span className="font-semibold">
                                        {cart.delivery === 0
                                            ? 'Free'
                                            : formatter.format(cart.delivery / 100)}
                                    </span>
                                </p>

                                {cart.discount.total && (
                                    <p className="my-1 flex flex-row justify-between text-green-500">
                                        <span>Discount Applied</span>
                                        <span className="font-semibold">
                                            {formatter.format(cart.discount.total)}
                                        </span>
                                    </p>
                                )}

                                <p className="my-1 flex flex-row justify-between text-xl font-semibold">
                                    <span>Total</span>
                                    <span>{formatter.format(cart.total / 100)}</span>
                                </p>

                                <Button
                                    onClick={onClick}
                                    classOverrides={`mt-2 py-4 ${showButton && 'hidden'}`}
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
