import React from 'react'
import { Card, CardContent, Avatar, Typography, Button } from '@material-ui/core'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'

const UsersList = ({ items, onEdit, onDelete, match }) => (
  <div style={{ display: 'grid', gap: 12 }}>
    {items.map(u => (
      <Card key={u.id} style={{ display: 'flex', alignItems: 'center', padding: 8 }}>
        <Avatar src={u.avatar} />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h6">{u.name} {u.lastName}</Typography>
          <Typography variant="body2">{u.email}</Typography>
          <Typography variant="body2">Age: {u.age}</Typography>
          <Typography variant="body2">{u.about}</Typography>
          <Typography variant="caption">
            Created {moment(u.createdAt).fromNow()}
          </Typography>
        </CardContent>
        <Button onClick={() => onEdit(u)}>Edit</Button>
        <Button onClick={() => onDelete(u.id)} color="secondary">Delete</Button>
        <Button
          component={Link}
          to={`${match.url}/${u.id}/transactions`}
          color="primary"
        >
          View Transactions
        </Button>
      </Card>
    ))}
  </div>
)

export default withRouter(UsersList)
