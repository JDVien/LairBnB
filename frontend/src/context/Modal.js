import React, { useContext, useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children}) {
  // React ref - set div below to this ref
  const modalRef = useRef();
  const [value, setValue] = useState();
  // value state will be set to modalRef.current after initial render
  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    // the <> div element is a sibling
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  // gets the value of the ModalContext into Modal component
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  // to get elements to show up, the rendered elements of ModalProvider..
  // ..must be passed in as the first argument of ReactDOM.createPortal, and...
  // ..modalNode as the second argument
  return ReactDOM.createPortal (
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}
