import DeliveryBlock from './DeliveryBlock'

function BasketItem({ item }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    return (
        <div className="mb-2 rounded-lg border p-4">
            <p className="mb-2 mt-0 border-b pb-2 text-sm">Sold by {item.seller}</p>

            <div className="flex flex-row">
                <div className="w-full">
                    <div className="mt-2 grid grid-cols-3 items-start gap-4">
                        <div className="col-span-2 flex items-start">
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

                        <div className="text-right">
                            {item.delivery.map((delivery) => (
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

export default BasketItem
