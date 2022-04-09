import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteSpot } from '../../../store/spot';
import { useState } from 'react';
import EditFormModal from '../../EditSpot/EditFormModal';
import BookingFormModal from '../../Booking/Bookings/BookingFormModal';
import BookingCost from '../../Booking/bookingCost'
import './SpotDetail.css';

const SpotDetail = ({
  id,
  name,
  address,
  city,
  state,
  country,
  price,
  userId,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { spotId } = useParams();
  const { bookingId } = useParams();
  const spot = useSelector((state) => state.spots[spotId]);
  const booking = useSelector((state) => state.bookings[bookingId]);
  const history = useHistory();
  // const spots = { id, name, address, city, state, country, price, userId }
  // useEffect(() => {
  //   dispatch(getSpot(spotId));
  // }, [dispatch, spotId]);

  const handleDelete = (spotId) => {
    dispatch(deleteSpot(spotId));
    history.push("/spots");
    window.location.reload();
  };

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

  return (
    <div className="spot_detail">
      {/* <img src={image} alt={name} /> */}
      {/* {spots.map((spot) => ( */}
      {content}
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
        <BookingFormModal spot={spot} user={{...sessionUser}} booking={booking} />
        // <div className="book_date">
        //   <div className="book_date_search">
        //     <BookingCost user={{ ...sessionUser }} spot={spot} />
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default SpotDetail;
