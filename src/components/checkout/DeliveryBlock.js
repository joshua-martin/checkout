import { useDispatch } from 'react-redux';
import { toggleDelivery } from '../../reducers/cartSlice';

function DeliveryBlock({ item, delivery }) {
    const dispatch = useDispatch()

    const changeDeliveryOption = () => {
        dispatch(toggleDelivery({ 'item': item, 'deliveryOption': delivery }))
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    });

    return (
        <label htmlFor={"option_" + delivery.id} className='p-4 rounded-lg border border-blue-500 flex space-x-2 mb-2 cursor-pointer hover:border-blue-900' key={"delivery_" + delivery.id}>
            <input type="radio" id={"option_" + delivery.id} name={"delivery_option[" + delivery.id + "]"} value={delivery.id} checked={delivery.default} onChange={changeDeliveryOption} />
            <span className="font-semibold">{delivery.title} {formatter.format(delivery.price / 100)}</span>
        </label>
    )
}

export default DeliveryBlock

