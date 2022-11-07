export default function SidebarValues({ cart }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    })

    return (
        <>
            <p className="my-1 flex flex-row justify-between">
                <span>
                    Subtotal ({cart.totalItems} Item{cart.totalItems > 1 && 's'})
                </span>
                <span className="font-semibold">{formatter.format(cart.subtotal / 100)}</span>
            </p>

            <p className="my-1 flex flex-row justify-between">
                <span>Delivery</span>
                <span className="font-semibold">
                    {cart.delivery === 0 ? 'Free' : formatter.format(cart.delivery / 100)}
                </span>
            </p>

            {cart.discount.code && (
                <p className="my-1 flex flex-row justify-between text-green-500">
                    <span>Discount Applied</span>
                    <span className="font-semibold">
                        {formatter.format(cart.discount.amount / 100)}
                    </span>
                </p>
            )}

            <p className="my-1 flex flex-row justify-between text-xl font-semibold">
                <span>Total</span>
                <span>{formatter.format(cart.total / 100)}</span>
            </p>
        </>
    )
}
