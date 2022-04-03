import React from 'react';
// import Tshirt from '../TSHirt/Tshirt';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    // condition rendering options... if length 0 please some buy .. explore something 
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one item</p>
    } else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item.</small></p>
    }


    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {/*/////////////////comment: condition when cart added ////////// */}
            {cart.length === 0 || <p className='orange'>YAY! you are buying</p>}

            {/* comment::  when cart added three items */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba </p>
            </div>}

            {command}

            {/* comment : when cart 4 item added show remove all button */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}

            {/*comment: wnen 4 item added show review button cart  */}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;