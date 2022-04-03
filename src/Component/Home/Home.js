import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirts from '../hooks/useTshirts';
import Tshirt from '../TSHirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);


    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt => <Tshirt
                        tShirt={tShirt}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;