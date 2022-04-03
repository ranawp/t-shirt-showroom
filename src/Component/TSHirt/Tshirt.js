import React from 'react';
import './TShirt.css';

const Tshirt = (props) => {
    // console.log(props.tShrirt)
    const { name, picture, price } = props.tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>Price:{price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Tshirt;