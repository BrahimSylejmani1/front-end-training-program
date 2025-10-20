import { CALL_API } from 'middleware/Api';
import ACTION_TYPES from 'reducers/posts/PostsActionTypes';

export const requestData = () => {
    return {
        type: ACTION_TYPES.REQUEST_DATA
    }
}

export const receiveData = (data) => {
    return {
        type: ACTION_TYPES.RECEIVE_DATA,
        data
    }
}
export const updatePost = (item) => {
    return {
        type: ACTION_TYPES.UPDATE_POST,
        item
    }
}
export const removePost = (item) => {
    return {
        type: ACTION_TYPES.DELETE_POST,
        item
    }
}

export const displayMessage = (response) => {
    return {
        type: ACTION_TYPES.DISPLAY_MESSAGE,
        response
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        dispatch(requestData())
        return dispatch({
            [CALL_API]: {
                endpoint: `/posts`,
                options: {
                    method: 'POST',
                    body: JSON.stringify(post),
                }
            }
        }).then((item) => {
            dispatch(updatePost(item))
            return item
        }, (error) => {
            dispatch(displayMessage(error))
            return error
        })
    }
}

export const deletePost = (post) => {
    return (dispatch) => {
        dispatch(requestData())
        return dispatch({
            [CALL_API]: {
                endpoint: `/posts/${post.id}`,
                options: {
                    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                    body: JSON.stringify(post),
                }
            }
        }).then((item) => {
            dispatch(removePost(item))
            return item
        }, (error) => {
            dispatch(displayMessage(error))
            return error
        })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {

        dispatch (requestData())
        return dispatch({
                [CALL_API]: {
                    endpoint: '/posts'
                }
            }).then((items) => {
                dispatch(receiveData(items))
                return items
            }, (error) => {
                dispatch(displayMessage(error))
                return error
            })
    }
}