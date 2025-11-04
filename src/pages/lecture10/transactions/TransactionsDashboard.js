import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const TransactionsDashboard = ({ items }) => {
  const totalAmount = items.reduce((sum, tx) => sum + tx.total, 0)
  const totalProducts = items.length

  return (
    <Card style={{ marginTop: 16 }}>
      <CardContent>
        <Typography variant="h6">Transactions Dashboard</Typography>
        <Typography>Total Transactions: {totalProducts}</Typography>
        <Typography>Total Amount: ${totalAmount.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  )
}

export default TransactionsDashboard
