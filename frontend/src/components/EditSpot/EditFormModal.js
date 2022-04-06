import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './index';
import SpotDetail from '../Spot/SpotDetail'
// import { NavLink } from 'react-router-dom';

function EditFormModal({ user, spot }) {
  const [showModal, setShowModal] = useState(false);
 console.log("spot", spot)
  return (
    <>
      {/* <NavLink to='/spots' onClick={() => setShowModal(true)} className='edit_bttn nav-item'>Update</NavLink> */}
      <button onClick={() => setShowModal(true)}>Update Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm spot={spot} hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
