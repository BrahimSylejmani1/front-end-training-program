/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import Code from "presentations/Code";
import { Bold } from "presentations/Label";
const styles = ({ typography }) => ({
  root: {},
})

// import React, { useState } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(1)
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      <Typography variant='p'>You clicked {count} times</Typography>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}

const useStateHookExample = `
import React, { useState } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Typography variant='p'>You clicked {count} times</Typography>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}`

const multipleUseHook = `
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}`

const effectHookExample = `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`

const effectCleanUp = `
import React, { useState, useEffect } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(1)
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      <Typography variant='p'>You clicked {count} times</Typography>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}`

const multipleEffectUsage = `
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}`

const friendStatusHook = `
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}`

const friendStatus = `
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}`
const friendListItem = `
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}`

const useContextHook = `
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}`
const useReducerHook = `
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
}`

class ReactHooks extends React.Component {

  render() {
    const { classes, section } = this.props
    const useStateHook = section.children[0]
    const effectHook = section.children[1]
    const hookRules = section.children[2]
    const ownHooks = section.children[3]
    const otherHooks = section.children[4]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to introduce the concept of React Hooks! Inspired from <SimpleLink href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='title' id={useStateHook.id}>
          {useStateHook.display}
        </Typography>
        <Typography variant='p'>
          <Code>
            {useStateHookExample}
          </Code>
          Here, useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
        </Typography>
        <Typography variant='p'>
          The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.
        </Typography>

        <Typography variant='p'>
          <Bold>Declaring multiple state variables</Bold>
        </Typography>
        <Typography variant='p'>
          You can use the State Hook more than once in a single component:
          <Code>
            {multipleUseHook}
          </Code>
          The array destructuring syntax lets us give different names to the state variables we declared by calling useState. These names aren’t a part of the useState API. Instead, React assumes that if you call useState many times, you do it in the same order during every render.
        </Typography>
        <Typography variant='p'>
          <Bold>But what is a Hook?</Bold>
        </Typography>
        <Typography variant='p'>
          Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.
        </Typography>
        <Typography variant='p'>
          React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We’ll look at the built-in Hooks first.
        </Typography>
        <Typography variant='title' id={effectHook.id}>
          {effectHook.display}
        </Typography>
        <Typography variant='p'>
          We have performed data fetching and manually changing the DOM from React components before. These operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
        </Typography>
        <Typography variant='p'>
          The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. (We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)
        </Typography>
        <Typography variant='p'>
          For example, this component sets the document title after React updates the DOM:
          <Code>
            {effectHookExample}
          </Code>
          When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.
        </Typography>

        <Typography variant='p'>
          Effects may also optionally specify how to “clean up” after them by returning a function. For example, this component uses an effect to update the count with a timer, and cleans up by clearing the timer:
          <Code>
            {effectCleanUp}
          </Code>
          In this example, React would unsubscribe from our ChatAPI when the component unmounts, as well as before re-running the effect due to a subsequent render. (If you want, there’s a way to tell React to skip re-subscribing if the props.friend.id we passed to ChatAPI didn’t change.)
        </Typography>
        <Typography variant='p'>
          Just like with useState, you can use more than a single effect in a component:
          <Code>
            {multipleEffectUsage}
          </Code>
          Hooks let you organize side effects in a component by what pieces are related (such as adding and removing a subscription), rather than forcing a split based on lifecycle methods.
        </Typography>
        <Typography variant='title' id={hookRules.id}>
          {hookRules.display}
        </Typography>
        <Typography variant='p'>
          Hooks are JavaScript functions, but they impose two additional rules:
          <ol>
            <li>Only call Hooks at the <Bold>top level</Bold>. Don’t call Hooks inside loops, conditions, or nested functions.</li>
            <li>Only call Hooks from <Bold>React function components</Bold>. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)</li>
          </ol>
          React provides a linter plugin to enforce these rules automatically. These rules might seem limiting or confusing at first, but they are essential to making Hooks work well.
        </Typography>
        <Typography variant='title' id={ownHooks.id}>
          {ownHooks.display}
        </Typography>
        <Typography variant='p'>
          Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.
        </Typography>
        <Typography variant='p'>
          Earlier on this page, we introduced a FriendStatusWithCounter component that calls the useState and useEffect Hooks to subscribe to a friend’s online status. Let’s say we also want to reuse this subscription logic in another component.
        </Typography>
        <Typography variant='p'>
          First, we’ll extract this logic into a custom Hook called useFriendStatus:
          <Code>
            {friendStatusHook}
          </Code>
          It takes friendID as an argument, and returns whether our friend is online.
        </Typography>
        <Typography variant='p'>
          Now we can use this from both components:
          <Code>
            {friendStatus}
          </Code>
          and
          <Code>
            {friendListItem}
          </Code>
          The state of these components is completely independent. Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.
        </Typography>
        <Typography variant='p'>
          Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code using Hooks.
        </Typography>
        <Typography variant='p'>
          You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. We are excited to see what custom Hooks the React community will come up with.
        </Typography>
        <Typography variant='title' id={otherHooks.id}>
          {otherHooks.display}
        </Typography>
        <Typography variant='p'>
          There are a few less commonly used built-in Hooks that you might find useful. For example, useContext lets you subscribe to React context without introducing nesting:
          <Code>
            {useContextHook}
          </Code>
          And useReducer lets you manage local state of complex components with a reducer:
          <Code>
            {useReducerHook}
          </Code>
        </Typography>

        <Typography variant='p'>
          You can learn more about all the built-in Hooks on a dedicated page: <SimpleLink href="https://reactjs.org/docs/hooks-reference.html">Hooks API Reference</SimpleLink>
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ReactHooks))
