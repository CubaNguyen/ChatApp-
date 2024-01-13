import React, { Component } from 'react';
import { connect } from 'react-redux';
import FrameMiddle from '../../containers/FrameMiddle';
import FrameRight from '../../containers/FrameRight';
import './pathT.scss'


class pathT extends Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            isClick: ''
        };
    }

    componentDidMount() {

    }

    handleExtendFrameMiddle = (click) => {

        this.setState({
            isClick: click
        })

    }


    render() {
        let { isClick } = this.state

        return (
            <div className='containerPathT'>
                <div className={isClick === false ? 'frameMiddle' : 'frameMiddle Active'}>
                    <FrameMiddle handleExtend={this.handleExtendFrameMiddle} />

                </div>



                {isClick === false ?
                    <div className='frameRightPathT'>
                        <FrameRight />
                    </div>
                    :
                    <>
                    </>
                }

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

export default connect(mapStateToProps, mapDispatchToProps)(pathT);