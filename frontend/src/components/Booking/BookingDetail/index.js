import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { deleteBooking , getBooking } from '../../../store/bookings';
// import EditFormModal from '../../EditSpot/EditFormModal';
import EditBookingFormModal from '../../Booking/BookingDetail/EditBookingFormModal';

import './BookingDetail.css';

const BookingDetail = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { spotId } = useParams();
  const { bookingId } = useParams();
  const spot = useSelector((state) => state.spots[spotId]);
  const booking = useSelector((state) => state.bookings[bookingId]);

  const history = useHistory();
  // const spots = { id, name, description, city, state, country, price, userId }
  // useEffect(() => {
  //   dispatch(getBooking(spotId));
  // }, [dispatch, spotId]);

  // const handleDelete = (spotId) => {
  //   dispatch(deleteBooking(bookingId));
  //   history.push("/spots");
  //   // window.location.reload();
  // };
  if (!booking) return null;
  let bookingContent = (
    <div className="booking-detail-lists">
      <div>
        <h2>{spot?.name}</h2>
        <ul>
          <li>
            <b>Total Cost</b> {booking?.totalCost}
          </li>
          <li>
            <b>Start Date</b> {booking?.startDate}
          </li>
          <li>
            <b>End Date</b> {booking?.endDate}
          </li>
        </ul>
      </div>
    </div>
  );
  if (!spot) return null;
  let content = (
    <div className="spot-detail-lists">
      <div>
        <h2>{spot?.name}</h2>
        <ul>
          <li>
            <b>description</b> {spot?.description}
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


  return (
    <>
    <div className="booking_detail">
      {/* <img src={image} alt={name} /> */}
      {/* {spots.map((spot) => ( */}
      <div className='spot_detail_container'>
      {content}
        </div>
      <div className='booking_container'>
      {bookingContent}
      {sessionUser && sessionUser.id !== spot.userId  && (

        <EditBookingFormModal  user={{...sessionUser}} booking={booking} />
        // <div className="book_date">
        //   <div className="book_date_search">
        //     <BookingCost user={{ ...sessionUser }} spot={spot} />
        //   </div>
        // </div>
      )}
      {/* {console.log(booking)} */}
    </div>
    </div>
    </>
  );
};

export default BookingDetail;
