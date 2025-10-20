import ACTIONS from 'reducers/users/UserActionTypes'
import uuid from 'uuid'

/**
 * Displays a message
 * @param message - the default message
 * @returns {object}
 */
export function fetchUsers () {
    return {
      type: ACTIONS.RECEIVE_USERS,
      items: [
        {
          id: uuid.v1(),
          name: "Agon",
          lastName: "Lohaj",
          username: "agon_lohaj",
          type: "Admin",
          age: 28,
          gender: "M"
        },
        {
          id: uuid.v1(),
          name: "Trim",
          lastName: "Lohaj",
          username: "trim_lohaj",
          type: "Normal",
          age: 36,
          gender: "M"
        },
        {
          id: uuid.v1(),
          name: "Festina",
          lastName: "Ymeri",
          username: "festina_ymeri",
          type: "Normal",
          age: 24,
          gender: "F"
        }
      ]
    }
  }