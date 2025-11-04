import ACTIONS from 'reducers/users/UserActionTypes'

const initial = {
  isLoading: false,
  response: { code: 200, message: 'Last request succeded!' },
  search: '',
  items: []
}

export default function users(state = initial, action) {
  switch (action.type) {
    case ACTIONS.USERS_SET_SEARCH:
      return { ...state, search: action.payload }

    case ACTIONS.USERS_REQUEST:
    case ACTIONS.USERS_CREATE_REQUEST:
    case ACTIONS.USERS_UPDATE_REQUEST:
    case ACTIONS.USERS_DELETE_REQUEST:
      return { ...state, isLoading: true }

    case ACTIONS.USERS_SUCCESS:
      return { ...state, isLoading: false, items: action.response || action.payload || [], response: { code: 200, message: 'Fetched users' } }

    case ACTIONS.USERS_CREATE_SUCCESS:
      return { ...state, isLoading: false, items: state.items.concat(action.response || action.payload), response: { code: 200, message: 'User created' } }

    case ACTIONS.USERS_UPDATE_SUCCESS: {
      const u = action.response || action.payload
      return { ...state, isLoading: false, items: state.items.map(x => String(x.id) === String(u.id) ? u : x), response: { code: 200, message: 'User updated' } }
    }

    case ACTIONS.USERS_DELETE_SUCCESS: {
      const deletedId = (action.meta && action.meta.id) ||
        (action.response && action.response.id) ||
        (action.payload && action.payload.id);
      return { ...state, isLoading: false, items: state.items.filter(x => String(x.id) !== String(deletedId)), response: { code: 200, message: 'User deleted' } }
    }

    case ACTIONS.USERS_FAILURE:
    case ACTIONS.USERS_CREATE_FAILURE:
    case ACTIONS.USERS_UPDATE_FAILURE:
    case ACTIONS.USERS_DELETE_FAILURE:
      return { ...state, isLoading: false, response: {
          code: (action.error && action.error.status) || 0,
          message: (action.error && action.error.message) || 'Request failed'
        }
      }

    default:
      return state
  }
}
