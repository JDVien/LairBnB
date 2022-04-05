import { csrfFetch } from "./csrf";

const ADD_SPOTS = 'spot/ADD_SPOTS';
const ADD_ONE_SPOT = 'spots/addOneSpot';
const REMOVE_ONE_SPOT = 'spots/removeOneSpot';

const addSpots = (spots) => {
  return {
    type: ADD_SPOTS,
    payload: spots,
  };
};

const addOneSpot = (spot) => {
  return {
    type: ADD_ONE_SPOT,
    payload: spot,
  };
};

const removeOneSpot = (id) => {
  return { type: REMOVE_ONE_SPOT, payload: id };
};

export const getAllSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots');
  if (response.ok) {
    const data = await response.json();
    dispatch(addSpots(data));
  }
};

export const addSpot = (spot) => async (dispatch) => {

  const response = await csrfFetch('/api/spots/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  });

  // if (response.ok) {
    const data = await response.json();
    dispatch(addOneSpot(data.spot));
    return response;
  }
// };

export const deleteSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removeOneSpot(id));
  }
};

const spotReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_SPOTS:
      const allSpots = {};
      action.payload.forEach((spots) => {
        allSpots[spots.id] = spots;
      });
      return { ...state, ...allSpots };
    case ADD_ONE_SPOT:
      newState = Object.assign({}, state);
      newState.spot = action.payload;
      return newState;
    case REMOVE_ONE_SPOT:
      newState = { ...state };
      delete newState[action.payload];
      return {};
    default:
      return state;
  }
};

export default spotReducer;
