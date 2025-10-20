/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import LoggingImage from 'assets/images/lecture10/logging.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold, Italic } from "presentations/Label";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import NoneDocumentedImage from 'assets/images/lecture11/none_documented.png'
import DocumentedImage from 'assets/images/lecture11/documented.png'
import DocumentedGreetingImage from 'assets/images/lecture11/documented_greeting.png'
const styles = ({ typography }) => ({
  root: {},
})
class Greeting extends React.Component {
  render() {
    return (
      <Typography>Hello, {this.props.name}</Typography>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}
const isRequiredPropType = `
Greeting.propTypes = {
  name: PropTypes.string.isRequired
}`
const propTypesExample = `
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
}
`

const propTypesDocumentation = `
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element.
  optionalElement: PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with \`isRequired\` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: PropTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't \`console.warn\` or throw, as this
  // won't work inside \`oneOfType\`.
  customProp: (props, propName, componentName) => {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop \`' + propName + '\` supplied to' +
        ' \`' + componentName + '\`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to \`arrayOf\` and \`objectOf\`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop \`' + propFullName + '\` supplied to' +
        ' \`' + componentName + '\`. Validation failed.'
      );
    }
  })
}`

const singleElement = `
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};`

const defaultPropertyExample = `
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};`

const defaultFieldExample = `
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}`

const none_documented = `
const add = (a, b) => {
  return a + b
}`
const documented = `
/**
 * For the given input a and b, this method returns the sum of them
 * @param {number} a 
 * @param {number} b 
 * @param {[number]} c 
 * @returns a + b + optionally c
 */
const add = (a, b, c) => {
  return a + b
}`

/**
 * A simple but rather elegant Greeting Component
 */
class DocumentedGreeting extends React.Component {

  /**
   * Adds two numbers and returns the sum of them
   * @param {number} a
   * @param {number} b
   * @returns a + b
   */
  sum = (a, b) => {
    // let us go ahead and calculate it then!
    return a + b
  }

  /**
   * Render function, self explanatory, no need to document this. Waisted 10 seconds already. Talk about productivity when you need it.
   */
  render() {
    let a = 0
    let b = 0
    /**
     * Doing multiple line comments
     * Over here as well
     */
    let sum = this.sum(a, b)
    // Or like this
    // And this

    // this.sum(4, 5) - Commented code out
    return (
      <Typography>Hello, {this.props.name}</Typography>
    );
  }
}
const documentedGreating = `/**
 * A simple but rather elegant Greeting Component
 */
class DocumentedGreeting extends React.Component {

  /**
   * Adds two numbers and returns the sum of them
   * @param {number} a
   * @param {number} b
   * @returns a + b
   */
  sum = (a, b) => {
    // let us go ahead and calculate it then!
    return a + b
  }

  /**
   * Render function, self explanatory, no need to document this. Waisted 10 seconds already. Talk about productivity when you need it.
   */
  render() {
    let a = 0
    let b = 0
    /**
     * Doing multiple line comments
     * Over here as well
     */
    let sum = this.sum(a, b)
    // Or like this
    // And this

    // this.sum(4, 5) - Commented code out
    return (
      <Typography>Hello, {this.props.name}</Typography>
    );
  }
}`

class ReactPropTypes extends React.Component {

  render() {
    const { classes, section } = this.props
    const propTypes = section.children[0]
    const defaultProps = section.children[1]
    const documentation = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to see how we can do Typechecking With PropTypes! Inspired from <SimpleLink href="https://reactjs.org/docs/typechecking-with-proptypes.html">https://reactjs.org/docs/typechecking-with-proptypes.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='title' id={propTypes.id}>
          {propTypes.display}
        </Typography>
        <Typography variant='p'>
          As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like <Bold>Flow</Bold> or <Bold>TypeScript</Bold> to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:
          <Code>
            {propTypesExample}
          </Code>
        </Typography>
        <Typography variant='p'>
          PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
          <Code>
            <Greeting name="Agon"/>
          </Code>
          Try supplying the name property as an object at the example code above, or another type of value and see what happens.
        </Typography>
        <Typography variant='p'>
          Another property of any of the PropTypes is the <Italic>isRequired</Italic>, which indicates just that, whether a Component needs a property in order to render itself:
          <Code>
            {isRequiredPropType}
          </Code>
          Try to remove the name property after you have set the isRequired!
        </Typography>
        <Typography variant='p'>
          Here is an example documenting the different validators provided:
          <Code>
            {propTypesDocumentation}
          </Code>
        </Typography>
        <Typography variant='p'>
          With PropTypes.element you can specify that only a single child can be passed to a component as children:
          <Code>
            {singleElement}
          </Code>
        </Typography>
        
        <Typography variant='title' id={defaultProps.id}>
          {defaultProps.display}
        </Typography>
        <Typography variant='p'>
          You can define default values for your props by assigning to the special defaultProps property:
          <Code>
            {defaultPropertyExample}
          </Code>
          You can also declare defaultProps as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class fields proposal.
          <Code>
            {defaultFieldExample}
          </Code>
          The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.
        </Typography>
        <Typography variant='title' id={documentation.id}>
          {documentation.display}
        </Typography>
        <Typography variant='p'>
          In general it is a good idea to document functions and classes and everything really, in order to help other developers or sometimes also yourself, in cases where you have to get back to a piece of code that you wrote a month ago as an example, to better read or understand the purpose and/or behaviour of the code.
        </Typography>
        <Typography variant='p'>
          Most of the IDE-s will react based on your documentation and provide meaningful assistance when you are trying to invoke a function, assign a property etc. Let us look at the following example:
          <Code>
            {none_documented}
          </Code>
        </Typography>
        <img src={NoneDocumentedImage} />
        <Typography variant='p'>
          By default Visual Studio Code, helps you out by pointing the parameters that this method accepts and the return value. But if you've noticed at this point they can be anything, or <Italic>any</Italic>.
        </Typography>
        <Typography variant='p'>
          Let us see what happens if we apply some documentation to it:
          <Code>
            {documented}
          </Code>
        </Typography>
        <img src={DocumentedImage} />
        <Typography variant='p'>
          In the same way, if you have defined PropTypes of a Component, and or documented the code within, you will help others read the implementation and or call your component without having to actually see the implementation! Let us give an example on how you would do this:
          <Code>
            {documentedGreating}
          </Code>
          And then here is what happens if you are trying to call it:
        </Typography>
        <img src={DocumentedGreetingImage} />
        <Typography variant='p'>
          The same principle can be applied for reducer functions, within code comments if they make sense, etc. The general idea behind this is to explain and clarify confusion and maximise productivity! Be the good guy/girl and share what you have written. Remember <Bold>sharing means caring</Bold>!
        </Typography>

      </Fragment>
    )
  }
}

ReactPropTypes.propTypes = {
  section: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ReactPropTypes))
