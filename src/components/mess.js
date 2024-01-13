
import React from 'react';
// import './chatMessage.scss'
// import { socket } from '../socket';
import { io } from 'socket.io-client';

export default class Message extends React.Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            currentMessage: '',
            // socket: this.props.socket
        };
    }
    componentDidMount() {
        this.setupSocketListeners();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.socket !== prevProps.socket) {
            this.setupSocketListeners();
        }
    }

    // Định nghĩa hàm setupSocketListeners
    setupSocketListeners = () => {
        // Đảm bảo socket tồn tại trước khi thiết lập listeners
        if (this.props.socket) {
            this.props.socket.on("receive_message", (data) => {
                alert(data.message);
            });
        }
    }
    // componentDidUpdate(prevProps, prevState) {

    //     if (this.props.socket !== prevProps.socket) {
    //         this.props.socket.on("receive_message", (data) => {
    //             console.log("...", data)

    //         })
    //     }
    // }



    //take event : use socket.on

    handleChage = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = () => {
        console.log('..', this.state)
    }

    sendMessage = async () => {
        if (this.state.currentMessage) {
            let messageData = {
                room: this.props.room,
                author: this.props.userName,
                message: this.state.currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }

            await this.props.socket.emit('send_message', messageData)
        }
    }


    render() {
        let { } = this.state
        return (
            <div className=''>
                <input type='text'
                    value={this.state.currentMessage}
                    placeholder='send...'
                    name="currentMessage"
                    onChange={(e) => this.handleChage(e)}
                />
                <button onClick={() => this.sendMessage()}>ok</button>
            </div>
        )
    }
}

