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
})


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
      expect(fetch.mock.calls[0][0]).toEqual(`${API_URL}/posts`)
    })
  })
})

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
})