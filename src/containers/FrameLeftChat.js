import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './FrameLeftChat.scss'


export default class FrameLeftChat extends React.Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='frameLeftChatContainer'>
                <div className='top'>

                    <div className='upperContain'>
                        <div className='chat'>
                            Chats
                        </div>


                        <div className='pen'>
                            <div className='bg'>

                                <FontAwesomeIcon className='icon' icon={faPenToSquare} />

                            </div>

                        </div>
                    </div>


                    <form className='search'>
                        <div className='contain'>
                            <div className='containInput'>
                                <input className='searchInput' type="text" placeholder="Search messenger" name="search" />

                                <div className='searchGlass'>

                                    <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />


                                </div>
                            </div>
                        </div>
                    </form>


                </div>

                {/* Giữa   */}
                <div className='middle'>
                    <div className='chat'>
                        <div className='avatar'>

                        </div>
                        <div className='someInfor'>

                        </div>
                    </div>
                </div>
                <div className='bottom'>

                </div>
            </div>
        )
    }
}

