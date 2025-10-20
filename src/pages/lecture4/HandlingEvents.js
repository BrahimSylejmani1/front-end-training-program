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

const eventHTML = `
<button onclick="somefunction()">
  Activate Lasers
</button>
`
const eventReact = `
<button onClick={this.onClick}>
  Activate Lasers
</button>
`

const preventDefaultHTML = `
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
`
const preventDefaultReact = `
const Link = (props) => {
  const onHandleClick = (event) => {
    event.preventDefault()
    console.log('I Was Clicked!')
  }
  return (
    <a onClick={onHandleClick}>Go Somewhere</a>
  )
}
`
const toggleEventListener = `
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    this.boundClick = this.boundClick.bind(this);
  }

  boundClick (event) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  /**
   * Warning: This is still experimental according to React Documentation, although we are using this a lot!
   */
  handleClick = (event) => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  /**
   * Warning: This is still experimental according to React Documentation, although we are using this a lot!
   */
  inlineEventClick = (event) => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.boundClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={(event) => this.inlineEventClick(event)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
`
const loopEvents = `
class LoopEventClick extends React.Component {

  onRowClicked = (id, event) => {
    console.log('id', id, 'event', event)
  }

  renderBindedRow = (next, index) => {
    return (
      <li key={next} onClick={this.onRowClicked.bind(this, next)}>
        {next}
      </li>
    )
  }

  renderInlineRow = (next, index) => {
    return (
      <li key={next} onClick={(event) => this.onRowClicked(next, event)}>
        {next}
      </li>
    )
  }

  render () {
    const numbers = [1, 2, 3, 4]

    return (
      <Fragment>
        <ul>
          {numbers.map(this.renderBindedRow)}
        </ul>
        <ul>
          {numbers.map(this.renderInlineRow)}
        </ul>
      </Fragment>
    )

  }
}
`

class HandlingEvents extends React.Component {
  render() {
    const { classes, section } = this.props
    let argumentsAsEventHandlers = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about how we handle events in React! Inspired by <SimpleLink href="https://reactjs.org/docs/handling-events.html">https://reactjs.org/docs/handling-events.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography variant='p'>
          The first thing you should know about React is the following two rules:
          <ol>
            <li>React event properties are written in camelCase rather than lowercase (onClick vs onclick)</li>
            <li>With JSX you pass a function as the event handler, rather than a string.</li>
          </ol>
        </Typography>

        <Typography variant='p'>
          For example, in HTML you would write:
          <Code>
            {eventHTML}
          </Code>
        </Typography>
        <Typography variant='p'>
          Otherwise in React:
          <Code>
            {eventReact}
          </Code>
        </Typography>


        <Typography variant='p'>
          Another difference is that you cannot return <Italic>false</Italic> to prevent default behavior in React. You must call <Italic>preventDefault</Italic> explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:
          <Code>
            {preventDefaultHTML}
          </Code>
        </Typography>
        <Typography variant='p'>
          In React this would be:
          <Code>
            {preventDefaultReact}
          </Code>
        </Typography>

        <Typography variant='p'>
          Here, <Italic>event</Italic> is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. See the <SimpleLink href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</SimpleLink> reference guide to learn more.
        </Typography>

        <Typography variant='p'>
          When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states, notice the three ways you can bind a function to a class:
          <Code>
            {toggleEventListener}
          </Code>
        </Typography>
        <Typography id={argumentsAsEventHandlers.id} variant={'title'}>
          {argumentsAsEventHandlers.display}
        </Typography>
        <Typography variant='p'>
          Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if next is the row value, either of the following would work:
          <Code>
            {loopEvents}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HandlingEvents)
