import { useDispatch } from 'react-redux'
import { toggleDelivery } from '../../reducers/cartSlice'

const DeliveryBlock = ({ item, delivery }) => {
    const dispatch = useDispatch()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    const changeDeliveryOption = () => {
        dispatch(toggleDelivery({ item: item, deliveryOption: delivery }))
    }

    return (
        <label
            htmlFor={'option_' + delivery.id}
            className="mb-2 flex cursor-pointer space-x-2 rounded-lg border border-blue-500 p-4 hover:border-blue-900"
            key={'delivery_' + delivery.id}>
            <input
                type="radio"
                id={'option_' + delivery.id}
                name={'delivery_option[' + delivery.id + ']'}
                value={delivery.id}
                checked={delivery.default}
                onChange={changeDeliveryOption}
            />
            <span className="font-semibold">
                {delivery.title} {formatter.format(delivery.price / 100)}
            </span>
        </label>
    )
}

export default DeliveryBlock
