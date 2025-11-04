import T from 'reducers/transactions/TransactionsActionTypes'
import { CALL_API } from 'middleware/Api'

const BASE = '/mock'

export function fetchTransactionsByUser(userId) {
  return {
    [CALL_API]: {
      endpoint: `${BASE}/transactions-user-${userId}.json`,
      method: 'GET',
      types: [T.TX_REQUEST, T.TX_SUCCESS, T.TX_FAILURE],
      mapResponse: (list) => list.map(tx => ({ ...tx, total: tx.price * tx.quantity }))
    }
  }
}
