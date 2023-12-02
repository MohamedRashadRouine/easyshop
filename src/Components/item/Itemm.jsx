import React from 'react';
import './item.css';

const Itemm = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        {props.new_price}TND
        </div>
        <div className="item-price-old">
        {props.old_price}TND
        </div>
      </div>
    </div>
  );
}

export default Itemm;
