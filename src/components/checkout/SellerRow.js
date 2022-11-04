import DeliveryBlock from './DeliveryBlock';

function SellerRow({ items }) {
    const itemList = items.map((item) => (() => {
        return (
            <div key={item.id}>
                <div className="border-b text-sm mb-4 pb-4">
                    Sold by {item.seller}
                </div>

                <div className='flex flex-row'>
                    <div className='w-3/4'>
                        <div className='flex flex-row items-center'>
                            <img src={item.image} alt="" width="80" height="80" />

                            <div className="ml-2">
                                <div className='font-semibold'>
                                    {item.title}
                                </div>


                                <div className="flex items-center">
                                    <div className='text-gray-600'>Qty 1</div>
                                    <span className='font-bold text-xl'>
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <DeliveryBlock items={item.delivery} />
                    </div>
                </div>
            </div>
        )
    })())

    return (
        <div className="p-4 rounded-lg shadow-lg">
            {itemList}
        </div>
    )
}

export default SellerRow

