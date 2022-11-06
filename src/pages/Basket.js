import Sidebar from '../components/layout/Sidebar';
import Error from '../components/ui/Error';
import { gql, useQuery } from '@apollo/client';
import PurchaseElement from '../components/basket/PurchaseElement';
import BasketItems from '../components/basket/BasketItems';
import { useNavigate } from 'react-router-dom';

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
`;

function Basket() {
    const { loading, error, data } = useQuery(GET_ITEMS);
    const navigate = useNavigate();

    if (loading) return null;
    if (error) return <Error err={error} />

    const handleBasketStep = () => {
        navigate('/login');
    }

    return (
        <div className='container max-w-5xl mx-auto flex flex-row my-8 space-x-6 items-start'>
            <div className='rounded-lg shadow-lg p-6 w-2/3 flex-shrink-0 prose-sm'>
                <h1>Basket</h1>

                <BasketItems />

                <hr className="my-4" />
                <div className='grid grid-cols-3 gap-2'>
                    {
                        data.items.map((item) => (() => {
                            return (
                                <PurchaseElement item={item} key={item.id} />
                            )
                        })())
                    }
                </div>
            </div>
            <Sidebar showEditButton={false} onClick={handleBasketStep} buttonTitle="Checkout" />
        </div>
    )
}

export default Basket

