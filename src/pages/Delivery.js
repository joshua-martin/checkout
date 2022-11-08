import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../reducers/userSlice'
import { toggleDiscountCode, selectCart } from '../reducers/cartSlice'
import { gql, useLazyQuery } from '@apollo/client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import CheckoutItem from '../components/checkout/CheckoutItem'
import Sidebar from '../components/sidebar/Sidebar'
import AddressBlock from '../components/checkout/AddressBlock'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const DISCOUNT_CODE = gql`
    query getCode($code: String!) {
        discountCode(code: $code) {
            id
            code
            discount
            type
        }
    }
`

const Delivery = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)

    const [checkDiscountCode] = useLazyQuery(DISCOUNT_CODE)

    const [discountCode, setDiscountCode] = useState('')
    const [discountError, setDiscountError] = useState('')

    if (!user.loggedIn) {
        return <Navigate to="/" replace />
    }

    const handleDeliveryStep = () => {
        navigate('/payment')
    }

    const removeDiscountCode = () => {
        setDiscountCode('')
        dispatch(toggleDiscountCode(false))
    }

    const handleDiscountCode = async (e) => {
        e.preventDefault()
        await checkDiscountCode({
            variables: { code: discountCode }
        })
            .then((res) => {
                if (!res) throw new Error('Request Failed ', res.status)

                return res.data.discountCode
            })
            .then((data) => {
                if (!data.code) {
                    console.log('err')
                    setDiscountError('Discount code does not exist')
                } else {
                    setDiscountError('')
                    dispatch(toggleDiscountCode(data))
                }
            })
            .catch((error) => {
                setDiscountError(error.message)
            })
    }

    const activateButton = (e) => {
        const { value } = e.target

        setDiscountCode(value)
    }

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:flex-nowrap lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1 className="text-3xl font-bold">Select Delivery</h1>
                <h2 className="text-xl font-semibold">Delivery to</h2>
                <p className="mb-1">
                    <AddressBlock user={user.user} />
                </p>
                <hr className="my-4" />
                <h2 className="text-xl font-semibold">Promotional code</h2>
                <div className="inline-block w-auto pb-4">
                    {(() => {
                        if (cart.discount.code) {
                            return (
                                <span className="flex w-auto items-center rounded-lg p-2 font-bold uppercase text-blue-500 shadow-md">
                                    <span className="mr-2">{cart.discount.code}</span>

                                    <span
                                        title="Do Not Use Code"
                                        className="cursor-pointer text-gray-600"
                                        onClick={removeDiscountCode}>
                                        <FontAwesomeIcon icon={solid('times')} />
                                    </span>
                                </span>
                            )
                        } else {
                            return (
                                <>
                                    <div className="mb-2 rounded-lg border-2 border-blue-400 px-4 py-2 font-semibold text-blue-400">
                                        <strong>Hint:</strong> Get 10% off with code{' '}
                                        <em>TENPOFF</em>, or £10 off with code <em>TENOFF</em>
                                    </div>
                                    {discountError != '' && (
                                        <div className="mb-2 rounded-lg border-2 border-red-400 px-4 py-2 font-bold text-red-400">
                                            {discountError}
                                        </div>
                                    )}
                                    <form onSubmit={handleDiscountCode} className="flex flex-row">
                                        <Input
                                            type="text"
                                            value={discountCode}
                                            name="discount"
                                            onChange={activateButton}
                                        />
                                        <Button
                                            title="Add Code"
                                            classOverrides="px-4 ml-2"
                                            disabled={discountCode === ''}
                                        />
                                    </form>
                                </>
                            )
                        }
                    })()}
                </div>

                {cart.discount.code && (
                    <p className="mt-0 text-gray-600">
                        <FontAwesomeIcon icon={solid('info-circle')} /> Some promotional terms and
                        conditions
                    </p>
                )}
                <hr className="my-4" />
                {cart.items.map((item) => (
                    <CheckoutItem key={`checkout_` + item.id} item={item} />
                ))}
            </div>
            <Sidebar
                showEditButton={true}
                onClick={handleDeliveryStep}
                buttonTitle="Continue to Payment"
            />
        </div>
    )
}

export default Delivery
