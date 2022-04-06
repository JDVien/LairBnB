import React from 'react';
import './SpotCard.css';


function SpotCard({ src, name, city, state, price}) {
  return (
    <div className='spot_card'>
      <img src={src} alt="" />
      <div className="card_content">
          <h2>{name}</h2>
          <h3>{city}, {state}</h3>
          <h4>{price} / night</h4>
      </div>
    </div>
  )
}

export default SpotCard;
