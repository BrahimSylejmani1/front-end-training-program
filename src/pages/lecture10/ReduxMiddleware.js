/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import LoggingImage from 'assets/images/lecture10/logging.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold } from "presentations/Label";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';
const styles = ({ typography }) => ({
  root: {},
})

const middlewareSyntax = `
const middlewareFunction = store => next => action => {
  // don't do anything, just observe
  return next(action)
}
`

const loggingAttemtOne = `
const action = addTodo('Use Redux')

console.log('dispatching', action)
store.dispatch(action)
console.log('next state', store.getState())
`

const wrappingFunction = `
function dispatchAndLog(store, action) {
  console.log('dispatching', action)
  store.dispatch(action)
  console.log('next state', store.getState())
}`

const monkeyDispatch = `
const next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}`

const loggingAndDebugging = `
function patchStoreToAddLogging(store) {
  const next = store.dispatch
  store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
}

function patchStoreToAddCrashReporting(store) {
  const next = store.dispatch
  store.dispatch = function dispatchAndReportErrors(action) {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      // send it to your backend server to track it
      throw err
    }
  }
}
`

const patchStores = `
patchStoreToAddLogging(store)
patchStoreToAddCrashReporting(store)
`

const finalApproachMiddleware = `
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    // send it to your backend server to track it
    throw err
  }
}`

const applyingFinalMiddleware = `
import { createStore, combineReducers, applyMiddleware } from 'redux'

const todoApp = combineReducers(reducers)
const store = createStore(
  todoApp,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger, crashReporter)
)`

const dispatchEventExample = `
// Will flow through both logger and crashReporter middleware!
store.dispatch(addTodo('Use Redux'))
`

const pluggingIn = `
/**
 * Logs all actions and states after they are dispatched.
 */
const internalLogger = store => next => action => {
  console.group(action.type)
  console.log('prev state', store.getState())
  console.info('action', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception at internal crash reporter!', err)
    throw err
  }
}

const middleware = [
  routerMiddleware(history),
  internalLogger,
  crashReporter,
].filter(Boolean)

const store = createStore(reducers, applyMiddleware(...middleware))`

const thunkInternal = `
/**
 * Lets you dispatch a function instead of an action.
 * This function will receive \`dispatch\` and \`getState\` as arguments.
 *
 * Useful for early exits (conditions over \`getState()\`), as well
 * as for async control flow (it can \`dispatch()\` something else).
 *
 * \`dispatch\` will return the return value of the dispatched function.
 */
const internalThunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
`

const completeStore = `
const middleware = [
  routerMiddleware(history),
  internalThunk,
  internalLogger,
  crashReporter,
].filter(Boolean)

const store = createStore(reducers, applyMiddleware(...middleware))`

class ReduxMiddleware extends React.Component {

  componentDidMount () {
    this.props.dummyDispatch()
  }

  render() {
    const { classes, section } = this.props
    const understandingMiddleWare = section.children[0]
    const attemptOne = section.children[1]
    const attemptTwo = section.children[2]
    const attemptThree = section.children[3]
    const finalApproach = section.children[4]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to explain on how we can create our own middleware for Redux! Taken from <SimpleLink href="https://redux.js.org/advanced/middleware">https://redux.js.org/advanced/middleware</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          In simple words: Middleware is some code you can put between the framework receiving a request, and the framework generating a response. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project. They are applied in a certain order, intercepting the calls and realising some code logic in-between.
        </Typography>

        <Typography variant='p'>
          Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
        </Typography>

        <Typography variant='title' id={understandingMiddleWare.id}>
          {understandingMiddleWare.display}
        </Typography>
        <Typography variant='p'>
          While middleware can be used for a variety of things, including asynchronous API calls, it's really important that you understand where it comes from. We'll guide you through the thought process leading to middleware, by using logging and crash reporting as examples.
        </Typography>

        <Typography variant='p'>
          <Bold>Logging:</Bold> One of the benefits of Redux is that it makes state changes predictable and transparent. Every time an action is dispatched, the new state is computed and saved. The state cannot change by itself, it can only change as a consequence of a specific action.
        </Typography>
        <img src={LoggingImage} />
        <Typography variant='p'>
          How do we approach this with Redux?
        </Typography>
        <Typography variant='title' id={attemptOne.id}>
          {attemptOne.display}
        </Typography>
        <Typography variant='p'>
          The most naive solution is just to log the action and the next state yourself every time you call store.dispatch(action). It's not really a solution, but just a first step towards understanding the problem. Say, you call this when creating a todo:
          <Code>
            {`store.dispatch(addTodo('Use Redux'))`}
          </Code>
        </Typography>
        <Typography variant='p'>
          To log the action and state, you can change it to something like this:
          <Code>
            {loggingAttemtOne}
          </Code>
          This produces the right effect, but you have to code this every time before and after dispatching an action! We can do better
        </Typography>
        <Typography variant='title' id={attemptTwo.id}>
          {attemptTwo.display}
        </Typography>
      
        <Typography variant='p'>
          You can extract logging into a function:
          <Code>
            {wrappingFunction}
          </Code>
          You can then use it everywhere instead of store.dispatch():
          <Code>
            {`dispatchAndLog(store, addTodo('Use Redux'))`}
          </Code>
          We could end this here, but it's not very convenient to import a special function every time.
        </Typography>
        <Typography variant='title' id={attemptThree.id}>
          {attemptThree.display}
        </Typography>
        <Typography variant='p'>
          What if we just replace the dispatch function on the store instance? The Redux store is just a plain object with a few methods, and we're writing JavaScript, so we can just monkeypatch the dispatch implementation:
          <Code>
            {monkeyDispatch}
          </Code>
          This is already closer to what we want! No matter where we dispatch an action, it is guaranteed to be logged. Monkeypatching never feels right, but we can live with this for now.
        </Typography>

        <Typography variant='p'>
          <Bold>Problem: Crash Reporting:</Bold> What if we want to apply more than one such transformation to dispatch?
        </Typography>
        <Typography variant='p'>
          A different useful transformation that comes to my mind is reporting JavaScript errors in production. The global window.onerror event is not reliable because it doesn't provide stack information in some older browsers, which is crucial to understand why an error is happening.
        </Typography>
        <Typography variant='p'>
          Wouldn't it be useful if, any time an error is thrown as a result of dispatching an action, we would send it to a crash reporting service with the stack trace, the action that caused the error, and the current state? This way it's much easier to reproduce the error in development.
        </Typography>
        <Typography variant='p'>
          However, it is important that we keep logging and crash reporting separate. Ideally we want them to be different modules, potentially in different packages. Otherwise we can't have an ecosystem of such utilities. (Hint: we're slowly getting to what middleware is!)
        </Typography>
        <Typography variant='p'>
          If logging and crash reporting are separate utilities, they might look like this:
          <Code>
            {loggingAndDebugging}
          </Code>
          If these functions are published as separate modules, we can later use them to patch our store:
          <Code>
            {patchStores}
          </Code>
          Still, this isn't nice.
        </Typography>
        <Typography variant='title' id={finalApproach.id}>
          {finalApproach.display}
        </Typography>
        <Typography variant='p'>
          The whole approach is described at <SimpleLink href="https://redux.js.org/advanced/middleware">https://redux.js.org/advanced/middleware</SimpleLink> on how middleware works. For this lesson we are going to focus on how to use it:
          <Code>
            {middlewareSyntax}
          </Code>
          From the syntax we can construct our logger and crash reporter like this:
          <Code>
            {finalApproachMiddleware}
          </Code>
          Here's how to apply it to a Redux store:
          <Code>
            {applyingFinalMiddleware}
          </Code>
          That's it! Now any actions dispatched to the store instance will flow through logger and crashReporter:
          <Code>
            {dispatchEventExample}
          </Code>
        </Typography>

        <Typography variant='p'>
          Plugging this all in into our own store (Located at /src/Store.js):
          <Code>
            {pluggingIn}
          </Code>
          There we have our own logger and crash reporter! Furthermore our thunk middleware will look like this:
          <Code>
            {thunkInternal}
          </Code>
          Resulting into this complete store:
          <Code>
            {completeStore}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

const dummyDispatch = () => ({ type: 'DUMMY_DISPATCH'})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  dummyDispatch: () => dispatch(dummyDispatch())
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ReduxMiddleware))
