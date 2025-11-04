import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import TransactionsList from './TransactionsList'
import TransactionsDashboard from './TransactionsDashboard'
import { fetchTransactionsByUser } from 'reducers/transactions/TransactionsActions.js'

class TransactionsView extends Component {
  componentDidMount() {
    this.props.fetchTransactionsByUser(this.props.match.params.id)
  }

  render() {
    const { user, transactions } = this.props

    return (
      <div style={{ padding: 16 }}>
        {user && (
          <Card style={{ marginBottom: 16 }}>
            <CardContent style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar src={user.avatar} />
              <div>
                <Typography variant="h6">{user.name} {user.lastName}</Typography>
                <Typography variant="body2">{user.email}</Typography>
              </div>
            </CardContent>
          </Card>
        )}

        <TransactionsList items={transactions} />
        <TransactionsDashboard items={transactions} />
      </div>
    )
  }
}

TransactionsView.propTypes = {
  match: PropTypes.object.isRequired,
  user: PropTypes.object,
  transactions: PropTypes.array,
  fetchTransactionsByUser: PropTypes.func.isRequired
}

const mapState = (s, own) => {
  const id = own.match.params.id
  return {
    user: s.users.items.find(u => String(u.id) === String(id)),
    transactions: s.transactions.items
  }
}

export default connect(mapState, { fetchTransactionsByUser })(TransactionsView)
