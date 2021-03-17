import React, { Component } from 'react'
import ReactModal from 'react-modal';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showModal2: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleOpenModal2 () {
        this.setState({ showModal2: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
    handleCloseModal2 () {
        this.setState({ showModal2: false });
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <button onClick={this.handleOpenModal}>Trigger #1 Modal</button>
                <button onClick={this.handleOpenModal2}>Trigger #2 Modal</button>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Modal #1 Global Style Override Example"
                    onRequestClose={this.handleCloseModal}
                >
                <p>Modal text!</p>
                <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
                <ReactModal 
                    isOpen={this.state.showModal2}
                    contentLabel="Modal #2 Global Style Override Example"
                    onRequestClose={this.handleCloseModal2}
                >
                <p>Modal #2 text!</p>
                <button onClick={this.handleCloseModal2}>Close Modal</button>
                </ReactModal>
            </div>
        )
    }
}


export default Contact;