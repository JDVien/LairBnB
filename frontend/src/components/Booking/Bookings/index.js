import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { getAllSpots } from "../../../store/spot";
import { getAllBookings } from "../../../store/bookings";
// import SpotDetail from '../SpotDetail';
import SpotCard from "../../SpotCard/SpotCard";
import SpotDetail from "../SpotDetail/";
import Bookings from "./Bookings";
import "./Spot.css";

const BookingsIndex = () => {
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const spots = useSelector((state) => Object.values(state.spots));
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (!spots) return null;

  return (
    <>
      <Route path="/bookings">
        <Bookings />
      </Route>
    </>
  );
};

export default BookingsIndex;
