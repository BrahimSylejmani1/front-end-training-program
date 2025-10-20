/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';

const styles = ({ typography }) => ({
  root: {},
})

const simpleAction = `
import { 
  requestData,
  updatePost,
  addPost
} from 'reducers/posts/PostsActions'
import { API_URL } from 'Constants'
import ACTION_TYPES from 'reducers/posts/PostsActionTypes'

it('should dispatch request data action!', () => {
  // Initialize mockstore with empty state
  const store = mockStore({})

  // Dispatch the action
  store.dispatch(requestData())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = {
    type: ACTION_TYPES.REQUEST_DATA
  }
  expect(actions).toEqual([expectedPayload])
})`

const asynchronousActions = `
import { 
  requestData,
  updatePost,
  addPost
} from 'reducers/posts/PostsActions'
import { API_URL } from 'Constants'
import ACTION_TYPES from 'reducers/posts/PostsActionTypes'

// describe a set of test cases
describe('asynchronous posts calls!', () => {
	// before each of them, reset the mocked reponse
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('adds a post and calls the addPost', () => {
    // Initialize mockstore with empty state
    const store = mockStore({})
    
    const mockedPost = {
      id: "15",
      createdAt: "2019-05-19T20:55:48.247Z",
      user: "Marcia Kovacek",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gonzalorobaina/128.jpg"
    }
		// lets mock the response of the next call
    fetch.mockResponseOnce(JSON.stringify(mockedPost))

    //assert on the response
    return store.dispatch(addPost({})).then(res => {
      expect(res).toEqual(mockedPost)
      
      const actions = store.getActions()
      expect(actions[0]).toEqual(requestData())
      expect(actions[1]).toEqual(updatePost(mockedPost))

      //assert on the times called and arguments given to fetch
      expect(fetch.mock.calls.length).toEqual(1)
      expect(fetch.mock.calls[0][0]).toEqual(\`\${API_URL}/posts\`)
    })
  })
})`

const testingReducers = `
import posts from 'reducers/posts/Posts'

// describe a set of test cases
describe('actions and state transitions for posts state reducer!', () => {
  it('requests data!', () => {
    // Initialize mockstore with empty state
    let state = posts(undefined, {})
    state = posts(state, requestData())

    expect(state.request.isLoading).toBe(true)
    expect(state.request.status).toBe(200)
    const mockedPost = {
      id: "15",
      createdAt: "2019-05-19T20:55:48.247Z",
      user: "Marcia Kovacek",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gonzalorobaina/128.jpg"
    }
    state = posts(state, updatePost(mockedPost))
    expect(state.items).toStrictEqual([mockedPost])
  })
})`

class TestingRedux extends React.Component {

  render() {
    const { classes, section } = this.props
    const gettingStarted = section.children[0]
    const storeActions = section.children[1]
    const storeReducers = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='title' id={gettingStarted.id}>
          {gettingStarted.display}
        </Typography>
        <Typography variant='p'>
          The libraries used to test Redux in conjunction with Jest are:
          <ol>
            <li><SimpleLink href="https://github.com/jefflau/jest-fetch-mock">Jest Fetch Mock Api</SimpleLink> and </li>
            <li><SimpleLink href="https://github.com/dmitry-zaets/redux-mock-store">Redux Mock Api</SimpleLink></li>
          </ol>
        </Typography>

        <Typography variant='title' id={storeActions.id}>
          {storeActions.display}
        </Typography>
        <Typography variant='p'>
          Lets kick off by testing our redux actions! Let us see the first example:
          <Code>
            {simpleAction}
          </Code>
          Pretty straightforward, we except the action send to the store to match the payload we just dispatched!
        </Typography>
        <Typography variant='p'>
          The other use case is when store actions are asynchronous, in this case we have to do the following:
          <Code>
            {asynchronousActions}
          </Code>
        </Typography>
        <Typography variant='title' id={storeReducers.id}>
          {storeReducers.display}
        </Typography>
        <Typography variant='p'>
          Store Reducers on the other hand can be considered the same as normal javascript functions! Here we only test what the action should do to a store:
          <Code>
            {testingReducers}
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TestingRedux))
