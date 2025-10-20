import ACTION_TYPES from 'reducers/posts/PostsActionTypes'
import { API_URL } from 'Constants';
import 'whatwg-fetch'

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
        return fetch(`${API_URL}/posts`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(post),
        }).then((response) => {
            console.log('request ended with result', response)
            // check the HTTP status code if it was sucessfull
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }
            throw {
                status: response.status,
                message: response.statusText
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
        return fetch(`${API_URL}/posts/${post.id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(post),
        }).then((response) => {
            console.log('request ended with result', response)
            // check the HTTP status code if it was sucessfull
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }
            throw {
                status: response.status,
                message: response.statusText
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
        return fetch(`${API_URL}/posts`)
            .then((response) => {
                // check the HTTP status code if it was sucessfull
                if (response.status === 200) {
                    return response.json()
                }
                throw {
                    status: response.status,
                    message: response.statusText
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