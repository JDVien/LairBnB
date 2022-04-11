import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../store/reviews';
import { getSpot } from '../../store/spot';
import './SpotReviewForm.css';

const SpotReviewForm = ({ spot, user, hideModal }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sessionUser = useSelector((state) => state.session.user );
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSpot(spot, id));
  }, [dispatch, id, spot, hasSubmitted]);

  useEffect(() => {
    const errors = [];
    if (review.length < 1) errors.push('Review field cannot be empty');
    if (rating < 1) errors.push("Please leave a rating");
    setValidationErrors(errors);
  }, [review, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const newReview = {
      review,
      rating,
      spotId: spot.id,
      userId: sessionUser.id,
    };
    console.log('-------------------', spot.id)
    let submitReview = await dispatch(addReview(newReview));
    setReview('');
    setRating('');
    setHasSubmitted(false);
    setValidationErrors([]);
    hideModal();
    console.log(submitReview)
    // window.location.reload();
  };

  return (
    <div className='review_container'>
      <h1>Write a Review</h1>
      <form className='review_form' onSubmit={handleSubmit}>
        <ul className='errors'>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      <div className='review_body_form'>
        <div className='review_body_content'>
          <label htmlFor='review_content'></label>
          <textarea className='review_textbox'
            name='review'
            id='review'
            value={review}
            placeholder='Provide some feedback!'
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className='review_body_rating'>
          <label htmlFor='rating'>Rating</label>
          <select
            name='rating'
            id='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >   <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </div>
        <div >
          <button className='review_submit_bttn'type='submit'  >
            Submit Review
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default SpotReviewForm;
