import * as messages from './../constants/Message.js';
import * as types from './../constants/ActionType.js';

var initialState = messages.MSG_WELCOME;


const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            state = action.message;
            localStorage.setItem('message',JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default message;