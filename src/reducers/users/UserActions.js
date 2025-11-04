import ACTIONS from 'reducers/users/UserActionTypes'
import { CALL_API} from 'middleware/Api'

/**
 * Displays a message
 * @param message - the default message
 * @returns {object}
 */

const BASE = '/mock'

export function fetchUsers() {
  return {
    [CALL_API]: {
      endpoint: '/users.json',
      method: 'GET',
      types: [
        ACTIONS.USERS_REQUEST,
        ACTIONS.USERS_SUCCESS,
        ACTIONS.USERS_FAILURE
      ]
    }
  }
}

export function createUser(user) {
  return {
    [CALL_API]: {
      endpoint: `${BASE}/users.json`,
      method: 'POST',
      body: user,
      types: [ACTIONS.USERS_CREATE_REQUEST, ACTIONS.USERS_CREATE_SUCCESS, ACTIONS.USERS_CREATE_FAILURE]
    }
  }
}

export function updateUser(id, user) {
  return {
    [CALL_API]: {
      endpoint: `${BASE}/users/${id}.json`,
      method: 'PUT',
      body: user,
      types: [ACTIONS.USERS_UPDATE_REQUEST, ACTIONS.USERS_UPDATE_SUCCESS, ACTIONS.USERS_UPDATE_FAILURE]
    }
  }
}

export function deleteUser(id) {
  return {
    [CALL_API]: {
      endpoint: `${BASE}/users/${id}.json`,
      method: 'DELETE',
      types: [ACTIONS.USERS_DELETE_REQUEST, ACTIONS.USERS_DELETE_SUCCESS, ACTIONS.USERS_DELETE_FAILURE],
      meta: { id }
    }
  }
}

export function setUsersSearch(text) {
  return { type: ACTIONS.USERS_SET_SEARCH, payload: text }
}