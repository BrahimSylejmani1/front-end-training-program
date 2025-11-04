
import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { createBrowserHistory } from "history";
import middlewares from "MiddleWares";

import users from "reducers/users/UserReducer";
import transactions from "reducers/transactions/TransactionsReducer";
import todo from "reducers/todo/Todo";
import posts from "reducers/posts/Posts";

export const history = createBrowserHistory({
  basename: BASE_URL
});

const reducers = combineReducers({
  routing: routerReducer,
  users,
  transactions,
  todo,
  posts
});

const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(history), ...middlewares)
);

export default store;
