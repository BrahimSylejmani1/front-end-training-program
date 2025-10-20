/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Italic } from "presentations/Label";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import Posts from 'pages/lecture9/examples/Posts'
import PostsExercise from 'pages/lecture9/examples/PostsExercise'
import { API_URL } from 'Constants';
const styles = ({ typography }) => ({
  root: {},
})


const postsExample = `
class Posts extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch(\`\${API_URL}/posts\`)
      .then((response) => {
          // check the HTTP status code if it was sucessfull
          if (response.status === 200) {
            return response.json()
          }
          throw {
            code: response.status,
            message: response.statusText
          }
        }
      ).then((response) => {
        this.setState({
          items: response
        })
      }, (error) => {
        console.log('error', error)
        this.setState({
          message: error.message
        })
      })
  }

  renderPost = (item, index) => {
    return <Card style={{width: 200, height: 200, margin: 8, padding: 8 }} key={item.id}>
      <Typography variant='p'>
        {item.user}
      </Typography>
    
      <img src={item.avatar}/>
    </Card>
  }

  render () {
    const { items, message } = this.state
    return <Fragment>
      {message && <Typography variant='p'>{message}</Typography>}
      <div style={{ display: 'flex', flexFlow: 'row wrap'}}>
        {items.map(this.renderPost)}
      </div>
    </Fragment>
  }
}
`

const fetchAPIExample = `
import 'whatwg-fetch'
// initiate a call to a URL, by default its a GET request!
fetch(\`\${API_URL}/posts\`)
  .then((response) => {
      // check the HTTP status code if it was sucessfull
      if (response.code === 200) {
        return response.json()
      }
      throw {
        code: response.status,
        message: response.statusText
      }
    }
  )
  .then((response) => {
    console.log('json', response)
  }, (error) => {
    console.log('error', error)
  })
`
class ReactAsynch extends React.Component {
  render() {
    const { classes, section } = this.props
    const example = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going explain how are we going to integrate asynchronous web calls with a React Component! For this we are going to use the fetch API. Inspired by: <SimpleLink href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</SimpleLink>
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          In order to continue we need to install the following dependency:
          <Code>
            {`npm install whatwg-fetch --save`}
          </Code>
          This is basically a polyfill to enable a web browser feature that is not supported (Internet Explorer). Definition: In web development, a polyfill is code that implements a feature on web browsers that do not support the feature.
        </Typography>

        <Typography variant='p'>
          Furthermore, we are going to use the following service: <SimpleLink href="https://www.mockapi.io">Mock API</SimpleLink> to simulate an API server that we can do requests to! The communication is all done using JSON request and response! The API generated is fully RESTful! We are going to look into more details when it comes to RESTful API-s later on. If you want to get a head start read the following guide: <SimpleLink href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</SimpleLink>
        </Typography>
        <Typography variant='p'>
          For now we are going to focus on some of the main properties of a RESTfull API, That is an api that adhere to the REST architectural constraints. HTTP-based RESTful APIs are defined with the following aspects:
          <ol>
            <li>A base URI, such as http://api.example.com/collection/</li>
            <li>Standard HTTP methods (e.g., GET, POST, PUT, PATCH and DELETE)</li>
          </ol>
          Relationship between URI and HTTP methods can be explained like this:
          <ol>
            <li>GET: Retrieve the URIs of the member resources of the collection resource in the response body. I.E. My songs list!</li>
            <li>POST: Create a member resource in the collection resource using the instructions in the request body. The URI of the created member resource is automatically assigned and returned in the response Location header field! I.E. Add a song to my list!</li>
            <li>PUT: Replace all the representations of the member resources of the collection resource with the representation in the request body, or create the collection resource if it does not exist! Change the song title to something else, or create it if it doesn't exist</li>
            <li>PATCH: Update all the representations of the member resources of the collection resource using the instructions in the request body, or may create the collection resource if it does not exist! Initialise or put a song into my list!</li>
            <li>DELETE: Delete all the representations of the member resources of the collection resource. Well, I don't like this song anymore, remove it!</li>
          </ol>
        </Typography>
        <Typography variant='p'>
          Every HTTP request will have to respond with one of the following status codes, inspired by <SimpleLink href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">HTTP status Codes</SimpleLink>:
          <ol>
            <li>1**: Information Responses</li>
            <li>2**: Successful responses</li>
            <li>3**: Redirection messages</li>
            <li>4**: Client error responses</li>
            <li>5**: Server error responses</li>
          </ol>
          Or in a nutshell:
          <ol>
            <li>1**: Hold on!</li>
            <li>2**: Here you go!</li>
            <li>3**: Go away!</li>
            <li>4**: You fucked up!</li>
            <li>5**: I fucked up!</li>
          </ol>
        </Typography>

        <Typography variant='title' id={example.id}>
          {example.display}
        </Typography>
        <Typography variant='p'>
          For that we have declared an endpoint: <Italic>/posts</Italic> at the following URL: <SimpleLink href={`${API_URL}/posts`}>posts</SimpleLink>. That is a place where we can perform API calls for a specific resource, in this case user posts! The way we initiate a call using the fetch api is:
          <Code>
            {fetchAPIExample}
          </Code>
          Where do we perform the requests? What do we do until we get a response? Lets look at the following code:
          <Code>
            {postsExample}
          </Code>
          Results below:
        </Typography>
        <Posts/>
        <Typography variant='p'>
          Lets further enhance this example by implementing the other methods:
        </Typography>
        <PostsExercise />
      </Fragment>
    )
  }
}

export default withStyles(styles)(ReactAsynch)
