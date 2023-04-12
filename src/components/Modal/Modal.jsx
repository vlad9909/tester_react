// import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  hendleKeyDown = evn => {
    if (evn.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = evn => {
    if (evn.target === evn.currentTarget) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
    // console.log('did');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  render() {
    return createPortal(
      <div className="modal__backdrop" onClick={this.hendleBackdropClick}>
        <div className="modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
