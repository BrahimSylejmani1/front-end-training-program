/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold } from "presentations/Label";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})


// const Component = (props) => {
//   console.log('props', props)
//   return <div>
//     I can dispatch actions to the store, and read store values through props provided by the connect HOC
//   </div>
// }

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }
// // const mapDispatchToProps = (dispatch) => ({
// //   fetchUsers: () => dispatch(fetchUsers())
// // })

// const connectHoc = connect(mapStateToProps)
// const ReduxAwareComponent = connectHoc(Component)

// user: {
//   emri: 'Agon',
//   ...
// }

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_USER':
//       return [...state, action.item]
//     case 'REMOVE_USER':
//       return state.filter((next) => next.id !== action.id)
//     case 'REMOVE_USER':
//       return state.filter((next) => next.id !== action.id)
//     default:
//       return state
//   }
// }

// const projects = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_PROJECT':
//       return [...state, action.item]
//     case 'REMOVE_PROJECT':
//       return state.filter((next) => next.id !== action.id)
//     case 'CHANGE_PROJECT':
//       return state.map((next) => {
//         if (next.id === action.item.id) {
//           return action.item
//         }
//         return next
//       })
//     default:
//       return state
//   }
// }

const appStore = `
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}`
const appActions = `
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
`

const reducersExample = `
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
`

const combinedReducers = `
const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
`

const callingActions = `
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(todoApp)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'ADD_TODO', text: 'Gots to buy me some food!' })
// {"todos":[{"text":"Gots to buy me some food!","completed":false}],"visibilityFilter":"SHOW_ALL"}
store.dispatch({ type: 'ADD_TODO', text: 'Gots to buy me some flowers!' })
// {"todos":[{"text":"Gots to buy me some food!","completed":false},{"text":"Gots to buy me some flowers!","completed":false}],"visibilityFilter":"SHOW_ALL"}
store.dispatch({ type: 'TOGGLE_TODO', index: 1 })
// {"todos":[{"text":"Gots to buy me some food!","completed":false},{"text":"Gots to buy me some flowers!","completed":true}],"visibilityFilter":"SHOW_ALL"}
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'COMPLETED'})
// {"todos":[{"text":"Gots to buy me some food!","completed":false},{"text":"Gots to buy me some flowers!","completed":false}],"visibilityFilter":"COMPLETED"}
`

const storeStateExample = `
console.log(store.getState())

{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
`
const callingActionsSimplified = `
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
`

const reusableReducers = `
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, completed: true }
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)
`


class CoreConcepts extends React.Component {
  render() {
    const { classes, section } = this.props
    const singleSourceOfTruth = section.children[0]
    const readOnlyState = section.children[1]
    const changesThroughPureFunctions = section.children[2]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>

        <Typography variant={'p'}>
          Imagine your app’s state is described as a plain object. For example, the state of a todo app might look like this:
          <Code>
            {appStore}
          </Code>
          This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.
        </Typography>
        <Typography variant={'p'}>
          To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice how we don’t introduce any magic?) that describes what happened. Here are a few example actions:
          <Code>
            {appActions}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function called a reducer. Again, nothing magical about it—it’s just a function that takes state and action as arguments, and returns the next state of the app. It would be hard to write such a function for a big app, so we write smaller functions managing parts of the state:
          <Code>
            {reducersExample}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:
          <Code>
            {combinedReducers}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          Then we use throw actions at this reducer like this (same as at the previous example):
          <Code>
            {callingActions}
          </Code>
        </Typography>
        <Typography variant='p'>
          This is basically the whole idea of Redux. Note that we haven’t used any Redux APIs. It comes with a few utilities to facilitate this pattern, but the main idea is that you describe how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs, or any magic.
        </Typography>
        <Typography variant='p'>
          Redux can be described in three fundamental principles:
        </Typography>
        
        <Typography variant='title' id={singleSourceOfTruth.id}>
          {singleSourceOfTruth.display}
        </Typography>
        <Typography variant='p'>
          <Bold>The state of your whole application is stored in an object tree within a single store.</Bold>
        </Typography>
        <Typography variant='p'>
          This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.
          <Code>
            {storeStateExample}
          </Code>
        </Typography>
        <Typography variant='title' id={readOnlyState.id}>
          {readOnlyState.display}
        </Typography>
        <Typography variant='p'>
          <Bold>The only way to change the state is to emit an action, an object describing what happened.</Bold>
        </Typography>

        <Typography variant='p'>
          This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.
          <Code>
            {callingActionsSimplified}
          </Code>
        </Typography>
        <Typography variant='title' id={changesThroughPureFunctions.id}>
          {changesThroughPureFunctions.display}
        </Typography>

        <Typography variant='p'>
          <Bold>To specify how the state tree is transformed by actions, you write pure reducers.</Bold>
        </Typography>

        <Typography variant='p'>
          Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.
          <Code>
            {reusableReducers}
          </Code>
        </Typography>
        <Typography variant='p'>
          That's it! Now you know what Redux is all about.
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CoreConcepts)
