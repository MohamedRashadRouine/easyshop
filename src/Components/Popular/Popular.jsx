import React from 'react'
import data_product from '../Assets/data/popular'
import Itemm from '../item/Itemm'
import './Popular.css'

const Popular = (props) => {
  return (
    <div className='popular'>
        <h3>Today Promotions :</h3>
        <hr/>
        <div className="popular-item">
            {data_product.map((item , i)=>{
                return <Itemm key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular