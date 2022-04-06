import React from 'react';
import './DetailPage.css';


function DetailPage({ src, name, address, city, state, country, price}) {
  return (
    <div className='spot_detail'>
      {/* <img src={src} alt="" /> */}
      <div className="detail_content">
          <h2>{name}</h2>
          <h3>{city}, {state}</h3>
          <h4>{price} / night</h4>
      </div>
    </div>
  )
}

export default DetailPage;
