import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { history } from '../redux'
import FrameLeftIcon from './FrameLeftIcon';
import FrameLeftChat from './FrameLeftChat';


import { path } from '../utils/constant'
import './App.scss'
import pathT from '../components/Nav/pathT';
import pathActive from '../components/Nav/pathActive';
import NoChatsSelected from '../components/NoChatsSelected';
import pathRequests from '../components/Nav/pathRequests';
import pathArchived from '../components/Nav/pathArchived';
import Login from '../components/Login';


class App extends Component {


    componentDidMount() {

    }


    render() {
        // console.log(this.props.isLoggedIn)
        return (
            <>
                {this.props.isLoggedIn === true ?

                    < BrowserRouter >
                        <Switch>
                            <Route path="/login" exact component={(Login)} />
                        </Switch>
                    </ BrowserRouter >

                    :
                    <BrowserRouter>
                        <div className='mainContainer' >
                            <div className='frameLeftIcon'>
                                <FrameLeftIcon />
                            </div>
                            <div className='frameLeftChat'>
                                <Switch>
                                    <Route path="/" exact component={(FrameLeftChat)} />

                                    <Route path="/active" component={(pathActive)} />

                                    <Route path="/requests" component={(pathRequests)} />

                                    <Route path="/archived" component={(pathArchived)} />
                                </Switch>
                            </div>
                            <div className='frameMiddleAndRight'>

                                <Switch>
                                    <Route path="/" exact component={(pathT)} />

                                    <Route path="/active" component={(NoChatsSelected)} />

                                    <Route path="/requests" component={(NoChatsSelected)} />

                                    <Route path="/archived" component={(NoChatsSelected)} />

                                </Switch>
                            </div>


                        </div>
                    </BrowserRouter>

                }
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);