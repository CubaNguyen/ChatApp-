import React, { Component } from 'react';
import { connect } from 'react-redux';



class pathArchive extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div> archive</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(pathArchive);