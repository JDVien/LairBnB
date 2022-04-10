import React from 'react';
import './BookingCard.css';
import { useSelector, useDispatch } from "react-redux";

function BookingCard({ src, startDate, endDate, totalCost, spotsId }) {
  const spots = useSelector((state) => Object.values(state.spots));

  return (
    <div className='booking_card'>
      {/* <img src={src} alt="" /> */}
      <div className="card_content">
          <h2>{spots.name}</h2>
          <h3>${totalCost}</h3>
          <h3>{startDate} to {endDate}</h3>

      </div>
    </div>
  )
}

export default BookingCard;
