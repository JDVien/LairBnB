import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import SpotReviewModal from './SpotReviewModal'
import EditReviewFormModal from './EditReviewFormModal';
import { getReviews } from '../../store/reviews';
import './index.css';
import { useEffect } from 'react';

const Reviews = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  // const spot = useSelector(state => state.spot[spotId]);
  let reviews = useSelector(state => {
    return Object.values(state.reviews)
  });


  useEffect(() => {
    dispatch(getReviews(spotId));
  }, [dispatch, spotId])


  reviews = reviews.filter(review =>review.spotId === +spotId)

  return (
    <div className='reviews_all_container'>
       <div className='create-review-modal'>
        <SpotReviewModal />
      </div>
      {reviews?.map(review =>
        <div className='one-review-div' key={review?.id}>
          <div className='review-div'>
            <div className='profile-logo'>
              <i className="fas fa-user-circle" />
              {/* <p>{review?.User?.username}</p> */}
            </div>
            <div id='review-content'>
              <h3>
                {review?.review}
              </h3>
              <h3>
                {review?.rating}
              </h3>

            </div>
          </div>
          <div className='all-modals-bttns'>
            {sessionUser && sessionUser.id === review?.userId && (
              <div className='action-bttns-reviews'>
                <div className='action-btt-review'>
                  <EditReviewFormModal review={review} />
                </div>
                {/* <div className='action-btt-review'>
                  <DeletereviewModal review={review} />
                </div> */}
              </div>
            )
            }
          </div>
        </div>
      )}
      </div>
  )
}

export default Reviews;