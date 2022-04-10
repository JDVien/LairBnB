import { csrfFetch } from "./csrf";

const ADD_SPOTS = 'spot/ADD_SPOTS';
const ADD_ONE_SPOT = 'spots/addOneSpot';
const REMOVE_ONE_SPOT = 'spots/removeOneSpot';
const GET_SPOT = 'spots/GET_SPOT'
const UPDATE_SPOT = 'spots/UPDATE_SPOT';

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

const updateSpot = (spot) => {
  return {
  type: UPDATE_SPOT,
  payload: spot
  }
}

const getOneSpot = (spot) => {
  return {
  type: GET_SPOT,
  payload: spot,
  }
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

export const getSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);

    const data = await response.json();
    dispatch(getOneSpot(data))

}

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

export const editSpot = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${payload.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    const spot = data.spot
    dispatch(updateSpot(spot));
  }
}

export const deleteSpot = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
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
    case UPDATE_SPOT:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_ONE_SPOT:
      newState = { ...state };
      delete newState[action.payload];
      return {};
    case GET_SPOT: {
      return { ...state, [action.payload.id]: action.payload };
    }
    default:
      return state;
  }
};

export default spotReducer;
