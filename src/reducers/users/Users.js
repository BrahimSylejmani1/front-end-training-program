import ACTIONS from 'reducers/users/UserActionTypes'

/**
* the users state reducer function
* @returns users - the users array
*/
const items = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.RECEIVE_USERS:
            return action.items
        default:
            return state
    }
}

export default items