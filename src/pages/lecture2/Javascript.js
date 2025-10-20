/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Code from "presentations/Code";
import SimpleLink from "presentations/rows/SimpleLink";
import { Bold } from "presentations/Label";
const styles = ({ typography, size }) => ({
  root: {},
  columns: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    '& :first-child': {
      marginRight: size.spacing * 2
    },
    '& :last-child': {
      marginLeft: size.spacing * 2
    }
  },
  columnChild: {
    flex: 1,
    width: '30%',
  }
})


const assignments = `
var a = "Agon" // assigned to a string
a = 15 // now re assigned to an int, whaaat?!
a = { // now, I woke up and decided to be an object
  name: "Agon", // my awesome property -> name
  lastName: "Lohaj" // my other property -> lastName
}

a.name = "Leutrim" // changed the variable name to something else`

const dataTypes = `
var a = "Agon" // String
var b = 2123 // int
var c = 225.62 // decimal
var d = { a: a, b: b } // an object, whose properties a equals to variable a and b equals to variable b
var k = [235, "Agon", { name: "There"}] // an array containing different type of variables inside
var sum = function (a, b) { // I'm a variable, which is a function, whaat!?
  return a + b
}
var g // initialized to undefined by default, which is a special variable type that specifies emptiness!
d = null // the variable type is preserved that is d is still an object, but its value is null, a null object
d == g // different in type, but the same value, this returns true
d === g // three equalities checks for same value and same type, not true

typeof a // "string"
typeof b // "int"
typeof d // "object"
typeof g // "undefined"`

const operators = `
var a = 5
var b = 8
var c = a + b // 13
var d = a + "John" // The result here is "5John"

var t = a + b + "John" // The result here is "13John". JavaScript will apply the operators from left to right in that order
var g = a + (b + "John") // Now here we would get "58John", its the "return of the rounded brackets (from the movie Return of the King)"
var k = a - b // -3
var j = "John" + " " + "Doe" // I'm concatenating some strings over here

// Arithmetic Operators:
a + b // sum
a - b // subtract
a * b // multiplication
a / b // division
a ** b // exponation, a to the power of b (ES 6)
a % b // module
a++ // increment
a-- // decrement

// Assignment Operators:
= // equals
+= // x += y same as x = x + y, 
-= // well you get it already, x-=y same as x = x - y
*=
/=
%=
**=`

const hoisting1 = `
var a // currently undefined
b()
// outputs "I'm ready". This happens due to the fact that function declaration 
// are moved to the top of the body

function b () {
  console.log("I'm ready")
} // function declaration

a() // doesn't work, variable is still undefined

a = function() {
  console.log("Am I ready?")
} // function expression`

const hoisting2 = `
// The code on the left is interpreted as follows
function b () {
  console.log("I'm ready")
}

var a = undefined;
b();

a();

a = function() {
  console.log("Am I ready?")
} // here is the variable init`

const methods = `let a = "John"
a.toUpperCase() // Strings have different functions available for you to call
a.indexOf("Jo") // the index of string "Jo" 
a.length // the length of the string

let x = 100
x.toString() // turns this integer into a string
x = 100.9999
x.toFixed(2); // returns the number to fixed 2 decimal points, that is 100.99

// Then there are other methods from libraries available, like:
Math.random() // a decimal number between 0 and 1

Math.max(10, 20) // the maximum value between two inputs, in this case 20
// ...and so many more`

const variables = `
const b = 5
b = 7 // ups, I cannot do this anymore, b is a constant

var globalVar = "John" // if you consider this file, you can say that this is a global variable, there is no scoping since it doesn't belong to any function

function scoped () { // var, scoped within the function
	for (var i = 0; i <= 5; i++) {
		// do something...
	}

	i = 7 // I can do this, whaaat?
}


function blockScoped () {
	let sum = 0
	for (let i = 0; i <= 5; i++) { 
		// "let", scoped within the code block, {}
	}

	i = 7 // Now I cannot do this anymore
}`


const filterCode = `let a = ["John", "Dohn", "Bowee", "Catrin"]
// filtering
let c = a.filter(function(value, index) => {
	return value !== "John"
})) // ["Dohn", "Bowee", "Catrin"]
// with ES6 this can be reduced to:
let d = a.filter((next, index) => next !== "John")
// if you don't use the index parameter, simply remove it:
let e = a.filter(next => next !== "John")
// Now the new array created doesn't contain "John" anymore

// the name "next" on top, you can use any other name, like "which", it only represents the parameter which is the next input
let e = a.filter(which => which !== "John")`

const mapping = `
let a = ["John", "Dohn", "Bowee", "Catrin"]
// another very important function is map:
let f = a.map(next => {
	return {
		name: next
	}
})
// this basically turned the a array: ["John", "Dohn", "Bowee", "Catrin"]
// into an array that looks like this: [{name: "John"},  {name: "Dohn"}, {name: "Bowee"}, {name: "Catrin"}]

// here is how we revert back to the original array, now becoming the new variable r
let r = f.map(next => {
	return next.name
})
// think of this as y = (x*2) + 4
let myMathFunction = [1, 2, 3, 4, 5].map(next => (next * 2) + 4)`

const reduce = `
let sum = [1, 2, 3, 4, 5].reduce((accumulator, next, index) => {
	return accumulator + next 
}, 0)`

const arrayMethods = `let a = [5, 1, 12, -10, 5]

//sorting
let sorted = a.sort((a, b) => a - b)

let persons = [{ name: 'John', money: 10}, { name: 'Dohn', money: 700}, { name: 'Doe', money: 300 }]
let clone = [...persons] // making a clone, before sorting
// the [...persons] is there to just make a copy of the array before sorting
// since sorting is changing the reference and not really creating a new array
let richest = clone.sort((personA, personB) => personB.money - personA.money) // where personA and personB are two objects of array b being compared
// the above function is now sorting descending
// here we use the [...persons] to create it inline
let poorest = [...persons].sort((personA, personB) => personA.money - personB.money)
// or
let poorestAnotherWay = richest.reverse() // reverse the order of the elements in the array

a.forEach((next, index) => {
	console.log('next element :' + next + 'at index: ' + index)
	// no return function needed, it’s just an iterator
}))

a.every((next, index) => {
	console.log('next element :' + next + 'at index: ' + index)
	// the return value, is used to indicate whether this iteration should continue or not
	// in this case, always carry on until the end of the elements
	return true 
}))

a.join(", ") // produces the following result: "1, 2, 3, 4, 5"
[1].join(", ") // produces the following result: "1"

a.push(6) 
// adds a new element into the array, and return the newly created index
a.pop() // pops (removes) the last element of the array and returns the value popped`

const objectManipulation = `
let a = {
	name: "John",
	lastName: "Don"
}

let b = {
	...a,
	age: 32
} // b becomes { name: "John", lastName: "Don", age: 32 }

let c = {
	...b,
	name: "Override"
} // c becomes { name: "Override", lastName: "Don", age: 32 }

let d = {
	a,
	c
} 
// now d has two properties which are object a assigned at variable a,
// and object c assigned at variable c

// it’s the equivalent of:
let d = {
	a: a,
	c: c
}`

const esExamples = `
let a = {
  name: "John",
  lastName: "Don",
  email: "john.don@gmail.com",
  age: 36
}

const name = a.name
const lastName = a.lastName
const gender = a.gender || 'M' // check for empty
const other = { email: a.email, age: a.age }
// vs
const { name, lastName, gender = 'M', ...other } = a // Destructs the properties name, lastName into variables, but also makes available the leftovers at other
// gender is assigned to M if missing

const userName = a.name
const lastName2 = a.lastName
const the_rest = { email: a.email, age: a.age }
// vs
const { name: userName, lastName: lastName2, ...the_rest } = a // Same as above, but with renaming


const list = [1, 2, 3, 4]
const [ firstElement, , thirdElement ] = list // Get the first element and third element like this, ignoring the second element and the forth, you can name them as you wish
// vs
const firstElement = list[0]
const thirdElement = list[2]

const a = function (paramter1, parameter2, optional = 5) {
  return "Hello"
}
// vs
const a = (paramter1, parameter2, optional = 5) => {
  return "Hello"
}

// Functions
const a = function (paramter1, parameter2, optional = 5) { // Javascript vanilla function
  return "Hello"
}
// vs
const b = (paramter1, parameter2, optional = 5) => { // Array function
  return "Hello"
}

// function as argument
const myAwesomeMappingFunction = (x) => x * 2
const newList = list.map(myAwesomeMappingFunction)
const sameList = list.map((x) => x * 2)
const sameListVanilla = list.map(function (x) {
  return x * 2
})

const list = [1, 2, 3, 4]
const atTheBeginning = [10, ...list] // -> 10, 1, 2, 3, 4 adds 10 as a new element at the beginning of the list 
const atTheEnd = [...list, 10] // -> 1, 2, 3, 4, 10 adds 10 as a new element at the end of the list 
const middle = [...list.slice(0, 2), 10, ...list.slice(2, 4)] // -> 1, 2, 3, 4, 10 adds 10 as a new element at the end of the list 
const anotherAtTheEnd = list.concat(10) // 1, 2, 3, 4, 10 same as atTheEnd

const adding = [...list, ...[5, 10, -2]] // -> 1, 2, 3, 4, 5, 10, -2
const addingAnotherWay = list.concat([5, 10, -2]) // -> 1, 2, 3, 4, 5, 10, -2

// all of the above examples worked with a list of numbers, the same work for objects as well
const sameGoesForObjects = [...list, { name: 'Agon' }] // -> 1, 2, 3, 4, { name: 'Agon'}

// string formatting 
const name = 'Test'
const lastName = 'Another'
const message = name + ' ' + lastName
const anotherMessage = \`\${name} \${lastName}\`
console.log('anotherMessage', anotherMessage)
`

const javaScriptClasses = `
class User {
	constructor (props) {
		// if its extending some other class
		// super(props)
	}
	
	get name() {
		return "John"
	}

	set name (what) {
		this._name = what
	}

	sayHello() {
		console.log(this.name)
	}
}

let a = new User()
a.sayHello() // "John"
a.name = "Don"
a.sayHello() // "John"

// Extended Examples on method properties, static etc:
class Order {
  name = 'Not Specified'
  static count = 0

  constructor (price, quantity, margin = 0.2) {
    this.price = price
    this.quantity = quantity
    this.margin = margin
    Order.count++ // Increase counter as a property
    Order.increaseCounter() // preferred, calling a static method by using Class name, class method
  }

  get total () {
    return this.price * this.quantity
  }

  compute () {
    return this.price * this.quantity
  }

  computeAsProperty = () => {
    return this.price * this.quantity
  }

  computeOptimized = () => this.price * this.quantity

  static increaseCounter () {
    Order.count++
  }

  static get myCounter () {
    return Order.count
  }
}

const order = new Order(2, 5)
console.log('name', order.name)
console.log('price', order.price)
console.log('total', order.total)
console.log('compute total', order.compute())
console.log('compute total', order.computeAsProperty())
console.log('compute total', order.computeOptimized())

const anotherOrder = new Order(3, 5)
Order.increaseCounter() // class method
// anotherOrder.increaseCounter() // cannot call like this
console.log('counter', Order.count) // counter moved to 3, 2 of them from constructor
console.log('counter', Order.myCounter) // static getter of counter property
`

class Javascript extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Javascript
          <Divider />
        </Typography>
        <Typography variant='p'>
          JavaScript (JS) is a programming language that is used to program the behaviour of the web pages. In this training we are going to work with the JS version ES6. We will utilize the concept of classes, objects, getters, setters and many other new features of this version to the max.
        </Typography>
        <Typography variant='p'>
          While HTML will describe the structure of a web page, web content or a web view, CSS will describe the style and look-and-feel of the view, JavaScript is used to program the logic, behaviour and interactions with these views and in-between them.
        </Typography>
        <Typography variant='p'>
          JavaScript is widely used now in web development but also to build API-s. It is quite flexible and it is considered to be a functional programming oriented language. Its syntax is easy to learn, allows flexibility due to the fact that is dynamically typed and it is considered to be the programming language of the Web.
        </Typography>
        <Typography variant='p'>
          Let us start off by giving some examples of how JavaScript looks like.
        </Typography>
        <Typography variant='p'>
          Here we have a variable declared, and assigned a value of type String:
        </Typography>
        <Code>
          {assignments}
        </Code>
        <Typography variant='p'>
          Javascript DataTypes:
        </Typography>
        <Code>
          {dataTypes}
        </Code>
        <Typography variant='p'>
          So far so good, but what about operators. Here are some examples of them:
        </Typography>
        <Code>
          {operators}
        </Code>
        <Typography variant='p'>
          In JavaScript variables are assigned to “undefined” as they are created. This is known as “Hoisting”. Lets see how Hoisting affects the two below functions:
        </Typography>
        <div className={classes.columns}>
          <div className={classes.columnChild}>
            <Code >
              {hoisting1}
            </Code>
          </div>
          <div className={classes.columnChild}>
            <Code className={classes.columnChild}>
              {hoisting2}
            </Code>
          </div>
        </div>

        <Typography variant='p'>
          At the above examples we always used the keyword “var” for variable declaration, but what else is there to it? Before we explain that, let us talk about the concept of scope. In JavaScript there are two types of scopes:
          <ol>
            <li>Global scope</li>
            <li>Function scope</li>
            <li>Block scope -> enabled using “let’ keyword</li>
          </ol>
        </Typography>
        <Typography variant='p'>
          Now let us see how “var”, “let” and “const” are different with the following example:
        </Typography>
        <Code>
          {variables}
        </Code>

        <Typography variant='p'>
          Furthermore each of the variable types have different methods that you can access and call. Some examples of these and other:
        </Typography>

        <Code>
          {methods}
        </Code>

        <Typography variant='p'>
          Let’s also list some of the interesting methods regarding manipulating arrays.
          The array filter method:
        </Typography>
        <Code>
          {filterCode}
        </Code>
        <Typography variant='p'>
          The filter method takes a function as a parameter which iterates (goes through) all the elements of the array, and depending on the return value of this function: true/false, it keeps/removes the value under test.
        </Typography>

        <Typography variant='p'>
          Next up, the array map method:
        </Typography>

        <Code>
          {mapping}
        </Code>

        <Typography variant='p'>
          Next up, the array map method:
        </Typography>
        <Code>
          {reduce}
        </Code>

        <Typography variant='p'>
          The reduce method, takes a function that has two parameters. The first parameter is the reduce (accumulator) function which has the three parameters:
          <ol>
            <li>First parameter (accumulator) is the total result on the next iteration starting up with the initial value (the second parameter of the reduce method, in the above example 0</li>
            <li>The second parameter (“next”) is the next value coming in from the array</li>
            <li>The third parameter is the index of the second parameter within the array</li>
          </ol>
          The return value of the reducer function becomes the value of the accumulator on the next iteration.
        </Typography>

        <Typography variant='p'>
          More array functions include:
        </Typography>

        <Code>
          {arrayMethods}
        </Code>
        <Typography variant='p'>
          The sorting function above takes a function that has two parameters, the compare function. The first parameter is one of the values and the second parameter is another value that is being compared to the first value. The return function expects the following:
          <ol>
            <li>A negative value if value a is lower than value b</li>
            <li>A positive value if value a is higher than value b</li>
            <li>0 indicating that these two values are equal</li>
          </ol>
          Based on this comparison, the values within the array are sorted. This changes the reference of the list, and does <Bold>not</Bold> create a new list!<br/>In order to do so, make a copy of your array first using [...array] or array.slice(0)
        </Typography>

        <Typography variant='p'>
          Now let’s look at how we can manipulate objects:
        </Typography>
        <Code>
          {objectManipulation}
        </Code>
        <Typography variant='p'>
          Some of the examples above, include the latest features of ES6. For a more extensive list of ES6 features, look it up here: <SimpleLink href="http://es6-features.org">http://es6-features.org</SimpleLink>.
        </Typography>

        <Typography variant='p'>
          Here are some more examples that you might use, and the differences with Vanilla "Pure" Javascript:
        </Typography>
        <Code>
          {esExamples}
        </Code>
        <Typography variant='p'>
          In JavaScript you can also use classes (from OOP oriented languages):
        </Typography>
        <Code>
          {javaScriptClasses}
        </Code>
        // 
        <Typography variant='p'>
          To read more about Classes, follow this link: <SimpleLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes</SimpleLink>.
        </Typography>
        <Typography variant='p'>
          React JS on the other hand also support JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
        </Typography>
        <Typography variant='p'>
          The following is an example of a variable which is neither a string nor HTML
        </Typography>
        <Code>
          {`const element = <h1>Hello, world!</h1>;`}
        </Code>
        <Typography variant='p'>
          To read more about JSX, follow this link: <SimpleLink href="https://reactjs.org/docs/introducing-jsx.html">https://reactjs.org/docs/introducing-jsx.html</SimpleLink>. We are going to use JSX through the training, so you will get acquainted more with it as we move forward.
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(Javascript)
