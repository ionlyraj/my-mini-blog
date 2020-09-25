import React from 'react';
import Modal from 'react-modal';

const DeleteConfirmModal = props => (
  <Modal
    className='modal'
    isOpen={!!props.selectedBlog}
    onRequestClose={props.setConfirmationFalse}
    ariaHideApp={false}
    contentLabel='Selected Expense'
  >
    <h3 className='modal__title'>Are you sure?</h3>
    <p className='modal__body'>Do you really want to remove the blog <span>{props.selectedBlog}</span></p>
    <button
      className='button button--confirm'
      onClick={props.removeBlog}
    >Remove
    </button>
    <button
      className='button button--cancel'
      onClick={props.setConfirmationFalse}
    >Cancel
    </button>
  </Modal>
);

export default DeleteConfirmModal;
