import DeliveryBlock from './DeliveryBlock';

function BasketItem({ item }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    });

    return (
        <div className='border p-4 rounded-lg mb-2'>
            <p className="border-b text-sm pb-2 mb-2 mt-0">
                Sold by {item.seller}
            </p>

            <div className='flex flex-row'>
                <div className='w-full'>
                    <div className='grid grid-cols-3 gap-4 mt-2 items-start'>

                        <div className='flex col-span-2 items-start'>
                            <img src={item.image} alt="" width="120" height="120" className='m-0' />

                            <div className='ml-4'>
                                <div className='font-semibold text-xl'>
                                    {item.title}
                                </div>
                                <p className="mt-1 mb-0 text-xl"><strong>{formatter.format((item.price / 100) * item.quantity)}</strong></p>
                                <p className='mt-1 text-gray-600 font-semibold'>Qty {item.quantity}</p>


                            </div>
                        </div>

                        <div className="text-right">
                            {
                                item.delivery.map((delivery) => <DeliveryBlock key={'delivery_' + item.id + delivery.id} item={item.id} delivery={delivery} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem
