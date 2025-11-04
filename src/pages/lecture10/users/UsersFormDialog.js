import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core'

export default class UsersFormDialog extends Component {
  constructor(props) {
    super(props)
    this.state = props.initialValues || { name: '', lastName: '', email: '', age: '', about: '' }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    const { open, onClose } = this.props
    const { name, lastName, email, age, about } = this.state

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>User Form</DialogTitle>
        <DialogContent>
          <TextField label="Name" name="name" fullWidth value={name} onChange={this.handleChange} />
          <TextField label="Last Name" name="lastName" fullWidth value={lastName} onChange={this.handleChange} />
          <TextField label="Email" name="email" fullWidth value={email} onChange={this.handleChange} />
          <TextField label="Age" name="age" type="number" fullWidth value={age} onChange={this.handleChange} />
          <TextField label="About" name="about" fullWidth value={about} onChange={this.handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="primary" onClick={this.handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    )
  }
}
