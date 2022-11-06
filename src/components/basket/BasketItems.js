import { useSelector } from 'react-redux';
import { selectCart } from "../../reducers/cartSlice";
import BasketItem from './BasketItem';

function BasketItems() {
    const cart = useSelector(selectCart)

    if (cart.totalItems === 0) {
        return (
            <p className='mt-2 mb-6'>You don't have any items in your cart. You can add some below</p>
        )
    } else {
        return cart.items.map((item) => <BasketItem key={`basket_` + item.id} item={item} />)
    }
}

export default BasketItems

