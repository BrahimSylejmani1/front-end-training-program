/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import { Bold } from "presentations/Label";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import LoggingImage from 'assets/images/lecture10/logging.png'
import SimpleLink from "presentations/rows/SimpleLink";
import Code from "presentations/Code";
import { CALL_API } from 'middleware/Api'
import { API_URL } from 'Constants'
const styles = ({ typography }) => ({
  root: {},
})

const middleware = `import 'whatwg-fetch'
import { API_URL } from 'Constants'

const callApi = ({ endpoint, options: optionsFromCall }, store) => {
    const url = API_URL + endpoint
    console.log(\`callig API: \${url}\`)
    let options = {
        // default params
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client,
        ...optionsFromCall
    }
    return fetch(url, options)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response
            }
            const error = {
                status: response.status,
                message: response.statusText
            }
            console.log(\`Error at \${url}\`, error)
            throw error
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(\`Success at \${url}\`, json)
            return json
        })
}


export const CALL_API = Symbol('Call API')

/**
 * Intercepts CALL_API actions to perform the call to the API server
 */
export default store => next => action => {
    const call = action[CALL_API]
    // Only apply this middleware if we are calling an API
    if (typeof call === 'undefined') {
        return next(action)
    }
    return callApi(call, store)
}`

const apiCallCode = `
const API_CALL = {
  [CALL_API]: {
    endpoint: "/posts",
  }
}`

const storeWithApi = `
const middleware = [
  routerMiddleware(history),
  api,
  internalThunk,
  internalLogger,
  crashReporter,
].filter(Boolean)

const store = createStore(reducers, applyMiddleware(...middleware))`

const includeHeaders = `
let options = {...optionsFromCall}
let session = store.getState().session
// Override headers to include Authorization
if (session) {
    options = {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': \`\${session.tokenType} \${session.accessToken}\`
        }
    }
}
return fetch(url, options)
...`

const handleGenericResponses = `
if (response.status >= 200 && response.status < 300) {
  return response
}
if (response.status === 401) {
  store.dispatch({ type: "CLEAR_SESSION" })
}
`

const previousPostsActions = `
export const addPost = (post) => {
  return (dispatch) => {
      dispatch(requestData())
      return fetch(\`\${API_URL}/posts\`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(post),
      }).then((response) => {
          console.log('request ended with result', response)
          // check the HTTP status code if it was sucessfull
          if (response.status === 200 || response.status === 201) {
              return response.json()
          }
          throw {
              status: response.status,
              message: response.statusText
          }
      }).then((item) => {
          dispatch(updatePost(item))
          return item
      }, (error) => {
          dispatch(displayMessage(error))
          return error
      })
  }
}

export const deletePost = (post) => {
  return (dispatch) => {
      dispatch(requestData())
      return fetch(\`\${API_URL}/posts/\${post.id}\`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(post),
      }).then((response) => {
          console.log('request ended with result', response)
          // check the HTTP status code if it was sucessfull
          if (response.status === 200 || response.status === 201) {
              return response.json()
          }
          throw {
              status: response.status,
              message: response.statusText
          }
      }).then((item) => {
          dispatch(removePost(item))
          return item
      }, (error) => {
          dispatch(displayMessage(error))
          return error
      })
  }
}

export const fetchPosts = () => {
  return (dispatch) => {

      dispatch (requestData())
      return fetch(\`\${API_URL}/posts\`)
          .then((response) => {
              // check the HTTP status code if it was sucessfull
              if (response.status === 200) {
                  return response.json()
              }
              throw {
                  status: response.status,
                  message: response.statusText
              }
          }).then((items) => {
              dispatch(receiveData(items))
              return items
          }, (error) => {
              dispatch(displayMessage(error))
              return error
          })
  }
}`

const newPostsActions = `
export const addPost = (post) => {
  return (dispatch) => {
      dispatch(requestData())
      return dispatch({
          [CALL_API]: {
              endpoint: \`/posts\`,
              options: {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  body: JSON.stringify(post),
              }
          }
      }).then((item) => {
          dispatch(updatePost(item))
          return item
      }, (error) => {
          dispatch(displayMessage(error))
          return error
      })
  }
}

export const deletePost = (post) => {
  return (dispatch) => {
      dispatch(requestData())
      return dispatch({
          [CALL_API]: {
              endpoint: \`/posts/\${post.id}\`,
              options: {
                  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                  body: JSON.stringify(post),
              }
          }
      }).then((item) => {
          dispatch(removePost(item))
          return item
      }, (error) => {
          dispatch(displayMessage(error))
          return error
      })
  }
}

export const fetchPosts = () => {
  return (dispatch) => {

      dispatch (requestData())
      return dispatch({
              [CALL_API]: {
                  endpoint: \`/posts\`
              }
          }).then((items) => {
              dispatch(receiveData(items))
              return items
          }, (error) => {
              dispatch(displayMessage(error))
              return error
          })
  }
}`

class ApiServices extends React.Component {

  componentDidMount () {
    this.props.callApi()
  }

  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to explain on how we can create our services and a middleware that handles such services!
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Let us further enhance our store to provide our backend middleware that does the backend calls at our  <SimpleLink href="https://www.mockapi.io">Mock API</SimpleLink> at the url: <SimpleLink href={API_URL}>URL</SimpleLink>.
          <Code>
            {middleware}
          </Code>
          And plug it in by doing:
          <Code>
            {storeWithApi}
          </Code>
          Every time we call an action that looks like this:
          <Code>
            {apiCallCode}
          </Code>
          Our middleware will point to the right URL and wrap the response!
        </Typography>

        <Typography variant='p'>
          By doing so, we have organised our API in such a way that we can send attach lets say headers to each of the request by providing user access tokens:
          <Code>
            {includeHeaders}
          </Code>
          We can handle generic responses by dispatching back to the store:
          <Code>
            {handleGenericResponses}
          </Code>
        </Typography>
        
        <Typography variant='p'>
          From our previous API actions:
          <Code>
            {previousPostsActions}
          </Code>
          We can now achieve the same thing using our middleware by doing:
          <Code>
            {newPostsActions}
          </Code>
          Here we also do some logging, in case we want to see how requests got completed and how they returned a value!
        </Typography>
      </Fragment>
    )
  }
}

const API_CALL = {
  [CALL_API]: {
    endpoint: "/posts",
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  callApi: () => dispatch(API_CALL)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ApiServices))
