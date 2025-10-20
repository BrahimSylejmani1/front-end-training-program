/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Code from "presentations/Code";
import SimpleLink from "presentations/rows/SimpleLink";
import DomImage from "assets/images/lecture2/dom.png";
import TicTacToe from 'pages/lecture2/TicTacToe'

const styles = ({ typography, size }) => ({
  root: {}
})

const reactComponent = `
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
`

class ReactJS extends React.Component {
  render() {
    const { classes, section } = this.props
    let introduction = section.children[0]
    let tictactoe = section.children[1]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          React JS
          <Divider />
        </Typography>
        <Typography id={introduction.id} variant={'title'}>
          {introduction.display}
        </Typography>
        <Typography variant='p'>
          ReactJS ia a library for building User Interfaces (UI). 
        </Typography>
        <Typography variant='p'>
          Taken from https://reactjs.org/, React has three main features:
          <ol>
            <li>Declarative</li>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
            <li>Component-Based</li>
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM (Document Object Model).
            <li>Learn Once, Write Anywhere</li>
            React doesn’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
          </ol>
        </Typography>

        <Typography variant='p'>
          React can also render on the server using Node and power mobile apps using React Native.
        </Typography>

        <Typography variant='p'>
          The DOM defines a standard for accessing documents. When the web page is loaded the browser creates a Document Object Model of the page. It looks like this:
        </Typography>
        <img src={DomImage} />

        <Typography variant='p'>
          With the object model, JavaScript gets all the power it needs to create dynamic HTML:
          <ul>
            <li>JavaScript can change all the HTML elements in the page</li>
            <li>JavaScript can change all the HTML attributes in the page</li>
            <li>JavaScript can change all the CSS styles in the page</li>
            <li>JavaScript can remove existing HTML elements and attributes</li>
            <li>JavaScript can add new HTML elements and attributes</li>
            <li>JavaScript can react to all existing HTML events in the page</li>
            <li>JavaScript can create new HTML events in the page</li>
          </ul>
        </Typography>
       
        <Typography variant='p'>
          React further encapsulates the DOM by using JavaScript to build complex UI-s (from the second feature of React JS)  
        </Typography>
        
        <Typography variant='p'>
          Here is how a React component looks like:
        </Typography>
        
        <Code>
          {reactComponent}
        </Code>
        <Typography variant='p'>
          React components implement a render() method that takes input data and returns what to display. This example uses JSX. Input data that is passed into the component can be accessed by render() via this.props.
        </Typography>

        
        <Typography id={tictactoe.id} variant={'title'}>
          {tictactoe.display}
        </Typography>

        <Typography variant={'p'}>
          Tick Tack Toe example here. Inspired by: <SimpleLink href="https://reactjs.org/tutorial/tutorial.html">https://reactjs.org/tutorial/tutorial.html</SimpleLink>
        </Typography>

        <Typography variant={'p'}>
          <TicTacToe/>
        </Typography>

        <Typography variant={'p'}>
          Home Assignment:<br/>
          Title: "Implement the Tic Tac Toe"<br/>
          Description:
          <ol>
            <li>Lets you play tic-tac-toe,</li>
            <li>Indicates when a player has won the game,</li>
            <li>Stores a game’s history as a game progresses,</li>
            <li>Allows players to review a game’s history and see previous versions of a game’s board</li>
          </ol>
          Bonus points:
          <ol>
            <li>Highlight the step that you are in</li>
            <li>Highlight the wining steps</li>
            <li>Rewrite the board row sections such that you use loops to render the components. Tip: const rows = Array(3).fill(null),
              loop twice to this array to map all the rows and their indexes (3x3)</li>
          </ol>
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(ReactJS)
