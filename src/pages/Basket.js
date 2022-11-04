import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

import { useSelector } from 'react-redux';
import { selectCart } from "../reducers/cartSlice";

import { gql, useQuery } from '@apollo/client';
import SellerRow from '../components/checkout/SellerRow';

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      title
      seller
      price
      image
      delivery {
        title
        price
      }  
    }
  }
`;

function Basket() {

    const cart = useSelector(selectCart)

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const { loading, error, data } = useQuery(GET_ITEMS);

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <div className='container max-w-5xl mx-auto flex flex-row my-8 space-x-6'>
            <div className='rounded-lg shadow-lg px-8 py-5 w-2/3 flex-shrink-0'>
                <h1 className='text-3xl font-bold'>Basket</h1>
                {(() => {
                    if (Object.keys(cart.items).length === 0) {
                        return (
                            <>
                                <p>Add some items to your cart</p>

                                <SellerRow items={data.items} />
                            </>
                        );
                    } else {
                        return 'Items are in your cart';
                    }
                })()}
            </div>
            <Sidebar />
        </div>
    )
}

export default Basket

