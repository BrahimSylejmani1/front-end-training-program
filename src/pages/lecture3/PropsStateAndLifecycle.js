/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import lifecycle from 'assets/images/lecture3/lifecycle.png';
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";
import Code from "presentations/Code";

const styles = ({ typography, size }) => ({
  root: {}
})

const tickerCode = `
class Playground extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      interval: 0
    }
  }

  componentDidMount () {
    this.tick()
  }

  tick() {
    this.timer = setTimeout(() => {
      const { interval } = this.state
      this.setState({
        interval: interval + 1
      })
      this.tick()
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.interval % 2 === 0
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    // What will I do, when the previous props, and previous state changed?
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    const { interval } = this.state
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Playground
          <Typography>This will be a page dedicated for experiments and fooling around. Do what ever you need right here, use the playground folder at the project to create more files for whatever reason.</Typography>
          <Divider />
        </Typography>

        {\`Interval: \${interval}\`}
      </Fragment>
    )
  }
}

export default withStyles(styles)(Playground)
`

const renderExampleCode = `
class Hello extends React.Component{
  render(){
     return <div>Hello {this.props.name}</div>
  }
}
`

const constructorCode = `
constructor (props) {
  super (props)
  this.state = {
    interval: 0
  }
}
`

const componentDidMountCode = `
componentDidMount () {
  setTimeout(() => {
    this.tick()
  }, 1000)
}
`

const shouldComponentUpdateCode = `
shouldComponentUpdate (nextProps, nextState) {
  return nextState.interval % 2 === 0
}
`

const componentDidUpdateCode = `
componentDidUpdate (prevProps, prevState) {
  // What will I do, when the previous props, and previous state changed?
}
`

const cleanCode = `
componentWillUnmount () {
  clearInterval(this.timer)
}
`

const Italic = (props) => {
  return <label style={{display: 'contents', fontStyle: 'italic', paddingLeft: 4, paddingRight: 4}}>{props.children}</label>
}

const BoldItalic = (props) => {
  return <label style={{display: 'contents', fontWeight: 'bold', fontStyle: 'italic', paddingLeft: 4, paddingRight: 4}}>{props.children}</label>
}
const Bold = (props) => {
  return <label style={{display: 'contents', fontWeight: 'bold', paddingLeft: 4, paddingRight: 4}}>{props.children}</label>
}

class PropsStateAndLifecycle extends React.Component {
  render() {
    const { classes, section } = this.props
    let render = section.children[0]
    let componentDidMount = section.children[1]
    let shouldComponentUpdate = section.children[2]
    let componentDidUpdate = section.children[3]
    let componentWillUnmount = section.children[4]
    let others = section.children[5]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about React Component lifecycle events. Inspired by <SimpleLink href="https://reactjs.org/docs/state-and-lifecycle.html">https://reactjs.org/docs/state-and-lifecycle.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Let us explore what else can we learn about the behaviour and the lifecycle of a React Component.
        </Typography>

        <Typography variant='p'>
          A lifecycle basically means the entire journey of a component from its creation until its deletion. A React Component starts the creation with <Italic>constructor</Italic> going forward with a render of the UI based on the initial state and props. Every state and props update triggers a re-render, followed by one of the respective lifecycle methods
        </Typography>

        <Code>
          {constructorCode}
        </Code>

        <Typography variant='p'>
          A React component has three main categories: Mounting, Updating and Un-mounting. Lets look at the each lifecycle method one by one, starting with the render method which is also the most used one:
        </Typography>

        <Typography id={render.id} variant={'title'}>
          {render.display}
        </Typography>
        <Typography variant='p'>
          Consider the following example:
          <Code>
            {renderExampleCode}
          </Code>
          As you can see in the example above, the <Italic>render()</Italic> method returns JSX that is displayed in the UI. A <Italic>render()</Italic> can also return a null if there is nothing to render for that component. One thing to keep in mind is that, the render method cannot modify the state. Don't use the <Italic>setState</Italic> (change the state) within this lifecycle, since you can get into loops of renders. Use the other appropriate lifecycle methods to do that.
        </Typography>
        <Typography id={componentDidMount.id} variant={'title'}>
          {componentDidMount.display}
        </Typography>
        <Typography>
          Is called as soon as the UI rendered and the component has finished mounted. This is where you can initiate loading resources, subscribing to events, initiaiting listeners etc. Here you can use the <Italic>setState</Italic> function of the React component, unlike the render method, which should be pure.
          <Code>
            {componentDidMountCode}
          </Code>
        </Typography>

        <Typography id={shouldComponentUpdate.id} variant={'title'}>
          {shouldComponentUpdate.display}
        </Typography>

        <Typography>
          The return of this lifecycle method would indicate whether the component should re-render itself and any of the children based on state or props update. This method accepts true or false, or if you put it in javascript words: false, 0, null, undefined, or anything else.
          <Code>
            {shouldComponentUpdateCode}
          </Code>
        </Typography>

        <Typography id={componentDidUpdate.id} variant={'title'}>
          {componentDidUpdate.display}
        </Typography>
        <Typography>
          After the component did re-render based on changed state or props (not activated the first time the component is rendered) this lifecycle method is called. Depending on the changes that caused the component to re-render, you can react over here. Following use cases may apply:
          <ul>
            <li>If my configuration changed, lets reload the resource from an API</li>
            <li>Move the scroll position somewhere</li>
            <li>Recalculate the width of a child etc</li>
          </ul>
          <Code>
            {componentDidUpdateCode}
          </Code>
        </Typography>
        <Typography id={componentWillUnmount.id} variant={'title'}>
          {componentWillUnmount.display}
        </Typography>
        <Typography>
          Before the component un-mounts this method is called for reasons to clean up resources. If you initiated a timer, or did a call at the API, this is the moment to cancel or clean them up, so that you don't have unnecessary resource leakage
          <Code>
            {cleanCode}
          </Code>
        </Typography>
        <Typography id={others.id} variant={'title'}>
          {others.display}
        </Typography>

        <Typography>
          There are other lifecycle which got recently introduced like the <Italic>getDerivedStateFromProps</Italic>, <Italic>getSnapshotBeforeUpdate</Italic> <Italic>getDerivedStateFromError</Italic> and <Italic>componentDidCatch</Italic> which we will discuss later on! If you want to get a more detailed description about all React component API refer to this link <SimpleLink href="https://reactjs.org/docs/react-component.html">https://reactjs.org/docs/react-component.html</SimpleLink>
        </Typography>

        <Typography variant='p'>
          Putting it all together you get a nice diagram. In the latest React release (16.4) according to the latest documentation the following lifecycle is enforced:
          <img src={lifecycle} />
        </Typography>
        <Typography variant='p'>
          Image taken from: <SimpleLink href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</SimpleLink>. Try the <Italic>Show less common lifecycles</Italic> checkbox
        </Typography>
        <Typography variant='p'>
          Putting it all together we get:
        </Typography>
        <Code>
          {tickerCode}
        </Code>
        <Typography variant='p'>
          When the component first mounts and the UI is rendered, we want to initiate a listener that sets off every 1 second (1000 miliseconds). Every time this interval occurese the state gets updated to increment to the next state. The component updates only at the intervals of 2, that is only on even numbers. Before the component is unmounted we release the timer as well so that we don't have any more listeners triggering our tick method.
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(PropsStateAndLifecycle)
