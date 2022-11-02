function SellerRow() {
    return (
        <div className="p-4 rounded-lg shadow-lg">
            <div className="border-b text-sm mb-4 pb-4">
                Sold by HomeSpace Direct
            </div>

            <div className='flex flex-row'>
                <div className='w-3/4'>
                    <div className='flex flex-row items-center'>
                        <img src="https://i4.onbuy.com/product/2425118e8b34411db720b5d9ad78875a-t128908309.jpg" alt="" width="80" height="80" />

                        <div className="ml-2">
                            <div className='font-semibold'>
                                Only Fools and Horses Robin Reliant Slippers
                            </div>


                            <div className="flex items-center">
                                <div className='text-gray-600'>Qty 1</div>
                                <span className='font-bold text-xl'>
                                    £17.32
                                </span>
                            </div>

                            <div className='text-blue-500 cursor-pointer hover:text-blue-900'>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='p-4 rounded-lg border border-blue-500 flex space-x-2 mb-2'>
                        <input type="radio" id="option_1" name="delivery_option[0]" value="1" defaultChecked />
                        <label htmlFor="option_1">
                            <p className="font-semibold">Standard Free</p>
                            <p className='text-gray-600 text-sm'>Saturday 5th - Tuesday 8th Nov</p>
                        </label>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-600 flex space-x-2">
                        <input type="radio" id="option_2" name="delivery_option[0]" value="2" />
                        <label htmlFor="option_2">
                            <p className="font-semibold">Priority £5.99</p>
                            <p className='text-gray-600 text-sm'>2nd Nov</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerRow

