/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

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

const hocComponent = `const EnhancedComponent = higherOrderComponent(WrappedComponent)`

const commentList = `
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
`

const blogPost = `
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
`

const componentsWithSubscription = `
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)
`

const withSubscriptionFunction = `
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}`

const noMutations = `
function logProps(InputComponent) {
  InputComponent.prototype.componentWillReceiveProps = (nextProps) => {
    console.log('Current props: ', this.props);
    console.log('Next props: ', nextProps);
  };
  // The fact that we're returning the original input is a hint that it has
  // been mutated.
  return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);`

const noMutationsGood = `
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}`

const hocRender = `
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}`

const singleArgumentHoc = `const NavbarWithRouter = withRouter(Navbar)`
const multipleArgumentsHoc = `const CommentWithRelay = Relay.createContainer(Comment, config)`
const reduxHoc = `
// React Redux's \`connect\`
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);`

const breakReduxUp = `
// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList)`

const wrapDisplayNameCode = `
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = \`WithSubscription(\${getDisplayName(WrappedComponent)})\`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}`

const Card = (props) => {
  const { title, titleClass, content, ...other } = props
  return (
    <div {...other}>
      <Typography variant={'title'} className={titleClass}>{title}</Typography>
      <Typography variant={'p'} className={content} >
        I want to be draggable!
      </Typography>
    </div>
  )
}

// x, y = 0

const draggable = (WrappedComponent) => {
  return class extends React.Component {
    
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
      const { onMouseDown } = this.props
      onMouseDown && onMouseDown(event)
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
      const { style: styleFromProps, onMouseDown, onMouseUp, onMouseMove, ...other } = this.props
      // { height: 50 }
      // const styleFromProps = this.props.style
      const style = {
        top: y,
        left: x,
        ...styleFromProps
      }
      return (
        <WrappedComponent
          onMouseDown={this.onMouseDown}
          style={style}
          {...other} 
        />
      )
    }
  }
}

const DraggableCard = draggable(Card, false)
const DraggableButton = draggable(Button, true)


// function withSomething (WrappedComponent) {
//   return class extends React.Component {

//     render() {
//       const { perdorim, ...other} = this.props
//       return <WrappedComponent {...other} />
//     }
//   }
// }

// // HOC function
// const withSomething = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }


// // A Function that returns a HOC function
// const connect = (commentSelector, commentActions) => {
//   return withSomething
// }


// const hoc = connect(commentSelector, commentActions)
// const ConnectedComment = hoc(CommentList);

// const ConnectedComment = connect(commentSelector, commentActions)(CommentList);



class HigherOrderComponents extends React.Component {

  render() {
    const { classes, match: { url }, section } = this.props
    const intro = section.children[0]
    const compositionVsMutation = section.children[1]
    const unrelatedProps = section.children[2]
    const maximiseComposability = section.children[3]
    const wrapDisplayName = section.children[4]
    const exercise = section.children[5]

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
            A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.! Inspired by <SimpleLink href="https://reactjs.org/docs/higher-order-components.html">https://reactjs.org/docs/higher-order-components.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography id={intro.id} variant={'title'}>
          {intro.display}
        </Typography>
        <Typography variant='p'>
          A higher-order component is a function that takes a component and returns a new component.:
          <Code>
            {hocComponent}
          </Code>
          Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
        </Typography>

        <Typography variant='p'>
          Components are the primary unit of code reuse in React. However, you’ll find that some patterns aren’t a straightforward fit for traditional components.
          </Typography>
        <Typography variant='p'>
          For example, say you have a CommentList component that subscribes to an external data source to render a list of comments:
          <Code>
            {commentList}
          </Code>
        </Typography>

        <Typography variant='p'>
          Later, you write a component for subscribing to a single blog post, which follows a similar pattern:
          <Code>
            {blogPost}
          </Code>
        </Typography>

        <Typography variant='p'>
          CommentList and BlogPost aren’t identical — they call different methods on DataSource, and they render different output. But much of their implementation is the same:
          <ol>
            <li>On mount, add a change listener to DataSource.</li>
            <li>Inside the listener, call setState whenever the data source changes.</li>
            <li>On unmount, remove the change listener.</li>
          </ol>
          You can imagine that in a large app, this same pattern of subscribing to DataSource and calling setState will occur over and over again. We want an abstraction that allows us to define this logic in a single place and share it across many components. This is where higher-order components excel.
        </Typography>

        <Typography variant='p'>
          We can write a function that creates components, like CommentList and BlogPost, that subscribe to DataSource. The function will accept as one of its arguments a child component that receives the subscribed data as a prop. Let’s call the function withSubscription:
          <Code>
            {componentsWithSubscription}
          </Code>
          The first parameter is the wrapped component. The second parameter retrieves the data we’re interested in, given a DataSource and the current props.
        </Typography>

        <Typography variant='p'>
          When CommentListWithSubscription and BlogPostWithSubscription are rendered, CommentList and BlogPost will be passed a data prop with the most current data retrieved from DataSource:
          <Code>
            {withSubscriptionFunction}
          </Code>
        </Typography>

        <Typography id={compositionVsMutation.id} variant={'title'}>
          {compositionVsMutation.display}
        </Typography>
        <Typography variant='p'>
          Don’t Mutate the Original Component. Use Composition:
          <Code>
            {noMutations}
          </Code>
          There are a few problems with this. One is that the input component cannot be reused separately from the enhanced component. More crucially, if you apply another HOC to EnhancedComponent that also mutates componentWillReceiveProps, the first HOC’s functionality will be overridden! This HOC also won’t work with function components, which do not have lifecycle methods.
        </Typography>

        <Typography variant='p'>
          Instead of mutation, HOCs should use composition, by wrapping the input component in a container component:
          <Code>
            {noMutationsGood}
          </Code>
          This HOC has the same functionality as the mutating version while avoiding the potential for clashes. It works equally well with class and function components. And because it’s a pure function, it’s composable with other HOCs, or even with itself.
        </Typography>

        <Typography variant='p'>
          You may have noticed similarities between HOCs and a pattern called container components (which we have mentioned before). Container components are part of a strategy of separating responsibility between high-level and low-level concerns. Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI. HOCs use containers as part of their implementation. You can think of HOCs as parameterized container component definitions.
        </Typography>

        <Typography id={unrelatedProps.id} variant={'title'}>
          {unrelatedProps.display}
        </Typography>
        <Typography variant='p'>
          Pass Unrelated Props Through to the Wrapped Component. What ever you are getting as props at the render method, the HOC should pass all of those down to the original component. HOCs should only add features. The component that is returned from a HOC has a similar interface to the wrapped component. Most HOCs contain a render method that looks something like this:
          <Code>
            {hocRender}
          </Code>
        </Typography>
        <Typography id={maximiseComposability.id} variant={'title'}>
          {maximiseComposability.display}
        </Typography>
        <Typography variant='p'>
          Maximizing Composability is the goal. Not all HOCs look the same. Sometimes they accept only a single argument, the wrapped component:
          <Code>
            {singleArgumentHoc}
          </Code>
          Usually, HOCs accept additional arguments. In this example from Relay, a config object is used to specify a component’s data dependencies:
          <Code>
            {multipleArgumentsHoc}
          </Code>
          The most common signature for HOCs looks like this:
          <Code>
            {reduxHoc}
          </Code>
          What?! If you break it apart, it’s easier to see what’s going on:
          <Code>
            {breakReduxUp}
          </Code>
          In other words, connect is a higher-order function that returns a higher-order component!
        </Typography>

        <Typography id={wrapDisplayName.id} variant={'title'}>
          {wrapDisplayName.display}
        </Typography>

        <Typography variant='p'>
          Wrap the Display Name for Easy Debugging. The container components created by HOCs show up in the React Developer Tools like any other component. To ease debugging, choose a display name that communicates that it’s the result of a HOC.
        </Typography>

        <Typography variant='p'>
          The most common technique is to wrap the display name of the wrapped component. So if your higher-order component is named withSubscription, and the wrapped component’s display name is CommentList, use the display name WithSubscription(CommentList):
          <Code>
            {wrapDisplayNameCode}
          </Code>
        </Typography>
        <Typography id={exercise.id} variant={'title'}>
          {exercise.display}
        </Typography>

        <div className={classes.graphs}>
          {Array(8).fill(null).map((next, index) => {
            return <DraggableCard key={index} {...cardProps} title={`Draggable Card-${index}`} />
          })}
          <DraggableButton onMouseDown={(event) => console.log('Hey!! I want to listen as well')} style={{ top:0, height: 50 }}> Hi there I'm a draggable button </DraggableButton>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HigherOrderComponents)
