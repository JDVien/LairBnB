import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpot from './EditSpot';

// import { NavLink } from 'react-router-dom';

function EditFormModal({ user, spot }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <NavLink to='/spots' onClick={() => setShowModal(true)} className='edit_bttn nav-item'>Update</NavLink> */}
      <button onClick={() => setShowModal(true)}>Update Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSpot spot={spot} user={user} hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
