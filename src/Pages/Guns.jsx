// Guns.jsx
import React from 'react';
import Itemm from '../Components/item/Itemm';
import data_product from '../Components/Assets/data/Guns/data(guns)';

export const Guns = () => {
  // Assuming data_product contains an array of gun products
  return (
    <div className='popular'>
      <h3>ARMES :</h3>
      <hr/>
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Itemm key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Guns;
