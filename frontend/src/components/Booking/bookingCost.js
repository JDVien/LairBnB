import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addBooking } from '../../store/bookings.js';
import './Booking.css';


const BookingCost = ({ spot, booking, hideModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const today = new Date().toDateString();


  const [startDate, setStartDate] = useState("2022-04-15");
  const [endDate, setEndDate] = useState("2022-04-15");
  const [isBooked, setIsBooked] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  console.log(startDate, endDate, "^^^^^^^^^^^^");
  const newPrice = parseInt(spot.price);

  const startArr = startDate.split("-");
  const startYear = startArr[0];
  const startMonth = startArr[1];
  const startDay = startArr[2];

  const endArr = endDate.split("-");
  const endYear = endArr[0];
  const endMonth = endArr[1];
  const endDay = endArr[2];

  const date1 = new Date(+startYear, +startMonth, +startDay);

  // creating the date 2 with sample input date.
  const date2 = new Date(+endYear, +endMonth, +endDay);

  // getting milliseconds for both dates
  const date1InMs = date1.getTime();
  const date2InMs = date2.getTime();

  // getting the diff between two dates.
  let timeDiff = 0;
  if (date1InMs > date2InMs) {
    timeDiff = date1InMs - date2InMs;
  } else {
    timeDiff = date2InMs - date1InMs;
  }

  // converting diff into days
  const daysDiff = timeDiff / (86400000);

  const totalCost = daysDiff * newPrice;

  useEffect(() => {
    const errors = [];
    if (startDate.length < 1) {
      errors.push("Start Date is required");
    }
    if (endDate.length < 1) {
      errors.push("End Date is required");
    }
    if (daysDiff < 0) {
      errors.push("End Date must be after Start Date");
    }
    setValidationErrors(errors);
  }, [startDate, endDate, daysDiff]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    setIsBooked(1);
    const booking = {
      startDate,
      endDate,
      totalCost,
      isBooked,
      spotId: spot.id,
      userId: sessionUser.id,
    };

    let createdBooking;

    createdBooking = await dispatch(addBooking(booking));

    setStartDate("");
    setEndDate("");
    setHasSubmitted(false);
    setValidationErrors([]);

    // history.push(`/spots/${spot.id}`);
    hideModal();
  };
  console.log(isBooked, '----------------------------------')
  return (
    <div className="bookingCont">
      <form onSubmit={handleSubmit}>
        <h2>Book Here!</h2>
        <ul className="errors">
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      <h2>Total Price$ {totalCost}</h2>
    </div>
  );
};



//   const dispatch = useDispatch();
//   const history = useHistory();
//   const sessionUser = useSelector((state) => state.session.user);
//   const { spotId } = useParams();
//   const thisSpot = useSelector(state => state.spots[spotId])
//   // const spot = useSelector(state => state.spots[spotId])
//  let [startDate, setStartDate] = useState(new Date());
// let [endDate, setEndDate] = useState(new Date());
//   const [numGuests, setNumGuests] = useState(0);
//   const [hasSubmitted, setHasSubmitted] = useState(false);
//   const [validationErrors, setValidationErrors] = useState([]);
//   const bookPrice = parseInt(thisSpot.price, 10)
//   // let numGuests;
//   let totalTime;
//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   function handleSelect(ranges) {
//     setStartDate(ranges.selection.startDate);
//     setEndDate(ranges.selection.endDate);
//   }
//   console.log( startDate, endDate)

//   let event = new Date(startDate);
//   let start = JSON.stringify(event)
//   start = start.slice(1,11)

//   event = new Date(endDate);
//   let end = JSON.stringify(event);
//   end = end.slice(1,11);
//   function handleChange(e) {
//      let guestNum = parseInt(e.target.value, 10)

//     return guestNum;
//   }

//   let guest = parseInt(numGuests, 10);
//   console.log(guest, " guest")
// startDate = new Date();
//   let sNum = startDate.getTime()
//   endDate = new Date();
//   let eNum = endDate.getTIme()

// console.log(start, end, '----------------')
//   totalTime = parseInt(eNum, 10) - parseInt(sNum, 10)


//    console.log(numGuests, "numGuests")
//   const totalDays = totalTime / 86400000;
//   const finalCost = bookPrice * totalDays * guest;
//   let totalCost = finalCost

//   console.log(bookPrice, " bookPrice")
//   console.log(totalTime)
//    console.log("totalDays", totalDays)
//   console.log(totalCost, '   -----------------$$$$$$$$$$$$$')

//   useEffect(() => {
//     const errors = [];
//     if (startDate.length < 1) errors.push("Please pick a Start Date");
//     if (endDate.length < 1) errors.push("Please pick an End Date");
//     if (totalDays < 0) errors.push("End Date must follow Start Date");
//     if (numGuests < 1 ) errors.push("Must have at least one guest");
//     if (numGuests > 6) errors.push("Can't exceet maximum allowed number of guests")
//     setValidationErrors(errors);
//   }, [startDate, endDate, totalDays, numGuests])

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setHasSubmitted(true);

//     const booking = {
//       startDate,
//       endDate,
//       totalCost,
//       spotId: spotId,
//       userId: sessionUser.id,
//     };
//     let newBooking = await dispatch(addBooking(booking));
//     setStartDate('');
//     setEndDate('');
//     setHasSubmitted(false);
//     setValidationErrors([]);
//     setNumGuests(0)
//     history.push(`/${spotId}`)
//   };

//     return (
//       <div className='booking_container'>
//         <form className='booking_form' onSubmit={handleSubmit}>
//         <div className='book_price_per_night'>
//         ${thisSpot?.price} night
//         </div>
//         {hasSubmitted &&
//           <ul className='errors'>
//             {validationErrors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//             </ul>
//           }
//         <div className="book_date_picker">
//         <label>
//           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
//         </label>
//         </div>
//         <div className='num_guests'>
//         <label>
//           Number of Guests
//           <input
//             type="number"
//             value={numGuests}
//             onChange={(e) => setNumGuests(e.target.value)}
//           />
//         </label>
//         </div>
//         {/* <label className='adult_num_select'>Guests
//           <select defaultValue={1} onChange={handleChange}>
//             <option selected value='1'>1</option>
//             <option value='2'>2</option>
//             <option value='3'>3</option>
//             <option value='4'>4</option>
//             <option value='5'>5</option>
//             <option value='6'>6</option>
//           </select>
//         </label> */}
//         <div className='total_booking_cost'>
//           Total before taxes:   ${totalCost}</div>
//         <button className='submit-button' type="submit">Reserve</button>
//         </form>

//       </div>
//     );
//   };



export default BookingCost;
