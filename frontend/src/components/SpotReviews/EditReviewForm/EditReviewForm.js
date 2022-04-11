import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editReview } from '../../../store/reviews';
import { getSpot } from '../../../store/spot';
import './EditReviewForm.css';

const EditReviewForm = ({ thisReview, spot, user, hideModal }) => {
  const [review, setReview] = useState(thisReview?.review);
  const [rating, setRating] = useState(thisReview?.rating);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sessionUser = useSelector((state) => state.session.user );
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    const errors = [];
    // if (review.length < 1) errors.push('Review field cannot be empty');
    if (rating < 1) errors.push("Please leave a rating");
    setValidationErrors(errors);
  }, [ rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // console.log('---------qqqqqqqq------', updateReview.id)
    const newReview = {
      id: thisReview.id,
      review,
      rating,
      spotId: spot.id,
      userId: sessionUser.id,
    };
    let updatedReview = await dispatch(editReview(newReview));
    setReview('');
    setRating('');
    setHasSubmitted(false);
    setValidationErrors([]);
    console.log(updatedReview)
    hideModal();
    // window.location.reload();
    // history.push(`/${thisReview.id}`);

  };

  return (
    <div className='update_review_container'>
      <form onSubmit={handleSubmit}>
        <h1>Write a Review</h1>
        <ul className='errors'>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      <div className='update_review_body_form'>
        <div className='update_review_body_content'>
          <label htmlFor='update_review_content'>Review</label>
          <textarea
            name='review'
            id='review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className='update_review_body_rating'>
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
        <div className='update_review_submit_bttn'>
          <button type='submit' >
            Update Review
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default EditReviewForm;
