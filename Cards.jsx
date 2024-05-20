import React from 'react';
import Count from './Count'
const Cards = (props) => {
    return (
        <div>
            <img className='food' src={props.image} alt='pic'/>
            <h1>{props.name}</h1>
            <Count />
        </div>
    );
};

export default Cards;