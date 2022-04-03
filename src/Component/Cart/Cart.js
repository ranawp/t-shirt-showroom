import React from 'react';
// import Tshirt from '../TSHirt/Tshirt';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;