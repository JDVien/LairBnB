import { csrfFetch } from "./csrf";

const GET_ALL_BOOKINGS = 'booking/getBookings';
const ADD_BOOKING = 'bookings/addOneBooking';
const REMOVE_BOOKING = 'bookings/removeOneBooking';
const GET_BOOKING = 'booking/getOneBooking'
const UPDATE_BOOKING = 'bookings/updateBooking';

const getBookings = (bookings) => {
  return {
    type: GET_ALL_BOOKINGS,
    payload: bookings,
  };
};

const addOneBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking,
  };
};

const updateBooking = (booking) => {
  return {
  type: UPDATE_BOOKING,
  payload: booking
  }
}

const getOneBooking = booking => ({
  type: GET_BOOKING,
  payload: booking,
});

const removeOneBooking = (id) => {
  return { type: REMOVE_BOOKING, payload: id };
};

export const getAllBookings = (bookings) => async (dispatch) => {
  const response = await csrfFetch('/api/bookings');
  if (response.ok) {
    const data = await response.json();
    dispatch(getBookings(data));
  }
};

export const getBooking = (id) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${id}`);

    const data = await response.json();
    dispatch(getOneBooking(data))

}

export const addBooking = (booking) => async (dispatch) => {

  const response = await csrfFetch('/api/bookings/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking)
  });

  // if (response.ok) {
    const data = await response.json();
    dispatch(addOneBooking(data.booking));
    return response;
  }
// };

export const editBooking = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${payload.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    const booking = data.booking
    dispatch(updateBooking(booking));
  }
}

export const deleteBooking = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removeOneBooking(id));
  }
};

const bookingReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_BOOKINGS:
      const allBookings = {};
      action.payload.forEach((bookings) => {
        allBookings[bookings.id] = bookings;
      });
      return { ...state, ...allBookings };
    case ADD_BOOKING:
      newState = Object.assign({}, state);
      newState.booking = action.payload;
      return newState;
    case UPDATE_BOOKING:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_BOOKING:
      newState = { ...state };
      delete newState[action.payload];
      return {};
    // case GET_BOOKING: {
    //   let booking = {};
    //   newState = { ...state, [action.payload.id]:
    //     {...state[action.payload.id], ...action.booking }}
    //     booking = Object.assign({}, state[action.payload.id])
    //   return {booking};
    // }
    default:
      return state;
  }
};

export default bookingReducer;
