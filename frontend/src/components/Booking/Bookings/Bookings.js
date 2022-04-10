import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getAllSpots } from "../../../store/spot";
import { getSpot} from "../../../store/spot";
import { getAllBookings } from "../../../store/bookings";
// import SpotDetail from '../SpotDetail';
import BookingDetail from '../BookingDetail/index'
import BookingCard from '../BookingCard/BookingCard';
import SpotDetail from "../../Spot/SpotDetail";

import "./Bookings.css";

const Bookings = () => {
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));
  const spots = useSelector((state) => Object.values(state.spots));

  // useEffect(() => {
  //   dispatch(getAllSpots());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getSpot(spotId));
  // }, [dispatch]);

  if (!bookings) return null;

  return (
    <div className='bookings_body'>
                <Bookings />
        <h1>My Bookings</h1>
        {/* {sessionUser &&
        sessionUser.id === spots?.userId && */}
        {bookings?.userId === spots?.userId && (
          <div className="bookings_card_body">
            {bookings?.map(booking => {
              {console.log(booking)}
                return (
                  <NavLink to={`/${booking?.id}`}>
                  <BookingCard
                    key={booking?.id}
                    src="https://media.wired.com/photos/5933b12d714b881cb296bd67/master/w_2560%2Cc_limit/colombo2_f.jpg"
                    className="booking"
                    totalCost={booking?.totalCost}
                    startDate={booking?.startDate}
                    endDate={booking?.endDate}
                    spotsId={booking?.spotsId}

                    ></BookingCard>
                </NavLink>
              )
                })
            })}
          </div>
         )}
        <Route path="/bookings/:bookingId">
          <BookingDetail bookings={bookings} />
        </Route>

    </div>
  );
};

export default Bookings;
