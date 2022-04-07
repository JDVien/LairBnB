import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './index';
import { NavLink } from 'react-router-dom';
import "./SignupForm.css"

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink to='/' onClick={() => setShowModal(true)} className='signup_bttn nav-item'>Sign Up</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
