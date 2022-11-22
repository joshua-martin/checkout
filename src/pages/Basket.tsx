import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { graphql } from '../gql'

import Sidebar from '../components/sidebar/Sidebar'
import Error from '../components/ui/Error'
import PurchaseElement from '../components/basket/PurchaseElement'
import BasketItems from '../components/basket/BasketItems'

const GET_ITEMS = graphql(`
    query GetItems {
        items {
            id
            title
            seller
            price
            image
            delivery {
                id
                title
                price
                default
            }
        }
    }
`)

const Basket = () => {
    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_ITEMS)

    const handleBasketStep = useCallback(() => {
        navigate('/login')
    }, [navigate])

    if (loading) return null
    if (error) return <Error err={error} />

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:flex-nowrap lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1>Basket</h1>

                <BasketItems />

                <hr className="my-4" />
                <div className="grid gap-y-2 lg:grid-cols-3 lg:gap-x-2">
                    {data.items.map((item) => (
                        <PurchaseElement item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Sidebar showEditButton={false} onClick={handleBasketStep} buttonTitle="Checkout" />
        </div>
    )
}

export default Basket
