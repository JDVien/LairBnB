import React from "react";
import "./SpotCard.css";

function SpotCard({ src, name, city, state, price, amenities, spotType }) {
  let random = (Math.random() + 4).toFixed(2);
  window.onbeforunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="spot_card">
      <div className="card_image_body">
        {/* <img src={src} alt="" /> */}
        <div className="img_block">
          <img src={src} className="spot_card_image" alt="" />
          <i id="heart_fave" className="fa-regular fa-heart"></i>
        </div>
      </div>
      <div className="card_content">
        <div className="card_info_top">
          <p>
            {spotType} located in {city}, {state}
          </p>
          <h3>{name}</h3>
          <p>_______</p>
          <p>{amenities}</p>
        </div>
        <div className="card_info_bottom">
          <div className="star_icon">
          <p>
            <i id="rating_star" className="fa-solid fa-star">
              {random}{" "}
            </i>
          </p>
          </div>
          <div className='card_price'>
          <h2>${price} / night</h2>
          </div>
        </div>

        {/* <h3>{rating}</h3> */}
      </div>
    </div>
  );
}

export default SpotCard;
