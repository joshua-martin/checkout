import { toggleQuantity } from '../../reducers/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './BasketItem.css'

function BasketItem({ item }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(item.quantity)

    const adjustQuantity = (e) => {
        const { value } = e.target
        setQuantity(parseInt(value))
    }

    const manuallyAdjustQuantity = () => {
        dispatch(toggleQuantity({ item: item, quantity: quantity }))
    }

    const decrementQuantity = () => {
        const newQty = quantity - 1
        setQuantity(newQty)
        dispatch(toggleQuantity({ item: item, quantity: newQty }))
    }

    const incrementQuantity = () => {
        const newQty = quantity + 1
        setQuantity(newQty)
        dispatch(toggleQuantity({ item: item, quantity: newQty }))
    }

    return (
        <div className="mb-2 rounded-lg border p-4">
            <p className="mb-2 mt-0 border-b pb-2 text-sm">Sold by {item.seller}</p>

            <div className="flex flex-row">
                <div className="w-full">
                    <div className="mt-2 grid gap-4 lg:grid-cols-2">
                        <div className="flex">
                            <img src={item.image} alt="" width="80" height="80" className="m-0" />

                            <div className="ml-4">
                                <div className="text-xl font-semibold">{item.title}</div>

                                <div className="flex items-center">
                                    <div className="custom-number-input h-10 w-32">
                                        <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
                                            <button
                                                onClick={decrementQuantity}
                                                className=" h-full w-20 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700">
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input
                                                type="number"
                                                name="quantity"
                                                value={quantity}
                                                onChange={adjustQuantity}
                                                onBlur={manuallyAdjustQuantity}
                                                className="w-16 appearance-none rounded-none bg-gray-300 text-center font-bold text-gray-600 hover:bg-gray-400 hover:text-gray-700 focus:outline-none"
                                            />
                                            <button
                                                onClick={incrementQuantity}
                                                className="h-full w-20 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="mt-0 mb-0 text-xl">
                                <strong>
                                    {formatter.format((item.price / 100) * item.quantity)}
                                </strong>
                            </p>
                            <span className="text-xs italic">
                                Line Price - {formatter.format(item.price / 100)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem
