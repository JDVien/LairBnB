import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'reviews/makeReview';
const GET_REVIEWS = 'reviews/getReview';
const UPDATE_REVIEW = 'reviews/updateReview';
const REMOVE_REVIEW = 'reviews/deleteReview';

const makeReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review
  };
};

const getReview = (reviews, spotId) => {
  return {
    type: GET_REVIEWS,
    reviews,
    spotId
  };
};

const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    payload: review
  };
};

const deleteReview = (id) => {
  return {
    type: REMOVE_REVIEW,
    payload: id
  };
};

export const getReviews = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReview(reviews));
    return response;
  }
};


export const addReview = review => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });
  const data = await response.json();
  dispatch(makeReview(data));
  return response;
};

export const editReview = review => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}/edit`, {
    method: 'PUT',
    body: JSON.stringify(review),
  });
  const data = await response.json();
  dispatch(updateReview(data));
  return response;
};

export const removeReview = id => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteReview(id));
  return response;
};

const reviewReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case GET_REVIEWS:
    const newReviews = {};
    action.reviews.forEach((review) => {
      newReviews[review.id] = review;
    })
    return {
      ...state,
      ...newReviews
    }
    case ADD_REVIEW:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE_REVIEW:
      newState = Object.assign({}, state)
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_REVIEW:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
