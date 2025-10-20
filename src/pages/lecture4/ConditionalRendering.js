/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";
import { Italic } from "presentations/Label";

const styles = ({ typography, size }) => ({
})

const components =`
const UserGreeting = (props) => {
  return <h1>Welcome back!</h1>;
}

const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>;
}
`

const greeting = `
const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting/>
}
`

const sessionButtons = `
const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
`


const loginControl = `
class LoginControl extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  onLoggedInClicked = () => {
    // authorize users
    // check credentials

    this.setState({
      isLoggedIn: true
    })
  }

  onLoggedOutClicked = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  assignOnClickHandler = (isLoginButton) => {
    if (isLoginButton) {
      return this.onLoggedInClicked
    }
    return this.onLoggedOutClicked
  }

  renderButton = () => {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return <LogoutButton onClick={this.assignOnClickHandler(false)} />
    }
    return <LoginButton onClick={this.assignOnClickHandler(true)} />
  }

  render () {
    // const { isLoggedIn } = this.state
    // let button = <LoginButton onClick={this.onLoggedInClicked} />
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.onLoggedOutClicked} />
    // }
    const list = [1, 2, 3, 4]
    const elements = list.map(next => <div key={next}>{next}</div>)
    return (
      <div>
        {this.renderButton()}
        {list.map(next => <div key={next}>{next}</div>)}
        {elements}
      </div>
    )
  }
}
`

const inlineRender =`
render () {
  const { isLoggedIn } = this.state
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {!isLoggedIn ? <LoginButton onClick={this.onLoggedInClicked} /> : <LogoutButton onClick={this.onLoggedOutClicked} />}
      {isLoggedIn && 'Well Howdy there'}
    </div>
  )
}
`

const preventComponentRendering = `
const SecretInfo = (props) => {
  const isLoggedIn = props.isLoggedIn
  if (!isLoggedIn) {
    return null
  }

  return <div>
    Shhhhhh, I have some secrets that I can only share with a logged in User!
  </div>
}
`

class ConditionalRendering extends React.Component {
  render() {
    const { classes, section } = this.props
    let elementVariables = section.children[0]
    let inlineConditions = section.children[1]
    let preventRendering = section.children[2]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about how we can decide what to render based on certain conditions, so called "Conditional Rendering"! Inspired by <SimpleLink href="https://reactjs.org/docs/conditional-rendering.html">https://reactjs.org/docs/conditional-rendering.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
        </Typography>

        <Typography variant='p'>
          Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
        </Typography>

        <Typography variant='p'>
          Consider the following components:
          <Code>
            {components}
          </Code>
        </Typography>
        <Typography variant='p'>
          We’ll create a Greeting component that displays either of these components depending on whether a user is logged in (depending on the isUserLoggedIn prop):
          <Code>
            {greeting}
          </Code>
        </Typography>
        <Typography id={elementVariables.id} variant={'title'}>
          {elementVariables.display}
        </Typography>
        <Typography variant='p'>
          Consider these two new buttons:
          <Code>
            {sessionButtons}
          </Code>
        </Typography>
        <Typography variant='p'>
          You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change. Lets say we have build these two buttons:
          <Code>
            {loginControl}
          </Code>
        </Typography>
        <Typography id={inlineConditions.id} variant={'title'}>
          {inlineConditions.display}
        </Typography>
        <Typography variant='p'>
          You can also use inline If with Logical && Operator or Inline If-Else with Conditional Operator like this:
          <Code>
            {inlineRender}
          </Code>
        </Typography>
        <Typography id={preventRendering.id} variant={'title'}>
          {preventRendering.display}
        </Typography>
        <Typography variant='p'>
          You can also prevent Component from rendering. In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.
          <Code>
            {preventComponentRendering}
          </Code>
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(ConditionalRendering)
