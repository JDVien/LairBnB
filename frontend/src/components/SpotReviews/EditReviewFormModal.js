import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotReviewForm from './SpotReviewForm';
import { NavLink } from 'react-router-dom';

const SpotReviewModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <NavLink to='/' onClick={() => setShowModal(true)} className='review_bttn nav-item'>Write a Review</NavLink>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SpotReviewForm />
          </Modal>
        )}
    </>
  );
}

export default SpotReviewModal;
