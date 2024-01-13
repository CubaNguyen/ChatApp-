import React, { Component } from 'react';
import { connect } from 'react-redux';



class pathRequest extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div> requyesst</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(pathRequest);