
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faVideo, faPhone, faCirclePlus, faImage, faNoteSticky, faGift, faFaceSmile, faThumbsUp, faBell, faAngleRight, faThumbTack, faCircle, faImages, faFileLines, faLink, faBan, faCircleMinus, faTriangleExclamation, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './FrameMiddle.scss'
import { socket } from '../socket';
import ChatMessage from '../components/chatMessage.js';
export default class FrameMiddle extends React.Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            isClick: false,
            text: '',
            messReceive: ''
        };
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        // Kiểm tra xem prop 'userId' có thay đổi không
        if (this.state.messReceive !== prevState.messReceive) {
            socket.on("receive_message", (data) => {
                alert("...", data)
                // gui len man hinh lm sau
                // this.setState({
                //     messReceive:data
                // })
            })
        }
    }

    handleExtendFrameMiddle = () => {
        this.setState({
            isClick: !this.state.isClick

        })
        this.props.handleExtend(this.state.isClick)
    }



    typingText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    sendMess = () => {
        console.log('...', this.state.text)
        socket.emit('send_message', { content: this.state.text });
    }

    render() {
        let { isClick, text, messReceive } = this.state

        return (
            <div className='frameMiddleContainer'>

                <div className='iconContainer'>

                    <div className='avatarContain'>
                        avatar
                    </div>

                    <div className='name'>
                        nameưadsffffffffff
                    </div>

                    <div className='functionsContain'>
                        <div className='call'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='facetime'>
                            <FontAwesomeIcon icon={faVideo} />

                        </div>
                        <div className={isClick === true ? 'moreInfor Active' : 'moreInfor'}
                            onClick={() => this.handleExtendFrameMiddle()}>
                            <div className={isClick === true ? 'contain Active' : 'contain'}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>

                        </div>
                    </div>

                </div>

                <div className='chat'>

                    <ChatMessage />

                </div>
                <div className='texting'>
                    <div className='fourIcon'>
                        <div className='anotherAction'>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                        <div className='image'>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        <div className='sticker'>
                            <FontAwesomeIcon icon={faNoteSticky} />
                        </div>
                        <div className='gif'>
                            <FontAwesomeIcon icon={faGift} />
                        </div>
                    </div>
                    <div className='textingAndLike'>
                        <div className='text'>
                            <form className='searchForm' >
                                <input className='input'
                                    value={text}
                                    type="text" placeholder="Aa.." name="search"
                                    onChange={(e) => this.typingText(e)}
                                />

                                <div className='iconSmile'>
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                </div>
                            </form>
                        </div>
                        <div className='like'>
                            {!text ?
                                <FontAwesomeIcon icon={faThumbsUp} />
                                :
                                <FontAwesomeIcon
                                    onClick={() => this.sendMess()}
                                    icon={faPaperPlane} />

                            }

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

