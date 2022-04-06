import React from 'react';
import './Card.css';

function Card({src, name, address, city, state, title, description, price}) {
  return (
    <div className='card'>
      <div className="card_container">
      <img src={src} alt=""/>
      </div>
      <div className="card_description">

          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
          <h3>{address}</h3>
      </div>
      {/* <div className="more_detail">
        <h2>{price} dadsfdsfdsfdsf</h2>
      </div> */}
    </div>
  )
}

export default Card;
