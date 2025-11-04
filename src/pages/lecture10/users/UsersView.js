import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import UsersList from './UsersList'
import UsersFormDialog from './UsersFormDialog'
import { fetchUsers, setUsersSearch, createUser, updateUser, deleteUser } from 'reducers/users/UserActions'

class UsersView extends Component {
  state = { dialogOpen: false, editing: null }

  componentDidMount() {
    this.props.fetchUsers();
  }


  openCreate = () => this.setState({ dialogOpen: true, editing: null })
  openEdit = (u) => this.setState({ dialogOpen: true, editing: u })
  closeDialog = () => this.setState({ dialogOpen: false, editing: null })

  submit = (values) => {
    const { editing } = this.state
    const op = editing ? this.props.updateUser(editing.id, values) : this.props.createUser(values)
    Promise.resolve(op).finally(this.closeDialog)
  }

  remove = (id) => this.props.deleteUser(id)

  render() {
    const { list, search, setUsersSearch } = this.props
    const q = (search || '').toLowerCase()
    console.log('Users in props:', list)
    const filtered = list.filter(u =>
      (`${u.name} ${u.lastName}`.toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q))
    )
    console.log('users list:', this.props.list)


    return (
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <TextField label="Search by name/email" value={search} onChange={e => setUsersSearch(e.target.value)} />
          <Button variant="contained" color="primary" onClick={this.openCreate}>Add User</Button>
        </div>

        <UsersList items={filtered} onEdit={this.openEdit} onDelete={this.remove} />

        <UsersFormDialog
          open={this.state.dialogOpen}
          initialValues={this.state.editing}
          onClose={this.closeDialog}
          onSubmit={this.submit}
        />
      </div>
    )
  }
}

const mapState = s => ({ list: s.users.items, search: s.users.search })
const mapDispatch = { fetchUsers, setUsersSearch, createUser, updateUser, deleteUser }
export default connect(mapState, mapDispatch)(UsersView)
