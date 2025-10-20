import uuid from 'uuid'
import ACTION_TYPES from 'reducers/posts/PostsActionTypes'
const posts = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.RECEIVE_DATA:
            return action.data
        case ACTION_TYPES.DELETE_POST:
            return state.filter(next => next.id !== action.item.id)
        case ACTION_TYPES.UPDATE_POST:
            const item = action.item
            const found = state.find(next => next.id === item.id)
            if (!found) {
                return [...state, item]
            }
            return state.map(next => {
                if (next.id === item.id) {
                    return item
                }
                return next
            })
        default:
            return state;
    }
}

const request = (state = { isLoading: false, status: 200 }, action) => {
    switch (action.type) {
        case ACTION_TYPES.REQUEST_DATA:
            return {
                isLoading: true,
                status: 200
            }
        default:
            return state;
    }
}

const filter = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPES.FILTER:
            return action.text
        default:
            return state;
    }
}

const postsReducer = (state = {}, action) => {
    return {
        items: posts(state.items, action),
        request: request(state.request, action),
        filter: filter(state.filter, action)
    }
}

export default postsReducer