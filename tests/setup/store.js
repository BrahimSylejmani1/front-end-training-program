/**
 * Enzyme Startup and Setup Script!
 */
import configureStore from 'redux-mock-store'
import middlewares from 'MiddleWares'
global.mockStore =  configureStore(middlewares)