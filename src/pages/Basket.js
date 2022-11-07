import Sidebar from '../components/sidebar/Sidebar'
import Error from '../components/ui/Error'
import { gql, useQuery } from '@apollo/client'
import PurchaseElement from '../components/basket/PurchaseElement'
import BasketItems from '../components/basket/BasketItems'
import { useNavigate } from 'react-router-dom'

const GET_ITEMS = gql`
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
`

function Basket() {
    const { loading, error, data } = useQuery(GET_ITEMS)
    const navigate = useNavigate()

    if (loading) return null
    if (error) {
        console.log(error)
        return <Error err={error} />
    }

    const handleBasketStep = () => {
        navigate('/login')
    }

    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row flex-wrap items-start lg:space-x-6">
            <div className="prose-sm mb-4 w-full flex-shrink-0 rounded-lg p-6 shadow-lg lg:mb-0 lg:w-2/3">
                <h1>Basket</h1>

                <BasketItems />

                <hr className="my-4" />
                <div className="grid gap-y-2 lg:grid-cols-3 lg:gap-x-2">
                    {data.items.map((item) =>
                        (() => {
                            return <PurchaseElement item={item} key={item.id} />
                        })()
                    )}
                </div>
            </div>
            <Sidebar showEditButton={false} onClick={handleBasketStep} buttonTitle="Checkout" />
        </div>
    )
}

export default Basket
