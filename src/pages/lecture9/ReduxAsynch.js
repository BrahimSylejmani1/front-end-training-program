/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import RemoveIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Italic } from "presentations/Label";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addPost, deletePost, fetchPosts } from 'reducers/posts/PostsActions';
const styles = ({ typography }) => ({
  root: {},
  indicator: {},
  action: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'space-between',
    width: '100%'
  },
  error: {
    color: 'red',
    width: 'auto'
  }
})

const asynchAction = `
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts())
O
const fetchPosts = () => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch) => {

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(\`\${API_URL}/posts\`)
        .then((response) => {
            // check the HTTP status code if it was successful
            if (response.status === 200) {
                return response.json()
            }
            throw {
                status: response.status,
                message: response.statusText
            }
        })
  }
}
`

const reduxPlug = `
const middleware = [
  routerMiddleware(history),
  thunk,
  process.env.NODE_ENV === 'development' && loggerMiddleware
].filter(Boolean)

const store = createStore(reducers, applyMiddleware(...middleware))
`

const reduxThunkSetup = `npm install redux-thunk --save`

class ReduxAsynch extends React.Component {

  state = {
    post: {
      user: '',
      avatar: ''
    }
  }
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  onRequestEdit = (item, event) => {
    event.preventDefault()

    this.setState({
      post: item
    })
  }

  onSave = (event) => {
    event.preventDefault()
    const { addPost } = this.props
    const { post } = this.state
    addPost(post).then(() => {
      this.setState({
        post: {
          user: '',
          avatar: ''
        }
      })
    })
  }

  onRequestDelete = (item, event) => {
    event.preventDefault()
    const { deletePost } = this.props
    deletePost(item)
  }

  onValueChanged = (event) => {
    const { name, value } = event.target
    this.setState((prevState) => ({
      post: {
        ...prevState.post,
        [name]: value
      }
    }))
  }

  render() {
    const { classes, section, fetchPosts, request, items } = this.props
    const { post } = this.state
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going explain how are we going to integrate asynchronous web calls with our Redux Store! We are still going to use the Fetch API at this section as well!
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          In order to get started with Redux asynchronous actions, we have to install the redux-thunk middleware. That is done using:
          <Code>
            {reduxThunkSetup}
          </Code>
          And plug it into the middleware of Redux like this:
          <Code>
            {reduxPlug}
          </Code>
        </Typography>
        <Typography variant='p'>
          To get started with this let us look at our first asynchronous action at Redux:
          <Code>
            {asynchAction}
          </Code>
          In between the promise initialising and returning values we can also send actions to the store, such that we update the state of it depending on the results and or state of the request execution!
        </Typography>
        <Typography variant='p'>
          For that I've setup beforehand some Actions and Actions Types as well as a new Reducer for the exercise that we are going to perform today! All the underlying code is located at <Italic>/src/reducers/posts</Italic>
        </Typography>

        <TextField onChange={this.onValueChanged} label="User" fullWidth name="user" value={post.user} />
        <TextField onChange={this.onValueChanged} label="Avatar" fullWidth name="avatar" value={post.avatar} />
        <div className={classes.action}>
          <Button onClick={this.onSave} disabled={request.isLoading}>
            {request.isLoading ? 'Loading' : 'Add/Edit Post'}
          </Button>
          {request.isLoading && <div className={classes.indicator}>
            <CircularProgress/>
          </div>}
          {request.message && <Typography className={classes.error}>
            Could not complete request. Error: {request.message}
          </Typography>}
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Avatar
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(next => (
              <TableRow key={next.id}>
                <TableCell>{next.user}</TableCell>
                <TableCell>{next.avatar}</TableCell>
                <TableCell>
                  <IconButton onClick={this.onRequestEdit.bind(this, next)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={this.onRequestDelete.bind(this, next)}>
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.posts.items,
  request: state.posts.request
})
const mapDispatchToProps = {
  fetchPosts,
  addPost,
  deletePost
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ReduxAsynch))
