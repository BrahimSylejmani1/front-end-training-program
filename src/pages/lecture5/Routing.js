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
import {Route, Router, Switch} from 'react-router-dom'
import PageLink from "presentations/rows/nav/PageLink";

const styles = ({ typography, size }) => ({
})

const NestedRoute = (props) => {
  return (
    <div>Nested Route</div> 
  )
}
const About = (props) => {
  return (
    <div>About Page</div> 
  )
}
const Users = (props) => {
  return (
    <div>Users Page</div> 
  )
}
const Topic = (props) => {
  return <h3>Requested Param: {props.match.params.id}</h3>
}
const Topics = (props) => {
  const { match } = props
  return (
    <div>
      <h2>Topics</h2>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

const routingIntro = `
const Home = (props) => {
  return (
    <div>Home Page</div> 
  )
}
const About = (props) => {
  return (
    <div>About Page</div> 
  )
}
const Users = (props) => {
  return (
    <div>Users Page</div> 
  )
}

<Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
    <Route path="/users/" component={Users} />
    <Route path="/about/" component={About} />
    <Route path="/" exact component={Home} />
  </div>
</Router>
`

const nestedRoutingExample = `
<Router>
  <div>
    <Header />

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
</Router>`

const topics = `
const Topic = (props) => {
  return <h3>Requested Param: {props.match.params.id}</h3>
}
const Topics = (props) => {
  const { match } = props
  return (
    <div>
      <h2>Topics</h2>

      <Route path={\`\${match.path}/:id\`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}`

const routingExample = `
// when location = { pathname: '/about' }
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>
`

const routingSwitchExample = `
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Switch>`

const pageNotFound = `
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  {/* when none of the above match, <NoMatch> will be rendered */}
  <Route component={NoMatch} />
</Switch>
`

const linkExamples = `
<Link to="/">Home</Link>
// <a href='/'>Home</a>

// location = { pathname: '/react' }
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>
// <a href='/react' className='hurray'>React</a>

<Redirect to="/login" />
`

const propsRenderExample = `
const Home = () => <div>Home</div>;

const App = () => {
  const someVariable = true;

  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        render={props => <About {...props} extra={someVariable} />}
      />
      {/* do not do this */}
      <Route
        path="/contact"
        component={props => <Contact {...props} extra={someVariable} />}
      />
    </Switch>
  );
};
`

const importDynamic = `
import OtherComponent from 'presentations/OtherComponent';

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}

const OtherComponent = React.lazy(() => import('presentations/OtherComponent'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
`

const suspense = `
const OtherComponent = React.lazy(() => import('presentations/OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}`
const multpleChildSuspense = `
const OtherComponent = React.lazy(() => import('presentations/OtherComponent'));
const AnotherComponent = React.lazy(() => import('presentations/AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <OtherComponent />
          <AnotherComponent/>
        </div>
      </Suspense>
    </div>
  );
}`

const wrappedRoute = `
const PrivateRoute = ({ component: Component, ...other}) => {
  return (
    <Route
      {...other}
      render={(props) => {
        const isLoggedIn = true //do the check here
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
        return <Component {...props}/>
      }}
    />
  )
}
`
const PrivateRoute = ({ component: Component, ...other}) => {
  return (
    <Route
      {...other}
      render={(props) => {
        const isLoggedIn = true //do the check here
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
        return <Component {...props}/>
      }}
    />
  )
}

class Routing extends React.Component {
  render() {
    const { classes, match: { url }, section } = this.props
    const intro = section.children[0]
    const matching = section.children[1]
    const renderingProps = section.children[2]
    const navigation = section.children[3]
    const codeSplit = section.children[4]
    console.log('this.props', this.props, url, `${url}/nested/`)
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about how we can handle react routing! Inspired by <SimpleLink href="https://reacttraining.com/react-router/web/guides/quick-start">https://reacttraining.com/react-router/web/guides/quick-start</SimpleLink> and <SimpleLink href="https://reactjs.org/docs/code-splitting.html">https://reactjs.org/docs/code-splitting.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography id={intro.id} variant={'title'}>
          {intro.display}
        </Typography>
        <Typography variant='p'>
          Lets start off by explaining our first Route Component:
          <Code>
            {routingIntro}
          </Code>
          These routes take in a path as a string property, and a component to render in case the path matches. The exact property is to match the path exactly. While <Italic>/about/234</Italic> matches the <Italic>/about/</Italic> path, the same cannot be said for the <Italic>/2345</Italic> with regards to the <Italic>/</Italic> path. <br/>
          <Italic>Note: Instead of writing {`<a href=""/>`} use {`<Link to="/">`}</Italic>
        </Typography>
        <Typography variant='p'>
          Routing is used to split the code that handles a certain url path. This makes it easier to organise the project into multiple components that handle different Pages and or Content
        </Typography>
        <Typography variant='p'>
          The component used in this section are taken from the library <Italic>react-router-dom</Italic> which is a React library to handle routing
          <Code>
            {`import {Route, Router, Switch} from 'react-router-dom'`}
          </Code>
        </Typography>
        <Typography variant='p'>
          A switch component is used when you want to render exactly one of the matched Routes, priority top to bottom. That is it renders the first child <Italic>{`<Route>`}</Italic> or <Italic>{`<Redirect>`}</Italic> that matches the location.
        </Typography> 
        <Typography variant='p'>
          Routing also can be nested, the path of the url that is matched under <Italic>/dashboard/</Italic> can have multiple nested routes like: <Italic>/dashboard/users/</Italic>, <Italic>/dashboard/projects/</Italic> etc. The following route at this section is exactly that, a nested route:
          <Code>{`<Route path={\`\${url}/nested/\`} component={NestedRoute} />`}</Code>
          That is by going at <PageLink inline={true} to={`/lecture/routing/nested/`}>http://localhost:8080/lecture/routing/nested/</PageLink> the Route will match the path and render the component. For all the external links of the app you can use the normal <Italic>{`<a href="google.com">google</a>`}</Italic> tag.
        </Typography>

        <Typography variant='p'>
          Example, lets say that we have the following routing in place:
          <Code>
            {nestedRoutingExample}
          </Code>
          Furthermore the Topics component looks like this:
          <Code>
            {topics}
          </Code>
          Whenever the <Italic>/topics</Italic> path matches the Topics component renders. Then inside the Topics component we have two possible matches: <Italic>/topics</Italic> which is the original path (without an id), an exact path, or <Italic>/topics/:id</Italic> where id can be anything (i.e. /topics/2). Notice how the exact path match is using the render function and not a component to render its content. What would happen if we remove the exact property at the second component?
        </Typography>

        <Typography id={matching.id} variant={'title'}>
          {matching.display}
        </Typography>

        <Typography variant='p'>
          Route matching is done by comparing a <Italic>{`<Route>`}</Italic>'s path prop to the current location’s pathname. When a <Italic>{`<Route>`}</Italic> matches it will render its content and when it does not match, it will render null. A <Italic>{`<Route>`}</Italic> with no path will always match. Example:
          <Code>
            {routingExample}
          </Code>
          At the switch example the same pathname will render only About, since it renders the first match:
          <Code>
            {routingSwitchExample}
          </Code>
        </Typography>

        <Typography variant='p'>
          The <Italic>{`<Switch>`}</Italic> is not required for grouping <Italic>{`<Route>`}</Italic>'s, but it can be quite useful. A <Italic>{`<Switch>`}</Italic> will iterate over all of its children <Italic>{`<Route>`}</Italic> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component):
          <Code>
            {pageNotFound}
          </Code>
        </Typography>
        <Typography id={renderingProps.id} variant={'title'}>
          {renderingProps.display}
        </Typography>

        <Typography variant='p'>
          There are three ways on how to render a component for a given <Italic>{`<Route>`}</Italic>
          <ol>
            <li>component - property as a React Component</li>
            <li>render - property as a function</li>
            <li>children - React Children</li>
          </ol>
          component should be used when you have an existing component (either a React.Component or a stateless functional component) that you want to render. render, which takes an inline function, should only be used when you have to pass in-scope variables to the component you want to render. You should not use the component prop with an inline function to pass in-scope variables because you will get undesired component unmounts/remounts.
          <Code>
            {propsRenderExample}
          </Code>
        </Typography>

        <Typography id={navigation.id} variant={'title'}>
          {navigation.display}
        </Typography>

        <Typography variant='p'>
          React Router provides a <Italic>{`<Link>`}</Italic> component to create links in your application. Wherever you render a <Italic>{`<Link>`}</Italic>, an anchor (<Italic>{`<a>`}</Italic>) will be rendered in your application’s HTML:
          <Code>{linkExamples}</Code>
          The <Italic>{`<NavLink>`}</Italic> is a special type of <Italic>{`<Link>`}</Italic> that can style itself as “active” when its to prop matches the current location.
        </Typography>
        
        
        <Typography variant='p'>
          You can also implement your own routing component by wrapping up and rendering conditional Routes or Redirects like this: 
          <Code>
            {wrappedRoute}
          </Code>
        </Typography>
        
        <Typography id={codeSplit.id} variant={'title'}>
          {codeSplit.display}
        </Typography>

        <Typography variant='p'>
          The best way to introduce code-splitting into your app is through the dynamic <Italic>import()</Italic> syntax. For lets look at React.lazy function and suspense (Examples are at the App.js of this repository). The React.lazy function lets you render a dynamic import as a regular component.
          <Code>
            {importDynamic}
          </Code>
          This will automatically load the bundle (from bundling with Web Pack) containing the OtherComponent when this component gets rendered. React.lazy takes a function that must call a dynamic import(). This must return a Promise (will discuss later) which resolves to a module with a default export containing a React component.
        </Typography>

        <Typography variant='p'>
          If the module containing the OtherComponent is not yet loaded by the time MyComponent renders, we must show some fallback content while we’re waiting for it to load - such as a loading indicator. This is done using the React.Suspense component:
          <Code>
            {suspense}
          </Code>
          You can even wrap multiple lazy components with a single Suspense component:
          
          <Code>
            {multpleChildSuspense}
          </Code>
        </Typography>

      </Fragment>
    )
  }
}

export default withStyles(styles)(Routing)
