import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../store/actions'
import { handleLoginApi } from '../services/userService';
import { useHistory } from 'react-router-dom';
import { luuTokenVaoLocalStorage } from '../utils/Token';


class Login extends Component {
    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            errMess: ''
        };

    }

    componentDidMount() {

    }

    handleSubmit = async () => {


        this.setState({
            errMess: ''
        })
        try {
            let res = await handleLoginApi(this.state.username, this.state.password)
            // console.log('data  ...', res.data)
            let token = res && res.data && res.data.data && res.data.data.token ? res.data.data.token : ''
            // console.log('...', JSON.stringify(token))
            if (res && res.data && res.data.success === true) {
                this.props.logInSuccess(token)
                luuTokenVaoLocalStorage(JSON.stringify(token))
                this.props.history.push('/');

            }

        } catch (e) {
            this.setState({
                errMess: e.response.data.message
            })

        }
    }


    handleInput = (event, input) => {
        this.setState({

            ...this.state.credentials,
            [input]: event.target.value,

        })
    }

    handleShowPass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        let { username, password, showPassword } = this.state
        return (
            <div className='loginContainer'>
                <div className='logoLogin'>

                </div>
                <div className='text'>
                    Connect with your favourite people
                </div>
                <div className='form'>



                    <input type="text" className='user'
                        value={username}
                        onChange={(event) => this.handleInput(event, 'username')}
                        placeholder='Email address or phone number' />

                    <div className='passwordContainer'>
                        <input type={showPassword === true ? 'text' : "password"} className='password'
                            value={password}
                            onChange={(event) => this.handleInput(event, 'password')}
                            placeholder='Passwork' />
                        <FontAwesomeIcon className='icon' icon={showPassword === true ? faEye : faEyeSlash}
                            onClick={() => this.handleShowPass()}
                        />
                    </div>


                </div>

                <div style={{ color: 'red', paddingBottom: '5px' }}> {this.state.errMess}</div>

                <button className='btnLogin'
                    onClick={() => this.handleSubmit()}
                    type="submit">Continue</button>
                <div className='footer'>


                </div>
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
        logInSuccess: (data) => dispatch(actions.logInSuccess(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);