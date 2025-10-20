/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles"
import Divider from "presentations/Divider"
import Typography from "presentations/Typography"
import React, { Fragment } from "react"
import SimpleLink from "presentations/rows/SimpleLink"
import Code from "presentations/Code"
import { createStore, combineReducers } from 'redux'
import { Bold, Italic } from "presentations/Label";
import EventLoop from 'assets/images/lecture9/event_loop.png'
const styles = ({ typography }) => ({
  root: {},
})

const promiseResolveReject = `
Promise.resolve("Lets start off with a success message, quite Optimistic about the future!")
Promise.reject("My wife has left me, Game of Thrones last season sucks, My cat doesn\'t love me, I will fail imidiately!")
`

const promiseRace = `
const first = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I always succeed after 1 second!'), 1000)
})
const second = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I always succeed after 1.5 seconds!'), 1500)
})

Promise.race([first, second]).then((responses) => {
  console.log('May only the strong survive! Such is the law of Natural Selection!')
  console.log('responses', responses)
})
`

const promiseAll = `
const first = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I always succeed after 1 second!'), 1000)
})
const second = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I always succeed after 1.5 seconds!'), 1500)
})

Promise.all([first, second]).then((responses) => {
  console.log('I have to wait until all of the above promises finish, that is I execute as slow as my weakest request!')
  console.log('An expression taken from Leonidas: We are as strong as our weakest link! Phalanx formation, SHIELDS!!')
  console.log('responses', responses)
})
`

const catchVsErrorHandler = `
const promise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'))
}).then((response) => {
  console.log('success!')
}, (failure) => {
  console.log('failure :/')
}).then((response) => {
  console.log('what ever happens above, I still run?!')
  throw new Error('But I failed to grasp this!')
}, (error) => {
  console.log('I wont be able to catch the error of the handler!, only the previous execution! I failed to handle this properly!')
}).catch((error) => {
  console.log('No worries, the catch handler here for the rescue!')
})
`

const failedToGrasp = `
const promise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'))
}).then((response) => {
  console.log('success!')
}, (failure) => {
  console.log('failure :/')
}).then((response) => {
  console.log('what ever happens above, I still run?!')
  throw new Error('But I failed to grasp this!')
}).catch((exception) => {
  console.log('another exception handler for the next chain!')
})`
const lifeContinues = `
const promise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'))
}).then((response) => {
  console.log('success!')
}, (failure) => {
  console.log('failure :/')
}).then((response) => {
  console.log('what ever happens above, I still run?!')
})
`

const thenExample = `
const promise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'))
}).then((response) => {
  console.log('success!')
}, (failure) => {
  console.log('failure :/')
})
`

const promisesExample = `
const fetchUsers = (request) => {
  // TODO: Perform your calculations
  return ["Agon", "Someone"]
}

const fetchDashboards = (users) => {
  if (!users) {
    throw new Error("What is this, I need users to fetch their dashboards!")
  }
  // TODO: Perform your calculations
  return ["Board 1", "Board 2"]
}

const fetchData = (dashboards) => {
  if (!dashboards) {
    throw new Error("What is this, I need dashboards to fetch their data!")
  }
  // TODO: Perform your calculations
  return ["Data 1", "Data 2"]
}

const promise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'))
}).then((request) => {
  return fetchUsers(request)
}).then((users) => {
  return fetchDashboards(users)
}).then((dashboards) => {
  return fetchData(dashboards)
}).then((data) => {
  console.log('got data back', data)
}).catch((exception) => {
  console.log('somewhere during this callstack something failed! It is this error that describes what happend: ')
  console.log(exception)
})`

const callbackHell = `
const fetchUsers = (request, callback) => {
  // TODO: Perform your calculations
  setTimeout(() => callback(["Agon", "Someone"]), 1000)
}
const fetchDashboards = (users, callback) => {
  // TODO: Perform your calculations
  setTimeout(() => callback(["Board 1", "Board 2"]), 1000)
}
const fetchData = (users, callback) => {
  // TODO: Perform your calculations
  setTimeout(() => callback(["Data 1", "Data 2"]), 1000)
}
console.log('starting calculations')
fetchUsers({}, (users) => {
  console.log('finished getting users')
  fetchDashboards(users, (dashboards) => {
    console.log('finished getting dashboards')
    fetchData(dashboards, () => console.log('finished getting data'))
  })
})`

const callbackExample = `
const getDataFromServer = (request, callback) => {
  // TODO: Perform your calculations
  setTimeout(callback, 5000)
}
getDataFromServer({}, () => console.log("Finished"))
console.log('starting calculations')
`

class Promises extends React.Component {
  render() {
    const { classes, section } = this.props
    
    const callbackFunctions = section.children[0]
    const promises = section.children[1]
    const promisesAPI = section.children[2]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to give an have a look on how we can "make" Javascript Asynchronous. Mainly we are going to focus on Promises and how we can laverage those to await the response for a resource and or a request!
          </Typography>
          <Divider />
        </Typography>

        <Typography variant={'p'}>
          So far through out this training we have always executed synchronous code. Every time we initiated an action like clicking a button, changing input of a text field, dispatching an action to Redux the response followed synchronously! But in real world applications you most probably have a server somewhere in the cloud that serves the data that your application need, and for that you have to <Bold>await</Bold> for the response to come back. That is, until the response arrives we have to stop the execution of the code!
        </Typography>
        <Typography variant={'p'}>
          Before we continue you have to understand that Javascript runs Synchronously. It is a blocking, single-threaded language. That just means that only one operation can be in progress at a time. That’s not the entire story, though!
        </Typography>
        <Typography variant={'p'}>
          What if you have to make an expensive database request? Synchronous code makes a programmer’s life very difficult, so the JavaScript community developed some great workarounds. What that means is that you can manipulate JavaScript to behave in an asynchronous way. It’s not baked in, but it’s possible! Here are a few ways to make that happen:
        </Typography>

        <Typography variant='title' id={callbackFunctions.id}>
          {callbackFunctions.display}
        </Typography>
        <Typography variant={'p'}>
          This can be done in many ways, like call a function and give a callback function when the request is finished using the <Italic>setTimeout</Italic>
          <Code>
            {callbackExample}
          </Code>
          The call to the function, passes the second argument which is a callback function for when the request is completed. Notice that this releases the execution of the Javascript synchronous code!
        </Typography>

        <Typography variant='p'>
          Let’s use a database request as an example: asynchronous callbacks allow you to invoke a callback function which sends a database request (and any other nested callbacks) off to your app, where it waits for the response from the database, freeing up the rest of your code to continue running.
        </Typography>

        <Typography variant='p'>
          Once the database request completes, the results (and any other nested code) are sent to the queue, and then processed through the event loop. For a guide on how event loops work refer to this link: <SimpleLink href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">What the heck is the event loop anyway? | Philip Roberts | JSConf EU</SimpleLink>
        </Typography>

        <img src={EventLoop}/>

        <Typography variant='p'>
          In the diagram above you can see a visual representation on what are the asynchronous web api-s from the browser that we can leverage to make asynchronous callback functions, however that can lead to a socalled "callback hell" since you don't know how a callback is going to resolve! That is with what response your going to get, did it fail, what to execute next, was there a timeout etc...
        </Typography>
        
        <Typography variant='p'>
          Let us try to demonstrate it using this following code:
          <Code>
            {callbackHell}
          </Code>
          What the above example shows is how quickly the code can get messy! What if we want to do two requests at the same time? What if the first request fails, do we handle each request failure alone? It was this environment that inspired the promise:
        </Typography>

        <Typography variant='title' id={promises.id}>
          {promises.display}
        </Typography>
        <Typography variant='p'>
          In order to deal with callback hell, the promises API was introduced that allowed developers to clean up their syntax and write code that operated asynchronously but looked synchronous. This resulted in code that was easier to read and faster to run!
        </Typography>

        <Typography variant='p'>
          In the previous example, this is how we would chain these callas and handle each request in an isolated manner but in an easy to read and maintain way!
          <Code>
            {promisesExample}
          </Code>
          From the example above, the Promise syntax is pretty simple! You define a Promise by passing a function which accepts two arguments, a resolve callback and a reject callback! Within the block of code, you perform the request and call back these functions depending on the respective answer, whether it failed or not!
        </Typography>
        <Typography variant='p'>
          You can chain the execution of a promise by using the <Italic>then</Italic> syntax! A then function accepts two parameters, a success handler function and an error handler function, the second one being optional:
          <Code>
            {thenExample}
          </Code>
          Notice how we didn't have to put a return, after the resolve call. That seems wierd? Well Promises work like that, the first callback to be called wins! After an error is handled, life continues as normal! That is like this:
          <Code>
            {lifeContinues}
          </Code>
          After an error handler is handling the error, during the chain of commands another error handler can occure!
          <Code>
            {failedToGrasp}
          </Code>
          But why did we use the <Italic>catch</Italic> method here and not the second error function parameter? What is the difference:
          <Code>
            {catchVsErrorHandler}
          </Code>
        </Typography>
        <Typography variant='title' id={promisesAPI.id}>
          {promisesAPI.display}
        </Typography>

        <Typography variant='p'>
          <Bold>Promise all.</Bold> One of the methods available for us to call multiple requests at once and only execute the handler after all of them finished is the Promise.all method. Here is it how it looks like:
          <Code>
            {promiseAll}
          </Code>
        </Typography>
        <Typography variant='p'>
          <Bold>Promise race.</Bold> Now the tables have turned! As our very famous, nation wide (one can say its international as well) singer: "Tuna" used to say: "The status quo has changed!"
          <Code>
            {promiseRace}
          </Code>
        </Typography>
        <Typography variant='p'>
          <Bold>Promise resolve and reject.</Bold> One or the other, helper methods for quick initialisation:
          <Code>
            {promiseResolveReject}
          </Code>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Promises)
