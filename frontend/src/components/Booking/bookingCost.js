import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addBooking } from '../../store/bookings.js';
import './Booking.css';
import Search from '../Search'

const BookingCost = (user, spot) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { spotId } = useParams();
  const thisSpot = useSelector(state => state.spots[spotId])
  // const spot = useSelector(state => state.spots[spotId])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const bookPrice = parseInt(thisSpot.price, 10)
  // let numGuests;

};

export default BookingCost;
