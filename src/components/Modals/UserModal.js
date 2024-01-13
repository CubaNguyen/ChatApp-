import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserModal.scss'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { faBan, faBarsStaggered, faCommentSlash, faGear, faHouseLock, faL, faQuestionCircle, faRightFromBracket, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions'
import reactRouterDom from 'react-router-dom';
import { xoaTokenKhoiLocalStorage } from '../../utils/Token';

class UserModal extends Component {
    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            modalIsOpen: true
        };

    }
    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    logOut = () => {
        if (this.props.history) {
            this.props.history.push(`/login`)
            this.props.logOutRedux()
            xoaTokenKhoiLocalStorage()
        }

    }

    render() {
        const { modalIsOpen } = this.state;

        return (
            <div>
                {/* <Button color="primary" onClick={this.openModal}>
                    Open Modal
                </Button> */}
                <Modal isOpen={modalIsOpen}
                    toggle={this.closeModal}>
                    <ModalBody className='modal-dialog'>
                        <div className='containFunct'>
                            <div className='modal-dialog-func'>

                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faGear} />
                                </div>
                                <div className='text'>
                                    Preferences
                                </div>
                            </div>
                        </div>
                        <div className='containFunct'>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faCommentSlash} />
                                </div>
                                <div className='text'>
                                    Restricted accounts
                                </div>

                            </div>
                        </div>
                        <div className='containFunct'>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faHouseLock} />
                                </div>
                                <div className='text'>
                                    Private & safety
                                </div>

                            </div>
                        </div>
                        <div className='containFunct TwoFunct'>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faQuestionCircle} />
                                </div>
                                <div className='text'>
                                    Help
                                </div>

                            </div>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faTriangleExclamation} />
                                </div>
                                <div className='text'>
                                    Report a problem
                                </div>

                            </div>
                        </div>
                        <div className='containFunct ThreeFunct'>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                                </div>
                                <div className='text'>
                                    Terms
                                </div>

                            </div>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                                </div>
                                <div className='text'>
                                    Privacy Policy
                                </div>

                            </div>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                                </div>
                                <div className='text'>
                                    Cookie Policy
                                </div>

                            </div>
                        </div>
                        <div className='containFunct TwoFunct'>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='iconContain' icon={faFacebookMessenger} />
                                </div>
                                <div className='text'>
                                    Try Messenger for Windows
                                </div>

                            </div>
                            <div className='modal-dialog-func'>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                                <div className='text' onClick={() => this.logOut()}>
                                    Log out
                                </div>

                            </div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="secondary" onClick={this.closeModal}>
                            Close Modal
                        </Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        logOutRedux: () => dispatch(actions.logOut()),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserModal));