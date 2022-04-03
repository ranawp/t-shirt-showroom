import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirts from '../hooks/useTshirts';
import Tshirt from '../TSHirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selecteditem) => {
        const exists = cart.find(tShirt => tShirt._id === selecteditem._id);
        if (!exists) {
            const newCart = [...cart, selecteditem];
            setCart(newCart)
        } else {
            alert('item exists')
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(rest)
    }


    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt => <Tshirt
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;