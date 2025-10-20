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
import ReactRedux from 'assets/images/lecture8/react_redux.png';
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

const passingDownProps = `
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}`

const contextReact = `
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}`

const contextTypeExample = `
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context
    /* ... */
  }
  render() {
    let value = this.context
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext`

const experimentalStaticClassField = `
class MyClass extends React.Component {
  static contextType = MyContext
  render() {
    let value = this.context
    /* render something based on the value */
  }
}`

const consumerExample = `
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>`

const contextExample = `
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(
  themes.dark // default value
);

class ThemeLabel extends React.Component {
  render () {
    return (
      <Typography variant='p'>  
        Current selected theme: {JSON.stringify(this.context)}
        <div style={{width: 30, marginLeft: 8, height: 30, background: this.context.background }} />
      </Typography>
    )
  }
}
ThemeLabel.contextType = ThemeContext

class ThemeConsumerLabel extends React.Component {
  render () {
    console.log('this.props', this.props)
    return (
      <Typography variant='p'>  
        Current selected theme: {JSON.stringify(this.props.theme)}
        <div style={{width: 30, marginLeft: 8, height: 30, background: this.props.theme.background }} />
      </Typography>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render () {
    return (
      <Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeLabel />
          <Button onClick={this.toggleTheme}>
            Change Theme 
          </Button>
        </ThemeContext.Provider>

        <ThemeContext.Consumer>
          {theme => <ThemeConsumerLabel theme={theme}/>}
        </ThemeContext.Consumer>
      </Fragment>
    )
  }
}`

const contextNestedExample = `
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {} // default value
});

class ThemeLabel extends React.Component {
  render () {
    return (
      <Typography variant='p'>  
        Current selected theme: {JSON.stringify(this.context.theme)}
        <div style={{width: 30, marginLeft: 8, height: 30, background: this.context.theme.background }} />
      </Typography>
    )
  }
}
ThemeLabel.contextType = ThemeContext

class ThemeButtonConsumer extends React.Component {
  render () {
    console.log('this.props', this.context)
    return (
      <Button onClick={this.context.toggleTheme}>
        Change Theme 
      </Button>
    )
  }
}
ThemeButtonConsumer.contextType = ThemeContext
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render () {
    return (
      <Fragment>
        <ThemeContext.Provider value={this.state}>
          <ThemeLabel />
          <ThemeButtonConsumer/>
        </ThemeContext.Provider>
      </Fragment>
    )
  }
}`

const consumingMultipleContext = `
// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});


const Layout = (props) => {
  return (
    <div>
      <Typography variant='p' />
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
const Content = (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <Typography variant='p'>Theme: {theme} and user: {user.name}</Typography>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      signedInUser: {
        name: 'Guest'
      }
    };
  }

  render() {
    const {signedInUser, theme} = this.state;

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}`

const caveatExample = `
class App extends React.Component {
  render() {
    return (
      <Provider value={{something: 'something'}}>
        <Toolbar />
      </Provider>
    );
  }
}`

const caveatFixExample = `
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}`

class ReactContext extends React.Component {

  render() {
    const { classes, section } = this.props
    const createContext = section.children[0]
    const contextProvider = section.children[1]
    const contextConsumer = section.children[2]
    const contextTypes = section.children[3]
    const example = section.children[4]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to introduce the concept of Context in React! Inspired from <SimpleLink href="https://reactjs.org/docs/context.html">https://reactjs.org/docs/context.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          In the previous lectures we talked about Redux, and how we can manage the model of the app there, and what we are going to introduce here is another way on how you can achieve to put your model in a top level tree and pass it down to a child without going through the entire tree!
        </Typography>
        <img src={ReactRedux} />
        <Typography variant='p'>
          In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
        </Typography>

        <Typography variant='p'>
          Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:
          <Code>
            {passingDownProps}
          </Code>
          Using context, we can avoid passing props through intermediate elements:
          <Code>
            {contextReact}
          </Code>
          Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
        </Typography>

        <Typography variant='p'>
          <Bold>If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</Bold>
        </Typography>

        <Typography variant='title' id={createContext.id}>
          {createContext.display}
        </Typography>
        <Typography variant='p'>
          <Code>
            {`const MyContext = React.createContext(defaultValue)`}
          </Code>
          Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
        </Typography>
        <Typography variant='p'>
          The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
        </Typography>

        <Typography variant='title' id={contextProvider.id}>
          {contextProvider.display}
        </Typography>
        <Typography variant='p'>
          <Code>
            {`<MyContext.Provider value={/* some value */}>`}
          </Code>
          Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
        </Typography>
        <Typography variant='p'>
          Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
        </Typography>
        <Typography variant='p'>
          All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component bails out of the update.
        </Typography>
        <Typography variant='title' id={contextTypes.id}>
          {contextTypes.display}
        </Typography>
        <Typography variant='p'>
          <Code>
            {contextTypeExample}
          </Code>
          The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.
        </Typography>
        <Typography variant='p'>
          If you are using the experimental public class fields syntax, you can use a static class field to initialize your contextType.
          <Code>
            {experimentalStaticClassField}
          </Code>
        </Typography>
        <Typography variant='title' id={contextConsumer.id}>
          {contextConsumer.display}
        </Typography>
        <Typography variant='p'>
          <Code>
            {consumerExample}
          </Code>
          A React component that subscribes to context changes. This lets you subscribe to a context within a function component.
        </Typography>
        <Typography variant='title' id={example.id}>
          {example.display}
        </Typography>
        <Typography variant='p'>
          A more complex example with dynamic values for the theme:
          <Code>
            {contextExample}
          </Code>
          It is often necessary to update the context from a component that is nested somewhere deeply in the component tree. In this case you can pass a function down through the context to allow consumers to update the context:
          <Code>
            {contextNestedExample}
          </Code>
        </Typography>
        <Typography variant='p'>
          To keep context re-rendering fast, React needs to make each context consumer a separate node in the tree.
          <Code>
            {consumingMultipleContext}
          </Code>
          If two or more context values are often used together, you might want to consider creating your own render prop component that provides both.
        </Typography>

        <Typography variant='p'>
          Because context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders. For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value:
          <Code>
            {caveatExample}
          </Code>
          To get around this, lift the value into the parent’s state:
          <Code>
            {caveatFixExample}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ReactContext))
