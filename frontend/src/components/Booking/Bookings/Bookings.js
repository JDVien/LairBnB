import { useEffect, useParams } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { getAllSpots } from "../../../store/spot";
import { getAllBookings } from "../../../store/bookings";
// import SpotDetail from '../SpotDetail';
import BookingCard from '../BookingCard/BookingCard';
import SpotDetail from "../../Spot/SpotDetail";

import "./Bookings.css";

const Bookings = () => {
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));
  const spots = useSelector((state) => Object.values(state.spots));


  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (!bookings) return null;

  return (
    <main>

        <h1>My Bookings</h1>
        {/* {sessionUser &&
        sessionUser.id === spots?.userId && */}
        {/* {bookings?.userId === spots?.userId && ( */}
          <div className="bookings_card_body">
            {bookings?.map(booking => {
              return (
                <NavLink to={`/${bookings?.id}`}>
                  <BookingCard
                    key={booking?.id}
                    src="https://media.wired.com/photos/5933b12d714b881cb296bd67/master/w_2560%2Cc_limit/colombo2_f.jpg"
                    className="booking"
                    totalCost={booking?.totalCost}
                    startDate={booking?.startDate}
                    endDate={booking?.endDate}
                  ></BookingCard>
                </NavLink>
              )
            })}
          </div>
        {/* )} */}
        <Route path="/spots/:spotId">
          <SpotDetail spots={spots} />
        </Route>

    </main>
  );
};

export default Bookings;
