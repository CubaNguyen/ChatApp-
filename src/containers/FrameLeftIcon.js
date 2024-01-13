import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCircleUser, faUserGroup, faDoorOpen, faCommentDots, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import './FrameLeftIcon.scss'
import { Link } from 'react-router-dom';
import UserModal from '../components/Modals/UserModal';

class FrameLeftIcon extends Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            isClick: '',
            icon: 'icon',
            isOpen: false,
            isOpenUserodal: false,
        };
    }
    componentDidMount() {

    }


    handleOpenTab = (openTab) => {
        this.setState({
            icon: 'iconActive',
            isClick: openTab
        })
    }

    handleOpenDoor = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    openUserModal = () => {
        this.setState({
            isOpenUserodal: !this.state.isOpenUserodal,

        })

    }
    render() {


        let { isClick, icon, isOpen, isOpenUserodal } = this.state;
        return (

            <div className={isOpen === true ? 'frameLeftIconContainer Active' : 'frameLeftIconContainer'}>
                <div className='upper'>

                    <div className='chats'
                        onClick={() => { this.handleOpenTab('chat') }}
                    >
                        <Link to="/" exact style={{ color: '#65676b', textDecoration: 'none' }}>
                            <div className={isClick === 'chat' ? `${icon}` : 'icon'}>
                                <FontAwesomeIcon className={isClick === 'chat' ? `iconContain Active` : 'iconContain'} icon={faComment} />
                                <div className='text'>Chats</div>
                            </div>

                        </Link>


                    </div>



                    <div className='people'
                        onClick={() => { this.handleOpenTab('people') }}
                    >
                        <Link to="/active" exact style={{ color: '#65676b', textDecoration: 'none' }}>

                            <div className={isClick === 'people' ? `${icon}` : 'icon'}>
                                <FontAwesomeIcon className={isClick === 'people' ? `iconContain Active` : 'iconContain'} icon={faUserGroup} />
                                <div className='text'>People</div>
                            </div>
                        </Link>

                    </div>
                    <div className='requests'
                        onClick={() => this.handleOpenTab('requests')}
                    >
                        <Link to="/requests" exact style={{ color: '#65676b', textDecoration: 'none' }}>

                            <div className={isClick === 'requests' ? `${icon}` : 'icon'}>
                                <FontAwesomeIcon className={isClick === 'requests' ? `iconContain Active` : 'iconContain'} icon={faCommentDots} />
                                <div className='text'>Requests</div>
                            </div>
                        </Link>


                    </div>
                    <div className='archive'
                        onClick={() => this.handleOpenTab('archive')}
                    >
                        <Link to="/archived" exact style={{ color: '#65676b', textDecoration: 'none' }}>
                            <div className={isClick === 'archive' ? `${icon}` : 'icon'}>
                                <FontAwesomeIcon className={isClick === 'archive' ? `iconContain Active` : 'iconContain'} icon={faBoxArchive} />
                                <div className='text'>Archive</div>

                            </div>
                        </Link>


                    </div>
                </div>

                <div className={isOpen === true ? 'lower Active' : 'lower'}>
                    <FontAwesomeIcon className={isOpen === true ? 'user Active' : 'user'} icon={faCircleUser}
                        onClick={() => this.openUserModal()}
                    />

                    <div className='isClick'>

                        <div className={`${icon}`}
                            onClick={() => { this.handleOpenDoor() }}
                        >
                            <FontAwesomeIcon className='iconContain' icon={faDoorOpen} />

                        </div>
                    </div>
                </div>
                {isOpenUserodal === true &&
                    <UserModal></UserModal>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameLeftIcon);