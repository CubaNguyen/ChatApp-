import React, { Component } from 'react';
import { connect } from 'react-redux';



class App extends Component {
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
            <div> HI</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);