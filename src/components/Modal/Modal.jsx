// import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', evn => {
      if (evn.code === 'Escape') {
        console.log('close');
        this.props.onClose();
      }
    });
    // console.log('did');
  }
  //   componentWillUnmount() {
  //     console.log('will');
  //   }

  render() {
    return createPortal(
      <div className="modal__backdrop">
        <div className="modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
