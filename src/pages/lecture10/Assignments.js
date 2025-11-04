/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import { Bold, Italic } from "presentations/Label";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import LoggingImage from 'assets/images/lecture10/logging.png'
import SimpleLink from "presentations/rows/SimpleLink";
import Code from "presentations/Code";
import { CALL_API } from 'middleware/Api'
import { API_URL } from 'Constants'
import AssignmentsRoutes from 'pages/lecture10/AssignmentsRoutes'
import { Route, Switch } from 'react-router-dom'
import UsersPage from 'pages/lecture10/users/UsersView'
import TransactionsPage from 'pages/lecture10/transactions/TransactionsView'

const styles = ({ typography }) => ({
  root: {},
})

const usersModel = `{
  "id": "1",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/faisalabid/128.jpg",
  "name": "Lola",
  "lastName": "Schaefer",
  "email": "Demarcus_Hickle23@yahoo.com",
  "age": 71056,
  "about": "Glen application concept",
  "createdAt": "2019-05-20T03:53:03.709Z",
}`

const transactionsModel = `{
  "id": "1",
  "userId": "1",
  "category": "cultivate",
  "subCategory": "invoice",
  "product": "Generic Steel Computer",
  "price": 909,
  "quantity": 90624
}`

const reduxModel = `{
  "isLoading": false,
  "response": {
    "code": 200,
    "message": "Last request succeded!"
  },
  "search": '',
  "items": [] // users or transactions! 
}`

class Assignments extends React.Component {

  render() {
    const { classes, section, match: { url } } = this.props
    const transactions = section.children[0]
    const algorithm = section.children[1]
    const ranking = section.children[2]
    const baseUrl = `${this.props.match.url}/assignments10`
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
          The deadline for these assignments is exactly the end of the Training Program: (Tuesday, 23rd of June 2020, 0am!). Basically on Friday the assignments should have been submitted!
        </Typography>

        <Typography variant='title' id={transactions.id}>
          {transactions.display}
        </Typography>

        <Typography variant='p'>
          Title: "Users and their Transactions!",<br/>
          Full Description:
          <ol>
            <li>
              A Mocked API Project has been created for you at this location <SimpleLink href={"https://www.mockapi.io/projects/5cdde1216f4437001467a3c9"}>Mocked API</SimpleLink> containing the following endpoints:
              <ol>
                <li>Users: <SimpleLink href={`${API_URL}/users`}>/users</SimpleLink></li>
                <li>Transactions: <SimpleLink href={`${API_URL}/users/1/transactions`}>/users/1/transactions</SimpleLink>. That is each user with ID, has an enpoint to its transactions, in this example user with ID: 1</li>
              </ol>
            </li>
            <li>
              There will be two routes, one for users and one for their transactions, where content will be displayed accordingly
                <ul>
                  <li>
                    Use the React Routing to specify those Routes, Links to jump back and forth between routes. That is:<br/>
                    http://localhost:8080/users -> Lists of Users<br/>
                    http://localhost:8080/users/id/transactions -> Lists of Transactions<br/>
                  </li>
                </ul>
            </li>
            <li>
              For this assignment, put all of your state at Redux, implement all the requests to the server via the middleware!
            </li>
            <li>
              For this assignment, separate your implementation into Components such that you end up with:
              <ol>
                <li>Users (page)</li>
                <li>Transactions (page)</li>
                <li>Users List</li>
                <li>Transactions List</li>
                <li>Users Form (using dialog)</li>
                <li>Transactions Form (using dialog)</li>
                <li>Transactions Dashboard</li>
              </ol>
              All organised into /src/lecture10/assignment/<br/>
              Add your own reducers at /src/reducers into their own respective folders (users and transactions), each containing all the neccessary action types, actions and respective reducers!<br/>
              <Italic>
                <ol>
                  <li>Plug your reducers in at Store.js file</li>
                  <li>Users reducer exists already in its own folder, however its static for now! (evil laugh)</li>
                </ol>
              </Italic>
              Reducers will contain the following model:
              <Code>
                {reduxModel}
              </Code>
            </li>
            <li>
              The users model will be like this:
              <Code>
                {usersModel}
              </Code>
              All the users will be displayed into Cards, each containing:
              <ol>
                <li>Their user Avatar (displayed as a rounded avatar image)</li>
                <li>Full Name -> name + lastName</li>
                <li>Email</li>
                <li>About me</li>
                <li>Age</li>
                <li>The date it was created formatted such that it shows how long a go this account was created: 2 days ago, 2 hours ago etc.</li>
              </ol>
              <Italic>
                Hints:
                <ol>
                  <li>Use card component available at the material ui: <SimpleLink href="https://material-ui.com/demos/cards/">Card</SimpleLink></li>
                  <li>Use avatar component available at the material ui: <SimpleLink href="https://material-ui.com/demos/avatars/">Avatar</SimpleLink></li>
                  <li>Use moment to format the date <SimpleLink href="https://momentjs.com/docs/#/displaying/fromnow/">Moment Date, ago!</SimpleLink></li>
                </ol>
              </Italic>
            </li>
            <li>
              At the users list I can also search based on their email and full name!
            </li>
            <li>
              At the users list I can add, update and delete users
              <ol>
                <li>Add new users via a Dialog, using a POST request to the endpoint!</li>
                <li>Update an existing user via a PUT request to the endpoint!</li>
                <li>Delete an existing user via the DELETE request to the endpoint!</li>
              </ol>
            </li>
            <li>Move to transactions page via a Link (Router -> Links)</li>
            <li>
              The transactions model will be like this:
              <Code>
                {transactionsModel}
              </Code>
              All the transactions of a user will be loaded based on his user id! They will be displayed into a Table, each row containing the following information:
              <ol>
                <li>All of the defined properties, excluding User ID</li>
                <li>The total amount -> derived by multiplying quantity * price!</li>
              </ol>
              Furthermore, at the transactions page, the user information will be shown above the table!
            </li>
            <li>At the transactions page, use charts underneath the table, to represent information like:
              <ol>
                <li>
                  Total Purchased products over categories (total (price * quantity))
                </li>
                <li>
                  Total Purchased products over sub categories (total (price * quantity))
                </li>
                <li>
                  Total Purchased products over proucts (total (price * quantity))
                </li>
                <li>
                  Average Quantity between categories (On average quantity per category)
                </li>
                <li>
                  Top 5 sold Products based on their quantity
                </li>
                <li>
                  Top 5 sold Categories based on their (price * quantity)
                </li>
              </ol>
            </li>
          </ol>

        </Typography>
        <Typography variant='title' id={algorithm.id}>
          {algorithm.display} Bonus!
        </Typography>


        <Typography variant='p'>
          Title: "Solve the Knights Tour Problem"<br/>
          Description: "Using Backtracking algorithm I am going to solve the Knights Tour Problem!"<br/>
          Here is the Explanation of the problem and a solution: <SimpleLink href="https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/">Knights Tour Problem</SimpleLink><br/>
          
        </Typography>
        <Typography variant='p'>
          Print the solution here, plain strings of the solution if it exists, or "A solution doesn't exist!" if the solution cannot be found (different board configurations might not have solutions)!:
        </Typography>

        <Typography variant='title' id={ranking.id}>
          {ranking.display}
        </Typography>

        <Typography variant='p'>
          <ol>
            <li>Functionality (max 10 points)</li>
            <li>User Interface (max 10 points)</li>
            <li>User Experience (max 10 points)</li>
            <li>Code Extensibility (max 10 points)</li>
            <li>Code Re-use (max 10 points)</li>
            <li>Nice and clean looking code that is easy to read (max 10 points)</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Assignments))
