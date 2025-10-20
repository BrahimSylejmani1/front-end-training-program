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
import ReactRedux from 'assets/images/lecture8/react_redux.png';
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

const isntallationCode = `npm install chai --save-dev
npm install jest --save-dev>
npm install enzyme --save-dev>
npm install enzyme-adapter-react-16 --save-dev
npm install redux-mock-store --save-dev
npm install jest-fetch-mock --save-dev`

const simpleExpectExample = `
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});`

const objectAssignmentExample = `
test('object assignment', () => {
  let data = {one: 1}
  data = {...data, two: 2}
  expect(data).toEqual({one: 1, two: 2})
})`

const positiveNumbersExample = `
test('adding positive numbers is not zero', () => {
	let a = 4
	let b = 2
	expect(a + b).not.toBe(0)
})`

const truthinessExample = `
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})`

const numbersExample = `
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})`

const floatingPointsExample = `
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3)           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})`

const stringsExample = `
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})`

const arraysExample = `
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

test('array filter', () => {
	let original = ['John', 'Doe']
	let filtered = original.filter(next => next !== 'John')
  expect(filtered).toStrictEqual(['Doe'])
})`

const exceptionsExample = `
const compileAndroidCode = () => {
  throw 'you are using the wrong JDK'
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})`

const apiExample = `
// describe a set of test cases
describe('testing api', () => {
	// before each of them, reset the mocked reponse
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls google and returns data to me', () => {
		// lets mock the response of the next call
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    fetch('https://google.com').then(res => res.json()).then(res => {
      expect(res.data).toEqual('12345')
    })

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  })
})`

const promisesExample = `
const fetchData = () => {
	return Promise.resolve('peanut butter')
}
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})`

const promiseResolveExample = `
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter')
})`

const promisesFailExample = `
const fetchDataFailure = () => {
	return Promise.reject('error')
}
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataFailure().catch(e => expect(e).toMatch('error'));
})`

const promiseRejectExample = `
test('the fetch fails with an error', () => {
  return expect(fetchDataFailure()).rejects.toMatch('error')
})`


class Testing extends React.Component {

  render() {
    const { classes, section } = this.props
    const gettingStarted = section.children[0]
    const commonMatchers = section.children[1]
    const truthiness = section.children[2]
    const numbers = section.children[3]
    const strings = section.children[4]
    const arraysAndIterables = section.children[5]
    const exceptions = section.children[6]
    const promises = section.children[7]
    const api = section.children[8]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to introduce the concept of Testing our Components and Code!
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='title' id={gettingStarted.id}>
          {gettingStarted.display}
        </Typography>
        <Typography variant='p'>
          In order to start also testing our code, to make sure that every incremental update doesn't influence our current components, reducers, their actions and other Javascript code we are going to setup test cases!
        </Typography>
        <Typography variant='p'>
          To get started these are the libraries that we are going to use:
            <ol>
            <li><SimpleLink href="https://jestjs.io/">Jest JS</SimpleLink></li>
            <li><SimpleLink href="https://airbnb.io/enzyme/">Enzyme</SimpleLink></li>
            <li><SimpleLink href="https://www.chaijs.com/">Chai</SimpleLink></li>
            <li><SimpleLink href="https://github.com/jefflau/jest-fetch-mock">Jest Fetch Mock Api</SimpleLink> and </li>
            <li><SimpleLink href="https://github.com/dmitry-zaets/redux-mock-store">Redux Mock Api</SimpleLink></li>
          </ol>
          In this section we are going to use onlt <Bold>Jest JS</Bold> and <Bold>Jest Fetch Mock Api</Bold>
        </Typography>
        <Typography variant='p'>
          In order to have these libraries setup we have installed the following dependencies:
          <Code>
            {isntallationCode}
          </Code>
          All the libraries above, are installed only as development dependencies! We are going to use these to run execute test scripts before we deploy our code!
        </Typography>
        <Typography variant='p'>
          Furthermore in order to configure these modules we have added the jest config file located at the root directory called <Italic>jest.config.js</Italic> That file is configured to setup test cases using the respective files located at <Italic>/src/setup</Italic>
        </Typography>
        <Typography variant='p'>
          Our <Italic>package.json</Italic> has a new script called test, which we can invoke like this:
          <Code>
            {`npm test`}
          </Code>
          Or if we don't want to do it via npm we can also call:
          <Code>
            {`jest`}
          </Code>
          In order to output code coverage, that is, how much of the code was covered when our test cases ran we can use:
          <Code>
            {`jest --coverage`}
          </Code>
          This will output the coverage at your terminal but also a detailed coverage report at directory: <Italic>/tests/coverage/lcov-report</Italic>
        </Typography>
        <Typography variant='p'>
          In some cases Windows doesn't add the path correctly on local installed packages, and it will output jest not recognise as an external command. If that happens run:
          <Code>
            {`npm install jest -g`}
          </Code>
          To install Jest as a global package!
        </Typography>
        <Typography variant='title' id={commonMatchers.id}>
          {commonMatchers.display}
        </Typography>
        <Typography variant='p'>
          The simplest way to test a value is with exact equality:
          <Code>
            {simpleExpectExample}
          </Code>
          In this code, expect(2 + 2) returns an "expectation" object. You typically won't do much with these expectation objects except call matchers on them. In this code, .toBe(4) is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you.
        </Typography>
        <Typography variant='p'>
          toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
          <Code>
            {objectAssignmentExample}
          </Code>
          toEqual recursively checks every field of an object or array.
        </Typography>
        <Typography variant='p'>
          You can also test for the opposite of a matcher:
          <Code>
            {positiveNumbersExample}
          </Code>
        </Typography>

        <Typography variant='title' id={truthiness.id}>
          {truthiness.display}
        </Typography>
        <Typography variant='p'>
          In tests you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.
          <ul>
            <li>toBeNull matches only null</li>
            <li>toBeUndefined matches only undefined</li>
            <li>toBeDefined is the opposite of toBeUndefined</li>
            <li>toBeTruthy matches anything that an if statement treats as true</li>
            <li>toBeFalsy matches anything that an if statement treats as false</li>
          </ul>
          For example:
          <Code>
            {truthinessExample}
          </Code>
        </Typography>

        <Typography variant='title' id={numbers.id}>
          {numbers.display}
        </Typography>
        <Typography variant='p'>
          Most ways of comparing numbers have matcher equivalents.
          <Code>
            {numbersExample}
          </Code>
          For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
          <Code>
            {floatingPointsExample}
          </Code>
        </Typography>
        
        <Typography variant='title' id={strings.id}>
          {strings.display}
        </Typography>
        <Typography variant='p'>
          You can check strings against regular expressions with toMatch:
          <Code>
            {stringsExample}
          </Code>
        </Typography>

        <Typography variant='title' id={arraysAndIterables.id}>
          {arraysAndIterables.display}
        </Typography>
        <Typography variant='p'>
          You can check if an array or iterable contains a particular item using toContain:
          <Code>
            {arraysExample}
          </Code>
        </Typography>

        <Typography variant='title' id={exceptions.id}>
          {exceptions.display}
        </Typography>
        <Typography variant='p'>
          If you want to test that a particular function throws an error when it's called, use toThrow.
          <Code>
            {exceptionsExample}
          </Code>
        </Typography>
        <Typography variant='title' id={promises.id}>
          {promises.display}
        </Typography>
        <Typography variant='p'>
          In order to test our promises, the only thing that we have to do is run it as a normal promise, when the response comes back we ommit the result! The only thing we need to do in this case is to return the promise call within an <Italic>it</Italic> block, like this:
          <Code>
            {promisesExample}
          </Code>
        </Typography>
        <Typography variant='p'>
          If you expect a promise to be rejected use the .catch method. Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test.
          <Code>
            {promisesFailExample}
          </Code>
        </Typography>

        <Typography variant='p'>
          You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.
          <Code>
            {promiseResolveExample}
          </Code>
          If you expect a promise to be rejected use the .rejects matcher. It works analogically to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.
          <Code>
            {promiseRejectExample}
          </Code>
        </Typography>
        <Typography variant='title' id={api.id}>
          {api.display}
        </Typography>
        <Typography variant='p'>
          For the following examples we have setup the <SimpleLink href="https://github.com/jefflau/jest-fetch-mock">Jest Fetch Mock</SimpleLink> librari. Using that, now our fetch Api call has been mocked, and it behaves like this:
          <Code>
            {apiExample}
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Testing))
