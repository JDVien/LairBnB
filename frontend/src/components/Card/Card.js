import React from 'react';
import './Card.css';

function Card({src, name, city, state, title, description, price}) {
  return (
    <div className='card'>
      <div className="card_container">
      <img src={src} alt=""/>
      </div>
      <div className="card_description">

          <h2>{title}</h2>
          <h4>{description}</h4>
          {/* <h3>{price}</h3>
          <h3>{description}</h3> */}
      </div>
    </div>
  )
}

export default Card;
