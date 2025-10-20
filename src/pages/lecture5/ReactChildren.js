/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import ChildrenLogImage from "assets/images/lecture5/children_log.png";
import ToArrayChildrenLog from "assets/images/lecture5/to_array_children_log.png";
import { Bold, Italic } from "presentations/Label";

const styles = ({ typography, size }) => ({
  graphs: {
    display: 'flex',
    width: '100%',
    height: 900,
    position: 'relative',
    backgroundColor: '#CFD8DC'
  },
  card: {
    backgroundColor: 'white',
    width: 280,
    height: 140,
    margin: size.spacing,
    padding: 8,
    display: 'flex',
    position: 'absolute',
    flexFlow: 'column wrap',
    alignItems: 'flex-start'
  },
  graph: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 'auto'
  }
})

const Card = ({ title, titleClass, content, ...other }) => {
  return (
    <div {...other}>
      <Typography variant={'title'} className={titleClass}>{title}</Typography>
      <Typography variant={'p'} className={content} >
        I want to be draggable!
      </Typography>
    </div>
  )
}

const Greetings = (props) => {
  return (
    <Typography variant='p'>Greeting: {props.name}</Typography>
  )
}

const Information = (props) => {
  return (
    <Typography variant='p'>Information: {props.name}</Typography>
  )
}
const Wrapper = (props) => {
  const children = React.Children.toArray(props.children)

  const greetings = children.filter(next => next.type === Greetings)
  const information = children.filter(next => next.type === Information)
  const others = children.filter(next => next.type !== Greetings && next.type !== Information)

  return <div>
    <div>Greetings only:{greetings}</div>
    <div>information's only:{information}</div>
    <div>Others:{others}</div>
  </div>
}

const wrapperToArray = `
const Wrapper = (props) => {
  console.log('children', React.Children.toArray(props.children))
  return props.children
}
`
const organiseContent = `
const Wrapper = (props) => {
  const children = React.Children.toArray(props.children)

  const greetings = children.filter(next => next.type === Greetings)
  const information = children.filter(next => next.type === Information)
  const others = children.filter(next => next.type !== Greetings && next.type !== Information)

  return <div>
    <div>Greetings only:{greetings}</div>
    <div>Informations only:{information}</div>
    <div>Others:{others}</div>
  </div>
}
`
const acceptedComponents = `
const Wrapper = (props) => {
  const children = React.Children.toArray(props.children)

  const greetings = children.filter(next => next.type === Greetings)
  const information = children.filter(next => next.type === Information)
  const others = children.filter(next => next.type !== Greetings && next.type !== Information)
  if (others.length > 0) {
    throw new Error("I cannot accept other types of components! The ones that I handle are Greetings and Information")
  }

  return <div>
    <div>Greetings only:{greetings}</div>
    <div>Informations only:{information}</div>
  </div>
}
`
const manipulatingChildren = `
const Wrapper = (props) => {
  const children = React.Children.toArray(props.children)

  return children
    .filter(next => next.type === Greetings) // filter on Component Type
    .filter(next => next.props.name === 'Agon') // filter on prop
    .reduce((accumulator, next) => [...accumulator, next, next], []) // reduce them, duplicate!
    .map((next, index) => React.cloneElement(next, { key: index, name: 'Overriden' })) // generate new keys and override names!
}
`

const apiExploration = `
const Wrapper = (props) => {
  let children = React.Children.toArray(props.children)
  console.log('length', children.length)
  console.log('same as ', React.Children.count(props.children))

  children.forEach((next) => console.log('child', next))
  React.Children.forEach(props.children, (next) => console.log('same as above child without the key property', next))

  
  const mapped = children.map(next => next)
  const reactMapped = React.Children.map(props.children, next => next)
  console.log('mapped', mapped, 'react mapped', reactMapped)

  let onlyChild = React.Children.only(props.children) // this will throw error in this case!
  return children
}
`

const introCode = `
const Greetings = (props) => {
  return (
    <div>Greeting: {props.name}</div>
  )
}

const Information = (props) => {
  return (
    <div>Information: {props.name} </div>
  )
}

const Wrapper = (props) => {
  console.log('children', props.children)
  return props.children
}

<Wrapper>
  <Greetings name="Other"/>
  <Information name="Info on stock!"/>
  <Greetings name="Agon"/>
</Wrapper>`


const AnotherGreetings = (props) => {
  return (
    <div style={{width: '100%'}}>Greeting: {props.name}</div>
  )
}

const AnotherInformation = (props) => {
  return (
    <div style={{width: '100%'}}>Information: {props.name} </div>
  )
}

const AnotherWrapper = (props) => {
  console.log('children', props.children)
  const myChildren = React.Children
    .toArray(props.children)
    .map(next => <div/>)

    // const myChildren = React.Children.map(props.children, (next) => <div/>)

  return <div>
    {myChildren}
  </div>
}



const FilterChildrenWrapper = (props) => {
  const children = React.Children.toArray(props.children)
  console.log('this.props.children', props.children)
  console.log('children', children)
  const manipulatedChildren = children
    .filter(next => next.type === AnotherGreetings) // filter on Component Type
    .filter(next => next.props.name === 'Agon') // filter on prop
    .reduce((accumulator, next) => [...accumulator, next, next], []) // reduce them, duplicate!
    .map((next, index) => React.cloneElement(next, { key: index, name: 'Overriden' })) // generate new keys and override names!

  return manipulatedChildren
}


class Draggable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  }
  componentWillUnmount () {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }


  onMouseDown = (event) => {
    const { pageX, pageY } = event
    const { x, y } =  this.state
    this.setState({
      location: {
        x: pageX - x,
        y: pageY - y
      }
    })
  }

  onMouseMove = (event) => {
    const { pageX, pageY } = event
    const { location } = this.state
    if (!location) {
      return
    }

    this.setState({
      x: pageX - location.x,
      y: pageY - location.y
    })
  }

  onMouseUp = (event) => {
    this.setState({
      location: null
    })
  }

  render () {
    const { x, y } = this.state
    const { style: styleFromProps, children, ...other } = this.props
    // { height: 50 }
    // const styleFromProps = this.props.style
    const myChild = React.Children.only(children)
    const style = {
      top: y,
      left: x,
      ...styleFromProps
    }
    return <React.Fragment>
      {React.cloneElement(myChild, {
        onMouseDown: this.onMouseDown,
        style
      })}
    </React.Fragment>
  }
}


class ReactChildren extends React.Component {

  render() {
    const { classes, match: { url }, section } = this.props
    const intro = section.children[0]
    const childrenApi = section.children[1]
    const manipulations = section.children[2]
    const exercise = section.children[3]

    const cardProps = {
      titleClass: classes.title,
      className: classes.card,
      content: classes.content
    }
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about the React.Children API! Inspired by <SimpleLink href="https://reactjs.org/docs/react-api.html">https://reactjs.org/docs/react-api.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography id={intro.id} variant={'title'}>
          {intro.display}
        </Typography>

        <Typography variant={'p'}>
          React.Children provides utilities for dealing with the this.props.children opaque data structure. <br/>
          Let's kick off by looking at the following component called Wrapper, which is logging its children:
          <Code>
            {introCode}
          </Code>
          And the output of the log file will look like this:
        </Typography>
        <img src={ChildrenLogImage} />
        <Typography variant={'p'}>
          From the output we can see that React has a way of modeling what the children represent, mainly the type of children, their properties, keys, refs etc.
        </Typography>
        <Typography variant={'p'}>
          Let us explore at what React methods we can use to manipulate children!
        </Typography>
        <Typography id={childrenApi.id} variant={'title'}>
          {childrenApi.display}
        </Typography>

        <Typography variant='p'>
          <Bold>React.Children.toArray(children)</Bold>. This returns the children data structure as a flat array with keys assigned to each child. Useful if you want to manipulate collections of children in your render methods, especially if you want to reorder or slice this.props.children before passing it down.
          Lets see the output after we apply the following change:
          <Code>
            {wrapperToArray}
          </Code>
          Now the output will look like this:
        </Typography>
        <img src={ToArrayChildrenLog} />
        <Typography variant='p'>
          There is a <Bold>key</Bold> difference (no pun intended), literally the key property just got an update based on the definition of the <Italic>React.Children.toArray()</Italic> function.
          <Code>
            {wrapperToArray}
          </Code>
          The idea is that this array is now ready to be manipulated as a JavaScript array basically, that is using the filter, map, reduce functions respectively.
        </Typography>
        <Typography variant='p'>
          The rest of the Children API methods can be derrived from the first call, those are:
          <ol>
            <li>React.Children.map(children, function)</li>
            <li>React.Children.forEach(children, function)</li>
            <li>React.Children.count(children)</li>
            <li>React.Children.only(children)</li>
          </ol>
          The only one proplematic beign the React.Children.only which throws errors if there are more then one children specified, otherwise returns that child.
        </Typography>
        <Typography variant='p'>
          Let us see these methods in action. Check the following example:
          <Code>
            {apiExploration}
          </Code>
          You might be wondering so far, why do we need this? Why are we manipulating children like this? The answer is that using the React.cloneElement(element, props) now we can also change their properties (same as with HOCs but here depending on the incoming children)!
        </Typography>
        <Typography id={manipulations.id} variant={'title'}>
          {manipulations.display}
        </Typography>
        <Typography variant='p'>
          Let us look at the following example:
          <Code>
            {manipulatingChildren}
          </Code>
          The result:
          <FilterChildrenWrapper>
            <AnotherGreetings name="Other" />
            <AnotherInformation name="Info on stock!"/>
            <AnotherGreetings name="Agon"/>
          </FilterChildrenWrapper>
          We can also use this to organise content to certain places:
          <Code>
            {organiseContent}
          </Code>
          {/* <Wrapper>
            <Greetings name="agon"/>
            <Information name="sdagasgh"/>
            <Greetings name="agasdgasgon"/>
            <div>I'm a div</div>
            asdgasg
          </Wrapper> */}
          Or handle only certain types of components:
          <Code>
            {acceptedComponents}
          </Code>
        </Typography>

        <Typography id={exercise.id} variant={'title'}>
          {exercise.display}
        </Typography>
        <Typography variant={'p'}>
          Let us rework the example of last assignment such that we wrap the components:
        </Typography>
        <div className={classes.graphs}>
          {Array(8).fill(null).map((next, index) => {
            return (
              <Draggable key={index}>
                <Card {...cardProps} title={`Draggable Card-${index}`} />
              </Draggable>
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ReactChildren)
