/**
 * Returns the unique values inside the array given the unique check evaluator
 * @param {Array} array 
 * @param {function} evaluator - defaults to if the elements exactly match in type and value
 * @returns array - unique values
 */
export const uniqueValues = (array, evaluator = (a, b) => a === b) => {
    return array.reduce((accumulator, next) => {
        if (!accumulator.find(which => evaluator(which, next))) {
            return [...accumulator, next]
        }
        return accumulator
    }, [])
}