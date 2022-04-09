import React from 'react';
import './BookingCard.css';


function BookingCard({ startDate, endDate, totalCost }) {
  return (
    <div className='booking_card'>
      {/* <img src={src} alt="" /> */}
      <div className="card_content">
          <h2>{totalCost}</h2>
          <h3>{startDate} to {endDate}</h3>

      </div>
    </div>
  )
}

export default BookingCard;
