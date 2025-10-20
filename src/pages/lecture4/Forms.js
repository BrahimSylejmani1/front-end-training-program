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

const htmlForm = `
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
`
const nameForm = `
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onValueChanged = (event) => {
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onValueChanged} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
`

const controlledHandler = `
onValueChanged = (event) => {
  this.setState({value: event.target.value.toUpperCase()});
}
`

const textAreaHTML = `
<textarea>
  This is my text
</textarea>
`

const selectHTML = `
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
`

const multipleComponents = `
class MultipleInputForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flavor: 'coconut',
      textArea: 'Please write an essay about your favorite DOM element.',
      isGoing: true,
      numberOfGuests: 2
    }
  }

  onSubmit = (event) => {
    alert('A name was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  onValueChanged = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      [name]: value
    })
  }

  render () {
    const { flavor, textArea, isGoing, numberOfGuests } = this.state
    const options = ['grapefruit', 'lime', 'coconut', 'mango']
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Pick your favorite flavor:<br/>
          <select value={flavor} name="flavor" onChange={this.onValueChanged}>
            {options.map(next => <option key={next} value={next}>{next}</option>)}
          </select>
        </label><br/>
        <label>
          Essay:<br/>
          <textarea value={textArea} name="textArea" onChange={this.onValueChanged} />
        </label><br/>
        <label>
          Number of Guests:<br/>
          <input 
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={this.onValueChanged} />
        </label><br/>
        <label>
          Are they all comming:<br/>
          <input 
            name="isGoing"
            type="checkbox"
            value={isGoing}
            onChange={this.onValueChanged} />
        </label><br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
`

const controlledNullValueCode = `
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {controlled: true, value: "hi"};
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        controlled: false
      })
    }, 5000)
  }

  render() {
    const { controlled } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          {controlled ? <input type="text" value={this.state.value} /> : <input type="text" value={null} />}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
`

const unControlledComponentsCode = `
class UncontrolledComponents extends React.Component {
  constructor (props) {
    super(props)
    
    this.file = React.createRef();
    this.input = React.createRef();
  }

  onSubmit = (event) => {
    alert('A name was submitted: ' + this.input.current.value + ' and a file ' + this.file.current.files[0].name);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Uncontrolled Input:
          <input 
            name="name"
            ref={this.input} />
        </label>
        <label>
          Uncontrolled File Upload:
          <input 
            name="name"
            type="file"
            ref={this.file} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
`

class Forms extends React.Component {
  render() {
    const { classes, section } = this.props
    let controlledComponents = section.children[0]
    let otherTags = section.children[1]
    let controlledNullValue = section.children[2]
    let unControlledComponents = section.children[3]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk how to handle Form HTML elements! Inspired by <SimpleLink href="https://reactjs.org/docs/forms.html">https://reactjs.org/docs/forms.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography variant='p'>
          HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
          <Code>
            {htmlForm}
          </Code>
        </Typography>
        <Typography variant='p'>
          This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.
        </Typography>
        <Typography id={controlledComponents.id} variant={'title'}>
          {controlledComponents.display}
        </Typography>
        <Typography variant='p'>
          In HTML, form elements such as <Italic>{`<input>`}</Italic>, <Italic>{`<textarea>`}</Italic> and <Italic>{`<select>`}</Italic> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
        </Typography>

        <Typography variant='p'>
         We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
        </Typography>

        <Typography variant='p'>
          For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
          <Code>
            {nameForm}
          </Code>
        </Typography>

        <Typography variant='p'>
          Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
        </Typography>

        <Typography variant='p'>
          With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:
          <Code>
            {controlledHandler}
          </Code>
        </Typography>
        <Typography id={otherTags.id} variant={'title'}>
          {otherTags.display}
        </Typography>
        <Typography variant='p'>
          In HTML, a <Italic>{`<textarea>`}</Italic> element defines its text by its children:
          <Code>
            {textAreaHTML}
          </Code>
        </Typography>
        <Typography variant='p'>
          Similar considering the <Italic>{`<select>`}</Italic> tag. In HTML, <Italic>{`<select>`}</Italic> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:
          <Code>
            {selectHTML}
          </Code>
        </Typography>
        <Typography variant='p'>
          Note that the Coconut option is initially selected, because of the selected attribute.
        </Typography>

        <Typography variant='p'>
          In React, a <Italic>{`<textarea>`}</Italic> uses a value attribute instead, which is the same as the <Italic>{`<select>`}</Italic> tag. Lets see how that would look like in React:
          <Code>
            {multipleComponents}
          </Code>
        </Typography>

        <Typography id={controlledNullValue.id} variant={'title'}>
          {controlledNullValue.display}
        </Typography>
        <Typography variant='p'>
          Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
        </Typography>

        <Typography variant='p'>
          The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)
          <Code>
            {controlledNullValueCode}
          </Code>
        </Typography>

        <Typography id={unControlledComponents.id} variant={'title'}>
          {unControlledComponents.display}
        </Typography>

        <Typography variant='p'>
          In most cases, it is recommended to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In React, an <Italic>{`<input type="file" />`}</Italic> is always an uncontrolled component because its value can only be set by a user, and not programmatically.
          <Code>
            {unControlledComponentsCode}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Forms)
