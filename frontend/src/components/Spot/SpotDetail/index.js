import { useHistory, useParams, NavLink, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import EditFormModal from "../../EditSpot/EditFormModal";
import BookingFormModal from "../../Booking/Bookings/BookingFormModal";
import Reviews from '../../SpotReviews/index'
import BookingCost from "../../Booking/bookingCost";
import SpotReviewModal from "../../SpotReviews/SpotReviewModal";
import EditReviewFormModal from "../../SpotReviews/EditReviewForm/EditReviewFormModal";
import { deleteSpot } from "../../../store/spot";
import { removeReview } from "../../../store/reviews";
import { getSpot } from "../../../store/spot";
import { getBooking } from "../../../store/bookings";
import { getReviews } from "../../../store/reviews";


import "./SpotDetail.css";

const SpotDetail = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { spotId } = useParams();
  const { bookingId } = useParams();
  const { reviewId } = useParams();
  const spot = useSelector((state) => state.spots[spotId]);
  const booking = useSelector((state) => state.bookings[bookingId]);
  const reviews = useSelector((state) => Object.values(state.reviews));

  const history = useHistory();
  // const spots = { id, name, address, city, state, country, price, userId }
  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch, spotId]);

  useEffect(() => {
    dispatch(getBooking(bookingId));
  }, [dispatch, bookingId]);

  const handleDelete = (spotId) => {
    dispatch(deleteSpot(spotId));
    history.push("/spots");
    // window.location.reload();
  };

  // reviews = reviews.

  if (!spot) return null;
  let content = (
    <div className="spot-detail-lists">
      <div>
        <h2>{spot?.name}</h2>
        <ul>
          <li>
            <b>address</b> {spot?.address}
          </li>
          <li>
            <b>City</b> {spot?.city}
          </li>
          <li>
            <b>State</b> {spot?.state}
          </li>
          <li>
            <b>Price</b> {spot?.price}
          </li>
        </ul>
      </div>
    </div>
  );

  let allReviews = (
    <div className='reviews'>
    <div className='create-review-modal'>
    <div className="reviewList">
      {spot?.Reviews?.map((review) => (
        <div className="review_content" key={review?.id}>
          <p>Rating: {review?.rating} Stars</p>
          <p>{review?.User?.username}</p>
          <p>says: {review?.review}</p>
          {sessionUser?.id === review?.userId ? (
            <div>
              <button
                onClick={async () => {
                  await dispatch(removeReview(review.id));
                }}
              >
                {" "}
                Delete
              </button>
              {/* <div className='spot-reviews-container'>
                <Reviews review={review }spotId={spot.id}/>
              </div> */}
              <EditReviewFormModal spot={spot} review={review} user={{...sessionUser}} />

            </div>
          ) : null}
        </div>
      ))}
      </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="spot_detail">
      {/* <img src={image} alt={name} /> */}
      {/* {spots.map((spot) => ( */}
      {content}
      {allReviews}

      {/* <Reviews spot={spot}/> */}

      {sessionUser && sessionUser.id === spot.userId && (
        <div className="button-row">
          <button
            onClick={() => handleDelete(spotId)}
            className="delete-button"
          >
            Delete Spot
          </button>
          <EditFormModal user={{ ...sessionUser }} spot={spot} />
          {console.log(spot)}
        </div>
      )}
      {sessionUser && sessionUser.id !== spot.userId && (
        <BookingFormModal
          spot={spot}
          user={{ ...sessionUser }}
          booking={booking}
        />

        // <div className="book_date">
        //   <div className="book_date_search">
        //     <BookingCost user={{ ...sessionUser }} spot={spot} />
        //   </div>
        // </div>
      )}
              <div className='new_review_modal'>
        <SpotReviewModal spot={spot} user={{...sessionUser }} />
        </div>
      {/* {sessionUser &&
        sessionUser.id !== spot.userId &&
        sessionUser.id !== booking?.userId && (
          <SpotReviewModal spot={spot} user={{ ...sessionUser }} />
        )} */}
      {/* {console.log(booking)} */}
    </div>

    </>
  );
};

export default SpotDetail;
