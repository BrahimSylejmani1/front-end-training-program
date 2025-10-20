/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Button, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TodoForm from "pages/lecture8/todo/TodoForm";
import ToDoList from "pages/lecture8/todo/ToDoList";
import React, { Fragment } from "react";
import uuid from 'uuid';
import { connect } from 'react-redux'
import { addTodo, filter, toggleComplete } from 'reducers/todo/ToDoActions'
import { filteredItems } from 'reducers/todo/Todo'

const styles = ({ typography }) => ({
  actionWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '100%'
  },
})

class Todo extends React.Component {

  state = {
    open: false
  }
  
  onChange = (event) => {
    const { filter } = this.props
    filter(event.target.value)
  }

  onToggleOpen = (event) => {
    if (event) {
      event.preventDefault()
    }
    this.setState((prevState) => ({
      open: !prevState.open
    }))
  }

  onAddTodo = (text) => {
    const { addTodo } = this.props
    addTodo(text)
  }

  onToggleComplete = (which) => {
    const { toggleComplete } = this.props
    toggleComplete(which)
  }

  render() {
    const { classes, search, items } = this.props
    const { open } = this.state
    return (
      <Fragment>
        <div className={classes.actionWrapper}>
          <TextField label="Search" value={search} onChange={this.onChange}/>
          <Button onClick={this.onToggleOpen}>Add new ToDo</Button>
        </div>
        <ToDoList
         toggleComplete={this.onToggleComplete}
         items={items}
        />
        <TodoForm
         addTodo={this.onAddTodo}
         open={open}
         onCancelClicked={this.onToggleOpen}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    items: filteredItems(store),
    search: store.todo.filter
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   filter: (text) => dispatch(filter(text))
// })
// same
const mapDispatchToProps = {
  addTodo,
  toggleComplete,
  filter
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Todo))
