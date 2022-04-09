import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import BookingCost from '../bookingCost';
import './Bookings.css'
// import SpotDetail from '../Spot/SpotDetail'
// import { NavLink } from 'react-router-dom';

function BookingFormModal({ spot, user, booking}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <NavLink to='/spots' onClick={() => setShowModal(true)} className='edit_bttn nav-item'>Update</NavLink> */}
      <button className='update_button' onClick={() => setShowModal(true)}>Book</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingCost spot={spot} booking={booking} hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default BookingFormModal;
