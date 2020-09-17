import React, { useState } from "react";

import Modal from "react-modal";

import RegisterForm from "./RegisterForm/RegisterForm";

import "./Register.css";

const Register = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="register-button" onClick={handleOpenModal}>Register</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <RegisterForm setIsOpen={setIsOpen}/>
      </Modal>
    </div>
  );
};

export default Register;
