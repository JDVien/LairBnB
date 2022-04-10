import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditReviewForm from './EditReviewForm';
import { NavLink } from 'react-router-dom';

const EditReviewFormModal = ({user, spot, review} ) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button onClick={() => setShowModal(true)} className='review_bttn nav-item'>Edit review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditReviewForm thisReview={review} spot={spot} hideModal={() => setShowModal(false)}/>
          </Modal>
        )}
    </>
  );
}

export default EditReviewFormModal;
