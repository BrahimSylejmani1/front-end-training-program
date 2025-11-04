import T from 'reducers/transactions/TransactionsActionTypes'

const initial = {
  isLoading: false,
  response: { code: 200, message: 'Last request succeded!' },
  search: '',
  items: []
}

export default function transactions(state = initial, action) {
  switch (action.type) {
    case T.TX_REQUEST:
      return { ...state, isLoading: true }
    case T.TX_SUCCESS:
      return { ...state, isLoading: false, items: action.response || action.payload || [], response: { code: 200, message: 'Fetched transactions' } }
    case T.TX_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: {
          code: (action.error && action.error.status) || 0,
          message: (action.error && action.error.message) || 'Request failed'
        }
      }
    default:
      return state
  }
}
