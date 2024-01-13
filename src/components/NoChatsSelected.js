import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoChatsSelected.scss'


class NoChatSelect extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className='NoChatSelectContainer'>
                <div className='bg'>

                </div>
                <div className='text'> No chats selected</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoChatSelect);