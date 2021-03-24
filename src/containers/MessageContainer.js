import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './../component/Message.js';

class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return ( <Message message = { message }/>
        );
    }
}

Message.propTypes = {
    message: PropTypes.string.isRequired
}
const stateMapToProps = (state) => {
    return {
        message: state.message
    }
}

const dispatchMapToProps = (dispatch, props) => {
    return {
        // message:chan
    }
}


export default connect(stateMapToProps, dispatchMapToProps)(MessageContainer);