/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles"
import Divider from "presentations/Divider"
import Typography from "presentations/Typography"
import React, { Fragment } from "react"
import SimpleLink from "presentations/rows/SimpleLink"
import Code from "presentations/Code"
import { createStore, combineReducers } from 'redux'
import { Bold } from "presentations/Label";
const styles = ({ typography }) => ({
  root: {},
})

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
  // if (action.type === 'SET_VISIBILITY_FILTER') {
  //   return action.filter
  // }
  // return state
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })

// 2
store.dispatch({ type: 'asfsag' })

const nestednessReducersExample = `
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a \`switch\` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const projects = (state = {
  counter: counter(),
  // other properties
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: counter(state.counter, action)
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: counter(state.counter, action)
      }
    default:
      return state
  }
}

const users = (state = {
  counter: counter(),
  // other properties
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: counter(state.counter, action)
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: counter(state.counter, action)
      }
    default:
      return state
  }
}
const reducers = combineReducers({
  projects,
  users
})
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducers)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// { projects: { counter: 1 }, users: { counter: 1 }
store.dispatch({ type: 'INCREMENT' })
// { projects: { counter: 2 }, users: { counter: 2 }
store.dispatch({ type: 'DECREMENT' })
// { projects: { counter: 1 }, users: { counter: 1 }
`

const multipleReducersExample = `
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a \`switch\` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const users = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_USERS':
      return state + 1
    case 'DECREMENT_USERS':
      return state - 1
    default:
      return state
  }
}
const reducers = combineReducers({
  counter,
  users
})
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducers)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// { counter: 1, users: 0}
store.dispatch({ type: 'INCREMENT' })
// { counter: 2, users: 0}
store.dispatch({ type: 'DECREMENT' })
// { counter: 1, users: 0}
store.dispatch({ type: 'INCREMENT_USERS' })
// { counter: 1, users: 1}
`
const reduxExample = `
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a \`switch\` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
`

class Redux extends React.Component {
  render() {
    const { classes, section } = this.props
    const example = section.children[0]
    const motivation = section.children[1]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to give an introduction to Redux, motivation behind it, examples and getting started. Inspired by <SimpleLink href="https://redux.js.org/">https://redux.js.org/</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography variant={'p'}>
          Redux is a predictable state container for JavaScript apps.
        </Typography>
        <Typography variant={'p'}>
          It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
        </Typography>
        <Typography variant={'p'}>
          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of add-ons available.
        </Typography>
        <Typography variant={'p'}>
          In order to set it up on this project, we have used the following npm libraries:
          <ol>
            <li>redux - the redux core library</li>
            <li>redux-logger - the redux logging add-on, useful for debugging store state</li>
            <li>react-redux - redux with react integration, will look into this at the next sections</li>
            <li>react-router-redux - redux with react router integration</li>
          </ol>
          Each of them can be installed using (same as with the rest of the libraries):
          <Code>
            {`npm install name --save`}
          </Code>
          We've alredy set this up, all you had to do is:
          <Code>
            {`npm install`}
          </Code>
        </Typography>
        <Typography variant='title' id={example.id}>
          {example.display}
        </Typography>

        <Typography variant={'p'}>
          The whole state of your app is stored in an object tree inside a single store. The only way to change the state tree is to emit an action, an object describing what happened. To specify how the actions transform the state tree, you write pure reducers.
          <Code>
            {reduxExample}
          </Code>
        </Typography>


        <Typography variant='p'>
          Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's state.
        </Typography>
        <Typography variant='p'>
          In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.
        </Typography>
        <Typography variant='p'>
          Next example shows using two reducers instead of one, by using the combineReducers function from react-redux:
          <Code>
            {multipleReducersExample}
          </Code>
          Now the redux store has two properties that hold the returned values of the reducers, in this case a counter and a user
        </Typography>
        <Typography variant='p'>
          Reducers can also be reused across different reducers through nestedness!:
          <Code>
            {nestednessReducersExample}
          </Code>
        </Typography>
        <Typography variant='title' id={motivation.id}>
          {motivation.display}
        </Typography>
        <Typography variant='p'>
          As the requirements for JavaScript single-page applications have become increasingly complicated, <Bold>our code must manage more state than ever before</Bold>. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.
        </Typography>
        <Typography variant='p'>
          Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features
        </Typography>
        <Typography variant='p'>
          As if this weren't bad enough, consider the new requirements becoming common in front-end product development. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: is it time to give up? The answer is no.
        </Typography>
        <Typography variant='p'>
          This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity. It's the Mentos and Coke. Both can be great in separation, but together they create a mess. React attempts to solve this problem in the view layer by removing both asynchronous and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters.
        </Typography>
        <Typography variant='p'>
          <Bold>Redux attempts to make state mutations predictable</Bold> by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Redux)
