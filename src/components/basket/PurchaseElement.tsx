import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cartSlice'

import Input from '../ui/Input'
import Button from '../ui/Button'

const PurchaseElement = ({ item }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    const handleQuantity = (e) => {
        const { value } = e.target
        setQuantity(parseInt(value))
    }

    const handleAddToCart = () => {
        dispatch(addItem({ item: item, quantity: quantity }))
    }

    return (
        <article className="w-full rounded-lg border p-4">
            <img src={item.image} alt="" className="mt-0 mb-2 w-full" />

            <h1 className="mb-0 text-xl">{item.title}</h1>

            <span className="text-xl font-bold">{formatter.format(item.price / 100)}</span>

            <div className="mt-2 flex">
                <Input
                    type="number"
                    name="qty"
                    value={quantity}
                    showLabel={false}
                    onChange={handleQuantity}
                    classOverrides="w-1/3"
                />

                <Button onClick={handleAddToCart} classOverrides="ml-2" title="Add" />
            </div>
        </article>
    )
}

export default PurchaseElement
