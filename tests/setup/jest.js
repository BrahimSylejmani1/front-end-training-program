/**
 * Jest Startup and Setup Script!
 */
console.log = jest.fn()
console.group = jest.fn()
console.info = jest.fn()
console.error = jest.fn()
jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => jest.fn());