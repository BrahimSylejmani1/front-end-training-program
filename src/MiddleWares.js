import api from 'middleware/Api';
import reporter from 'middleware/CrashReporter';
import logger from 'middleware/Logger';
import thunk from 'middleware/Thunk';
import { routerMiddleware } from "react-router-redux";
/**
 * The redux store which combines all the reducers
 */
export default [
  routerMiddleware(history),
  api,
  thunk,
  logger,
  reporter,
].filter(Boolean)
