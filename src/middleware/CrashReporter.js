/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export default store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception at internal crash reporter!', err)
      throw err
    }
  }