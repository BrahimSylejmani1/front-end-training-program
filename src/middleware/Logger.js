/**
 * Logs all actions and states after they are dispatched.
 */
export default store => next => action => {
    console.group(action.type)
    console.log('prev state', store.getState())
    console.info('action', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }