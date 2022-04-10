import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotReviewForm from './SpotReviewForm';
import { NavLink } from 'react-router-dom';

const SpotReviewModal = ({user, spot}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button onClick={() => setShowModal(true)} className='review_bttn nav-item'>Write a Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SpotReviewForm spot={spot} hideModal={() => setShowModal(false)} />
          </Modal>
        )}
    </>
  );
}

export default SpotReviewModal;
