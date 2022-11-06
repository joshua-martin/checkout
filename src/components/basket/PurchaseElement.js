import { addItem } from "../../reducers/cartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button";

function PurchaseElement({ item }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    });

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (e) => {
        const { value } = e.target;
        setQuantity(parseInt(value));
    };

    const handleAddToCart = () => {
        dispatch(addItem({ 'item': item, 'quantity': quantity }));
    }

    return (
        <article className='border rounded-lg p-4 w-full'>
            <img src={item.image} alt="" className='w-full mt-0 mb-2' />

            <h1 className='text-xl mb-0'>
                {item.title}
            </h1>

            <span className='font-bold text-xl'>
                {formatter.format(item.price / 100)}
            </span>


            <div className='flex mt-2'>
                <Input
                    type="number"
                    name="qty"
                    value={quantity}
                    showLabel={false}
                    onChange={handleQuantity}
                    min="1"
                    classOverrides="w-1/3" />

                <Button
                    onClick={handleAddToCart}
                    classOverrides="ml-2"
                    title="Add" />
            </div>
        </article>
    )
}

export default PurchaseElement

