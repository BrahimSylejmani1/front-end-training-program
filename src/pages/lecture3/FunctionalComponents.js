/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";

const styles = ({ typography, size }) => ({
})

const square = `
class Square extends React.Component {
  render() {
    const { value, highlight, onClick } = this.props
    return (
      <Button onClick={onClick}>
        {value || '-'}
      </Button>
    );
  }
}`


const functionalSquare = `
const Square = (props) => {
  const { value, highlight, onClick } = props
  return (
    <Button onClick={onClick}>
      {value || '-'}
    </Button>
  );
}
`

const composition = `
<div>
  <Square value={1}/>
  <Square value={2}/>
  <Square value={3}/>
</div>
`

const pureFunction = `
const sum = (a, b) => {
  return a + b
}
`
const impure = `
const withdraw = (account, amount) => {
  account.total -= amount
  return account
}
`

const badTransactionsExample = `
class Transactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5,
      multiplier: 3
    }
  }

  render() {
    const { classes } = this.props
    const { multiplier, value } = this.state

    return (
      <div>
        <Typography variant='p'>
          {\`Total : \${multiplier * value}\`}
        </Typography>
        <TextField value={multiplier} onChange={(event) => {
          this.setState({
            multiplier: event.target.value
          })
        }}/>
        <TextField value={value} onChange={(event) => {
          this.state.value = event.target.value
        }}/>
      </div>
    )
  }
}
`

const helloWorldCode = `
const HelloWorld = (props) => {
  return <div>{props.name}</div>
}`

const extractingComponents = `
const App = (props) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
`
const avatarComponent = `
const Avatar = (props) => {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
`
const userInfoComponent = `
const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
`
const appUpdated = `
const AppUpdated = (props) => {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
`
const Bold = (props) => {
  return <label style={{display: 'contents', fontWeight: 'bold', paddingLeft: 4, paddingRight: 4}}>{props.children}</label>
}

class FunctionalComponents extends React.Component {
  render() {
    const { classes, section } = this.props
    let renderingComponents = section.children[0]
    let composingComponents = section.children[1]
    let componentExtractions = section.children[2]
    let readOnlyProps = section.children[3]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to do a recap and talk about how can we turn a functional component and a few tips and trics! Inspired by <SimpleLink href="https://reactjs.org/docs/components-and-props.html">https://reactjs.org/docs/components-and-props.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant={'p'}>
          Functional components? You mean like a function rendering a component? Without any State?
        </Typography>
        <Typography variant={'p'}>
          Yep that's exactly what I mean. Lets see what we discussed so far about the "Square" component. Since it doesn't have any state, like the "Game" component, can we make it simpler?
        </Typography>
        <Code>
          {square}
        </Code>
        <Typography variant={'p'}>
          The answer is, drum roll..., so called functional components:
        </Typography>
        <Code>
          {functionalSquare}
        </Code>
        <Typography variant={'p'}>
          Let us have a look at what exactly changed. First of all the "Square" is not any more a class, but rather a function. It only accepts properties and returns another tag. That is pretty straight forward isn't it? This is how react can also levarage functions to render components. If the component has no state we can simplify it!
        </Typography>

        <Typography variant={'p'}>
          They are called "functional components" because that is literally what they are: A javascript function that renders a component
        </Typography>

        <Typography id={renderingComponents.id} variant={'title'}>
          {renderingComponents.display}
        </Typography>

        <Typography variant='p'>
          In React you can represent DOM tags, that are considered to be of type Node, using JSX like follows
          <Code>
            {`const div = <div/>`}
          </Code>
          However elements can also represent user defined components like
          <Code>
            {`const element = <HelloWorld name="Agon"/>`}
          </Code>
          Where Hello World looks like this:
          <Code>
            {helloWorldCode}
          </Code>
          When React "sees" a user defined component it passes attributes as a single object called props. What happens next is as follows:
          <ol>
            <li>We call ReactDOM.render() with the {`<HelloWorld name="Agon" />`} element.</li>
            <li>React calls the Welcome component with {`{name: 'Agon'}`} as the props.</li>
            <li>Our Welcome component returns a {`<div>Hello, Agon</div>`} element as the result.</li>
            <li>React DOM efficiently updates the DOM to match {`<div>Hello, Agon</div>`}.</li>
          </ol>
        </Typography>

        <Typography id={composingComponents.id} variant={'title'}>
          {composingComponents.display}
        </Typography>
        <Typography variant={'p'}>
          You can even use composition (we will talk more in depth about this later) to render multiple of them like this:
        </Typography>
        <Code>
          {composition}
        </Code>
        <Typography variant={'p'}>
          Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
        </Typography>
        <Typography id={componentExtractions.id} variant={'title'}>
          {componentExtractions.display}
        </Typography>
        <Typography variant={'p'}>
          Consider the following App component:
          <Code>
            {extractingComponents}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          Don't be afraid to extract components out of it, that can be re-used by other parts of the app. By looking at the use case above, we can see that the user avatar can be something that we can re-use on other parts of the app, right? Lets do that:
          <Code>
            {avatarComponent}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          Any other piece of the UI now can refer to this component when displaying avatars, and passing props of user to enable that. Further more, maybe in some use cases it makes sense to have a special "User Information" component to display all user related info, like this:
          <Code>
            {userInfoComponent}
          </Code>
        </Typography>
        <Typography variant={'p'}>
          Putting it all together we get:
          <Code>
            {appUpdated}
          </Code>
        </Typography>
        <Typography id={readOnlyProps.id} variant={'title'}>
          {readOnlyProps.display}
        </Typography>
        <Typography variant={'p'}>
          However there is one strict rule that you must follow when using React components. That is that <Bold>Props are Read-Only</Bold>. Consider the following function:
        </Typography>

        <Code>
          {pureFunction}
        </Code>

        <Typography variant={'p'}>
          Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
        </Typography>
        <Typography variant={'p'}>
          In contrast this function is considered impure, since it changes its input:
        </Typography>
        <Code>
          {impure}
        </Code>
        <Typography variant={'p'}>
          <label>Now this is an important rule since, a state change in a parent component causes a re-render of the tree and a new prop being passed into the children components and <label style={{fontWeight: 'bold'}}>not</label> a reference change. A reference change introduces a dependency that only the component modifying it is aware off, and not all the other child components that depend on the same prop! When working with React there is only one strict rule that you must follow, that is that: <label style={{fontWeight: 'bold'}}>All React components must act like pure functions with respect to their props.</label></label>
        </Typography>
        <Typography variant={'p'}>
          Consider the following example where a components relies on a transactions state to update multiple views. Itself it renders the amounts of transactions that has happened so far:
        </Typography>
        <Code>
          {badTransactionsExample}
        </Code>
        <Typography variant={'p'}>
          The second "Text Field" component is changing the state value reference without the parent acknowledging it. This means that other views in the dependency tree could have miss leading information.
        </Typography>
        <Typography variant='p'>
          Examples taken from: <SimpleLink href="https://reactjs.org/docs/components-and-props.html">https://reactjs.org/docs/components-and-props.html</SimpleLink> with some additions.
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(FunctionalComponents)
