import { CartItem, selectCart } from '../../reducers/cartSlice'
import { useAppSelector } from '../../app/hooks'

import BasketItem from './BasketItem'

const BasketItems = () => {
    const cart = useAppSelector(selectCart)

    if (cart.totalItems === 0) {
        return (
            <p className="mt-2 mb-6">
                You don&apos;t have any items in your cart. You can add some below
            </p>
        )
    } else {
        return cart.items.map((item: CartItem) => (
            <BasketItem key={`basket_` + item.id} item={item} />
        ))
    }
}

export default BasketItems
