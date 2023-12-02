// Clothing.jsx
import React from 'react';
import Itemm from '../Components/item/Itemm';
import data_product from '../Components/Assets/data/Clothing/data(clothing)';

export const Clothing = () => {
  // Assuming data_product contains an array of clothing products
  return (
    <div className='popular'>
      <h3>VÊTEMENTS DE CHASSE :</h3>
      <hr/>
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Itemm key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Clothing;
