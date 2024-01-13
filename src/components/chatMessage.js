
import React from 'react';
import './chatMessage.scss'
// import { socket } from '../socket';
import { io } from 'socket.io-client';
import Message from './mess';

const socket = io.connect("http://localhost:3000")

export default class ChatMessage extends React.Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            text: '',
            messReceive: '',
            socket: null,



            userName: '',
            room: ''



        };
    }

    // componentDidMount() {
    //     this.setState({
    //         socket: io('http://localhost:3000')
    //     })
    // }

    //take event : use socket.on


    componentDidUpdate(prevProps, prevState) {

        if (this.state.socket !== prevState.socket) {
            socket?.on("receive_message", (data) => {
                alert("...", data)
                // gui len man hinh lm sau
                // this.setState({
                //     messReceive:data
                // })
            })
        }
    }
    // typingText = (e) => {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }

    // sendMess = () => {
    //     console.log('...', this.state.text)
    //     socket.emit('send_message', { content: this.state.text });
    // }

    handleChage = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = () => {
        console.log('..', this.state)

    }

    joinGroup = () => {
        if (this.state.userName && this.state.room) {
            socket.emit('join_room', this.state.room)
        }

    }

    render() {
        let { isClick, text, messReceive } = this.state
        return (
            // <>
            //     <div className='chatContainer'>
            //         <div className='chatLeft'>
            //             <div className='avatarContain'>
            //                 <div className='avatar'></div>
            //             </div>
            //             <div className='mess'>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         sadfadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         ccc
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         sadfadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         ccc
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         sadfadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         ccc
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         sadfadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            //                     </div>
            //                 </div>
            //                 <div className='chated-content'>
            //                     <div className='chated'>
            //                         ccc
            //                     </div>
            //                 </div>

            //             </div>




            //         </div>

            //         <div className='chatRight'>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     ccc

            //                 </div>
            //             </div>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     sdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddaasddddddddddddddddddddddddddddd
            //                 </div>
            //             </div>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     ccc

            //                 </div>
            //             </div>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     sdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddaasddddddddddddddddddddddddddddd
            //                 </div>
            //             </div>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     ccc

            //                 </div>
            //             </div>
            //             <div className='chated-content'>
            //                 <div className='chated'>
            //                     sdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddaasddddddddddddddddddddddddddddd
            //                 </div>
            //             </div>


            //         </div>

            //     </div>

            //     {/* {messReceive} */}
            // </>

            <div className=''>
                <input type='text'
                    value={this.state.userName}
                    placeholder='join...'
                    name="userName"
                    onChange={(e) => this.handleChage(e)}
                />
                <input type='text'
                    name="room"
                    value={this.state.room}
                    placeholder='roomId...'
                    onChange={(e) => this.handleChage(e)}
                />
                <button onClick={() => this.joinGroup()}>ok</button>

                <Message socket={socket}
                    userName={this.state.userName}
                    room={this.state.room}
                />
            </div>
        )
    }
}

