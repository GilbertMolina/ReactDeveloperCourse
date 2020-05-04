import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Selected option</h3>
    {
      props.selectedOption && <p>{props.selectedOption}</p>
    }
    <button
      className="button"
      onClick={props.handleClearSelectedOption}
    >
      Okay
    </button>
  </Modal>
);

export default OptionModal;