import DeliveryBlock from './DeliveryBlock'
import { DeliveryItem } from '../../reducers/cartSlice'

const CheckoutItem = ({ item }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    return (
        <div className="mb-2 rounded-lg border p-4">
            <p className="mb-2 mt-0 border-b pb-2 text-sm">Sold by {item.seller}</p>

            <div className="flex flex-row">
                <div className="w-full">
                    <div className="mt-2 grid items-start gap-x-4 lg:grid-cols-3 lg:gap-y-4">
                        <div className="flex items-start lg:col-span-2">
                            <img src={item.image} alt="" width="120" height="120" className="m-0" />

                            <div className="ml-4">
                                <div className="text-xl font-semibold">{item.title}</div>
                                <p className="mt-1 mb-0 text-xl">
                                    <strong>
                                        {formatter.format((item.price / 100) * item.quantity)}
                                    </strong>
                                </p>
                                <p className="mt-1 font-semibold text-gray-600">
                                    Qty {item.quantity}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-x-4 text-right lg:mt-0 lg:grid-cols-1 lg:gap-x-0">
                            {item.delivery.map((delivery: DeliveryItem) => (
                                <DeliveryBlock
                                    key={'delivery_' + item.id + delivery.id}
                                    item={item.id}
                                    delivery={delivery}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
