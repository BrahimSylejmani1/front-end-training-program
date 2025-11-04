import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const TransactionsList = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Category</TableCell>
        <TableCell>SubCategory</TableCell>
        <TableCell>Product</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map(tx => (
        <TableRow key={tx.id}>
          <TableCell>{tx.category}</TableCell>
          <TableCell>{tx.subCategory}</TableCell>
          <TableCell>{tx.product}</TableCell>
          <TableCell>{tx.price}</TableCell>
          <TableCell>{tx.quantity}</TableCell>
          <TableCell>{tx.total}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default TransactionsList
