const CompleteItem = ({ item }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    const delivery = item.delivery.find((d) => d.default)

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
                                <p className="mt-1 mb-1 font-semibold text-gray-600">
                                    Qty {item.quantity}
                                </p>
                                <p className="m-0">
                                    Delivery: <strong>{delivery.title}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteItem
