function DeliveryBlock({ items }) {
    const deliveryList = items.map((delivery) => (() => {
        return (
            <div className='p-4 rounded-lg border border-blue-500 flex space-x-2 mb-2' key={"delivery_" + delivery.id}>
                <input type="radio" id={"option_" + delivery.id} name={"delivery_option[" + delivery.id + "]"} value={delivery.id} defaultChecked />
                <label htmlFor={"option_" + delivery.id}>
                    <p className="font-semibold">{delivery.title} {delivery.price}</p>
                </label>
            </div>
        )
    })())

    return (
        deliveryList
    )
}

export default DeliveryBlock

