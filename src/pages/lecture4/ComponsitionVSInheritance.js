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

const composedCardWithHoles = `
const CardWithHoles = (props) => {
  return (
    <div style={{ borderRadius: 4, display: 'flex', alignItems: 'flex-start', flexFlow: 'column wrap', backgroundColor: 'white', width: 300, height: 300, padding: 16}}>
      <div style={{fontSize: 16, width: '100%', fontWeight: 'bold'}}>
        {props.title}
      </div>
      <div style={{flex: 1, width: '100%'}}>
        {props.children}
      </div>
    </div>
  )
}
`

const wrapChilden = `
const Card = (props) => {
  return (
    <div style={{ borderRadius: 4, backgroundColor: 'white', width: 300, height: 300, padding: 16}}>
      {props.children}
    </div>
  )
}

<Card>
  <Typography variant='p'>
    Hello there, I'm inside a card!
  </Typography>
</Card>
`

const compositionHoles = `
const CardWithHoles = (props) => {
  return (
    <div style={{ borderRadius: 4, display: 'flex', alignItems: 'flex-start', flexFlow: 'column wrap', backgroundColor: 'white', width: 300, height: 300, padding: 16}}>
      <div style={{fontSize: 16, width: '100%', fontWeight: 'bold'}}>
        {props.title}
      </div>
      <div style={{flex: 1, width: '100%'}}>
        {props.content}
      </div>
    </div>
  )
}
<CardWithHoles title={"I'm the title"} content={<ol><li>I'm the content</li></ol>}></CardWithHoles>
`

const specializationCode = `
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}
`

const signUp = `
class SignUpDialog extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      login: ''
    }
  }

  onLoginChanged = (e) => {
    this.setState({login: e.target.value});
  }

  onSignUp = () => {
    alert(\`Welcome aboard, \${this.state.login}!\`);
  }

  render () {
    return (
      <CardWithHoles title="Sign Up">
        <input value={this.state.login}
               onChange={this.onLoginChanged} />

        <button onClick={this.onSignUp}>
          Sign Me Up!
        </button>
      </CardWithHoles>
    )

  }
}
`

class CompositionVSInheritance extends React.Component {
  render() {
    const { classes, section } = this.props
    let containement = section.children[0]
    let specialization = section.children[1]
    let inheritance = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition. Inspired by <SimpleLink href="https://reactjs.org/docs/composition-vs-inheritance.html">https://reactjs.org/docs/composition-vs-inheritance.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        
        <Typography id={containement.id} variant={'title'}>
          {containement.display}
        </Typography>

        <Typography variant='p'>
          Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
          React recommends that such components use the special children prop to pass children elements directly into their output:
          <Code>
            {wrapChilden}
          </Code>
        </Typography>

        <Typography variant='p'>
          While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children:
          <Code>
            {compositionHoles}
          </Code>
        </Typography>
        <Typography variant='p'>
          Whether its a string or another tag React treats children the same, so you can pass them as props like any other data.
        </Typography>
        
        <Typography id={specialization.id} variant={'title'}>
          {specialization.display}
        </Typography>
        <Typography variant='p'>
          Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.
        </Typography>
        <Typography variant='p'>
          In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:
          <Code>
            {specializationCode}
          </Code>
        </Typography>
        <Typography variant='p'>
          Composition works equally well for components defined as classes:
          <Code>
            {signUp}
          </Code>
          Where CardWithHoles is chaned to:
          <Code>
            {composedCardWithHoles}
          </Code>
        </Typography>
        <Typography id={inheritance.id} variant={'title'}>
          {inheritance.display}
        </Typography>

        <Typography variant='p'>
          As Facebook states but also during our use cases of many many components we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
        </Typography>

        <Typography variant='p'>
          Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
        </Typography>
        <Typography variant='p'>
          If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CompositionVSInheritance)
