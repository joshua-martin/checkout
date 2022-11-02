import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Basket from './pages/Basket';
import Login from './pages/Login';
import Register from './pages/Register';
import Delivery from './pages/Delivery';
import Payment from './pages/Payment';
import Complete from './pages/Complete';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Basket />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/delivery' element={<Delivery />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/complete' element={<Complete />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;