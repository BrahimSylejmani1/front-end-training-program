import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TransactionsPage from 'pages/lecture10/transactions/TransactionsView'
import UsersPage from 'pages/lecture10/users/UsersView'

const AssignmentsRoutes = ({ match }) => {
  console.log('AssignmentsRoutes match:', match.url, match.path)


  return (
    <Switch>
      <Route exact path={`${match.url}/users`} component={UsersPage} />
      <Route path={`${match.url}/users/:id/transactions`} component={TransactionsPage} />
    </Switch>
  )
}

export default AssignmentsRoutes
