/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import BinarySearchTreeImage from "assets/images/lecture5/binary_search_tree.png";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Italic } from "presentations/Label";
import PageLink from "presentations/rows/nav/PageLink";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import EditIcon from '@material-ui/icons/Edit'
import RemoveIcon from '@material-ui/icons/Clear'
import { Table, TableHead, TableRow, TableBody, TableCell, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import Chart from "presentations/Chart";


const styles = ({ typography, size }) => ({
  graphs: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%'
  },
  card: {
    backgroundColor: 'white',
    width: `calc(50% - ${size.spacing * 2}px)`,
    margin: size.spacing,
    height: 420,
    padding: 8,
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'flex-start'
  },
  graph: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 'auto'
  }
})

/**
 * This tree is represented by Nodes that look like this:
 * {
 *  value: 10,
 *  left: a node to the left, same model
 *  right: a node to the right, same model
 * }
 */
const tree = {
  value: 27,
  left: {
    value: 14,
    left: {
      value: 10
    },
    right: {
      value: 19
    }
  },
  right: {
    value: 35,
    left: {
      value: 31
    },
    right: {
      value: 42
    }
  }
}

const Card = ({options, title, titleClass, graphClass, ...other}) => {
  return <div {...other}>
    <Typography variant={'title'} className={titleClass}>{title}</Typography>
    <Chart className={graphClass} options={options} />
  </div>
}


class Assignments extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        items: [
            { name: 'John', lastName: 'Doe', username: 'jdoe', type: 'Admin', age: 22, gender: 'Male' },
            { name: 'Sara', lastName: 'Smith', username: 'sara', type: 'Normal', age: 27, gender: 'Female' }
        ],
        dialogOpen: false,
        editIndex: null,
        userModel: { name:"", lastName: "", username: "", type: "Admin", age: "", gender: "M" },
    }
  }

  onAddNew = () => {
      this.setState({
          dialogOpen: true,
          editIndex: null,
          userModel: { name:"", lastName: "", username: "", type: "Admin", age: "", gender: "M" },
      })
  }

  onEdit = (user, index) => {
      this.setState({
          dialogOpen: true,
          editIndex: index,
          userModel: {...user}
      })
  }

  onDelete = (which, index) => {
    this.setState({
      items: this.state.items.filter((next, i) => index !== i)
    })
  }

    onSave = () => {
        const { editIndex, userModel, items } = this.state
        if (editIndex === null) {
            this.setState({ items: [...items, userModel], dialogOpen: false })
        } else {
            const updated = [...items]
            updated[editIndex] = userModel
            this.setState({ items: updated, dialogOpen: false })
        }
    }

    onChange = (field, value) => {
        this.setState(prev => ({
            userModel: { ...prev.userModel, [field]: value }
        }))
    }

    onCancel = () => {
        this.setState({ dialogOpen: false });
    };

    getAverageAgeChart() {
        const { items, dialogOpen, userModel } = this.state;
        const groups = { Admin: [], Normal: [] };
        items.forEach(u => {
            if (groups[u.type]) groups[u.type].push(Number(u.age));
        });
        const avg = type =>
            groups[type].length
                ? groups[type].reduce((a, b) => a + b, 0) / groups[type].length
                : 0;
        return {
            series: [{
                name: 'Average age between types',
                type: 'pie',
                data: [
                    { name: 'Admin', value: avg('Admin') },
                    { name: 'Normal', value: avg('Normal') }
                ]
            }]
        };
    }

    getGenderChart() {
        const { items, dialogOpen, userModel } = this.state;

        const males = items.filter(u => u.gender === 'Male').length;
        const females = items.filter(u => u.gender === 'Female').length;
        return {
            series: [{
                name: 'Gender Distribution',
                type: 'pie',
                data: [
                    { name: 'Male', value: males },
                    { name: 'Female', value: females }
                ]
            }]
        };
    }



    /**
   * TODO: Implement Binary Search Tree Method
   * @param {Object} node 
   * @param {int} search 
   */
  binarySearchTree(node, search) {
      if(!node) return -1;
      if(node.value === search) {
          return node;
      }
      if(search < node.value){
          return this.binarySearchTree(node.left, search);
      }else{
          return this.binarySearchTree(node.right, search);
      }
  }

  render() {
    const { classes, section } = this.props
    const search = 10
    const value = this.binarySearchTree(tree, search)

    const { items = [] } = this.state
    
    const cardProps = {
      titleClass: classes.title,
      className: classes.card,
      graphClass: classes.graph
    }

    // TODO: bind this to the model, calculate it based on the list of items

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            Home Assignment
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Title: "Implement add/update/delete on a User List"<br />
          We've created the following skeleton and we want to make it functional. Fill in the missing pieces of the code! The requirements are:
          <ol>
            <li>Hold a array of users at the state of this component</li>
            <li>Render rows on the table based on the items of the array</li>
            <li>When edit button is clicked edit that item in the dialog, by passing the model there (TIP: hold the item being edited on the state of this component, when that exists the dialog opens)</li>
            <li>Add the remove functionality</li>
            <li>Based on user types show a graf of the average age of the user</li>
          </ol>
        </Typography>
        <TextField fullWidth margin="normal" value={''} label="Search"/>
        <Button color="primary" variant="contained" onClick={this.onAddNew}>Add New Item</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Type (Admin/Normal)</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.type}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <IconButton onClick={()=> this.onEdit(user, index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={(event) => this.onDelete(user, index)}>
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
          <Dialog open={this.state.dialogOpen} onClose={this.onCancel}>
              <DialogTitle>{this.state.editIndex === null ? "Add User" : "Edit User"}</DialogTitle>
              <DialogContent>
                  <TextField fullWidth margin="normal" label="Name"
                             value={this.state.userModel.name}
                             onChange={e => this.onChange('name', e.target.value)} />
                  <TextField fullWidth margin="normal" label="Last Name"
                             value={this.state.userModel.lastName}
                             onChange={e => this.onChange('lastName', e.target.value)} />
                  <TextField fullWidth margin="normal" label="Username"
                             value={this.state.userModel.username}
                             onChange={e => this.onChange('username', e.target.value)} />
                  <TextField fullWidth margin="normal" select label="Type"
                             value={this.state.userModel.type}
                             onChange={e => this.onChange('type', e.target.value)}>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Normal">Normal</MenuItem>
                  </TextField>
                  <TextField fullWidth margin="normal" label="Age"
                             value={this.state.userModel.age}
                             onChange={e => this.onChange('age', e.target.value)} />
                  <RadioGroup
                      row
                      name="gender"
                      value={this.state.userModel.gender}
                      onChange={({ target: { value } }) => this.onChange('gender', value)}
                  >
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>

              </DialogContent>
              <DialogActions>
                  <Button color="secondary" onClick={this.onCancel}>Cancel</Button>
                  <Button color="primary" onClick={this.onSave}>Save</Button>
              </DialogActions>
          </Dialog>
          <div className={classes.graphs}>
              <Card options={this.getAverageAgeChart()} {...cardProps} title={'Average age between types'} />
              <Card options={this.getGenderChart()} {...cardProps} title={'Males vs Females'} />
          </div>
          <Typography variant='p'>
              Title: "Implement the Binary Search Tree"<br />
              Description: "Using Binary Search Tree I will search for the given value at the given tree structure"<br />
              To understand how binary search tree works visit:
              <SimpleLink href="https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm"> Binary Search Tree Explanation</SimpleLink><br />
          </Typography>
          <Typography variant='p'>
              The algorithm should find the node with value {search}.<br />
              Result: {value !== -1 ? JSON.stringify(value) : "Not found"}
          </Typography>
          <img src={BinarySearchTreeImage} alt="Binary Search Tree" style={{ marginTop: 16, width: '60%' }} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(Assignments)
