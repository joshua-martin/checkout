import { toggleQuantity } from '../../reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './BasketItem.css'

function BasketItem({ item }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    });

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(item.quantity)

    const adjustQuantity = (e) => {
        const { value } = e.target;
        setQuantity(parseInt(value));
    };

    const manuallyAdjustQuantity = () => {
        dispatch(toggleQuantity({ 'item': item, 'quantity': quantity }))
    }

    const decrementQuantity = () => {
        const newQty = quantity - 1;
        setQuantity(newQty);
        dispatch(toggleQuantity({ 'item': item, 'quantity': newQty }))
    }

    const incrementQuantity = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        dispatch(toggleQuantity({ 'item': item, 'quantity': newQty }))
    }

    return (
        <div className='border p-4 rounded-lg mb-2'>
            <p className="border-b text-sm pb-2 mb-2 mt-0">
                Sold by {item.seller}
            </p>

            <div className='flex flex-row'>
                <div className='w-full'>
                    <div className='grid grid-cols-2 gap-4 mt-2'>

                        <div className='flex'>
                            <img src={item.image} alt="" width="80" height="80" className='m-0' />

                            <div className='ml-4'>
                                <div className='font-semibold text-xl'>
                                    {item.title}
                                </div>

                                <div className="flex items-center">
                                    <div className="custom-number-input h-10 w-32">
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button onClick={decrementQuantity} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input type="number" name="quantity" value={quantity} onChange={adjustQuantity} onBlur={manuallyAdjustQuantity} className='rounded-none bg-gray-300 hover:bg-gray-400 text-gray-600 hover:text-gray-700 w-16 text-center appearance-none font-bold focus:outline-none' />
                                            <button onClick={incrementQuantity} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="mt-0 mb-0 text-xl"><strong>{formatter.format((item.price / 100) * item.quantity)}</strong></p>
                            <span className='text-xs italic'>
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
