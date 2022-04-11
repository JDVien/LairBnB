import { useHistory, useParams, NavLink, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import EditFormModal from "../../EditSpot/EditFormModal";
import BookingFormModal from "../../Booking/Bookings/BookingFormModal";
import Reviews from "../../SpotReviews/index";
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
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch, spotId]);

  // useEffect(() => {
  //   dispatch(getBooking(bookingId));
  // }, [dispatch, bookingId]);

  const handleDelete = (spotId) => {
    dispatch(deleteSpot(spotId));
    console.log(spotId);
    history.push("/spots");
    // window.location.reload();
  };



  if (!spot) return null;
  let content = (
    <div className="spot-detail-lists">
      <div className="spot-detail-info-top">
      <i id='medal_icon_superhost 'className="fa-solid fa-medal">superhost</i>
      <h2>{spot?.name} ${spot?.price} / night</h2>
      <p>{spot?.city}, {spot?.state}, {spot?.country}</p>
      <p></p>
      <div className="spot-details-body">
        <div className="spot_detail_images">
          {spot.Images.map((img) => (
            <img
              id={`image${img.id}`}
              src={img.image}
              alt="spot"
              key={img.id}
            />
          ))}
          <div id="image_selector">
            {spot.Images.map((img, index) => (
              <a key={img.id} href={`#image${img.id}`}>
                {/* {index + 1} */}
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className='spot-detail-info-mid'>
        <h4>{spot?.spotType} hosted by {sessionUser.username}</h4>
        <div className='amenities_div'>
        <p>{spot?.amenities}</p>
        </div>
        <div className='superhost_detail_div'>
        <i className="fa-solid fa-medal"></i>
        <p>{sessionUser.username} is a Superhost</p>
        </div>
        <div className='superhost_def'>
        <p>Superhosts are experienced,
            highly rated hosts who are committed to providing great stays for guests.</p>
        </div>
        <div className='cancellation_icon_div'>
        <i className="fa-solid fa-calendar-week"></i>
        <p>Free cancellation for 48 hours.</p>
        </div>

        <div className='description_div'>
          {spot?.description}
        </div>
        {/* <b> Price</b> {spot?.price} */}
        </div>

    </div>

  );

  let allReviews = (
    <div className="reviews">
      <div className="create-review-modal">
        <div className="reviewList">

          {spot?.Reviews?.map((review) => (
            <div className="review_content" key={review?.id}>
        <i id="rating_star" className="fa-solid fa-star">{review?.rating} stars</i>

              <p>{review?.Users?.username}</p>
              <p>says: {review?.review}</p>
              {sessionUser?.id === review?.userId ? (
                <div>
                  <button className='review_delete_bttn'
                    onClick={async () => {
                      await dispatch(removeReview(review.id));
                      window.location.reload();
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  {/* <div className='spot-reviews-container'>
                <Reviews review={review }spotId={spot.id}/>
              </div> */}
                  <EditReviewFormModal
                    spot={spot}
                    review={review}
                    user={{ ...sessionUser }}
                  />
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
        {content}
        {sessionUser && sessionUser.id !== spot.userId && (
          <div className="book_date">
            <div className="book_date_search">
            <div className='guests_div'>
            <h2>Number of guests</h2>
            <input min={0}
            defaultValue={2}
            type="numbers" />
            </div>
              <BookingCost user={{ ...sessionUser }} spot={spot} />
            </div>
          </div>

        )}
        <div className='detail_info_reviews'>
           {allReviews}
        </div>
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

        <div className="new_review_modal">
          <SpotReviewModal spot={spot} user={{ ...sessionUser }} />
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
          // {/* <BookingFormModal
          //   spot={spot}
          //   user={{ ...sessionUser }}
          //   booking={booking}
          // /> */}
