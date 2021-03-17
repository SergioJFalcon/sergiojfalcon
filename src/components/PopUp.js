import React from 'react';
import Modal from 'react-modal';
import ModalButton from './ModalButton';

class PopUp extends React.Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div className='modal-name'>
        <ModalButton handleClick={this.toggleModal}>
          click to open modal
        </ModalButton>
        <Modal
          className='modal-base'
          overlayClassName='overlay-base'
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
        >
          <img
            onClick={this.toggleModal}
            src={data.src}
            alt='image displayed in modal'
          />
          <span className='text'>{data.description}</span>
        </Modal>
      </div>
    );
  }
}

export default PopUp;