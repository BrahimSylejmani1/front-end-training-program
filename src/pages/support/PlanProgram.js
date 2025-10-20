/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class PlanProgram extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Plan Program
          <Divider />
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>
              Introduction to the course, get to know each other, overview of the program, expectations, project setup and account setups and <br/>
              Your first ever commit, making a Pull request and the importance of it, getting all the tasks setup for the rest of the training
            </li>
            <li>
              JavaScript variables, arrays, functions recap and <br/>
              React JS introduction, first ever component created (Part 1)
            </li>
            <li>
              React Functional Components and <br/>
              Lifecycle, Props and State
            </li>
            <li>
              Conditional Rendering, forms and <br/>
              Composition vs Inheritance
            </li>
            <li>
              React Routing and <br/>
              Higher Order Components (Part 1)
            </li>
            <li>
              Higher Order Components (Part 2) and <br/>
              React Children API
            </li>
            <li>
              Style management and CSS recap (Part 1) and <br/>
              Style management and CSS recap (Part 2)
            </li>
            <li>
              Introduction to Redux Part 1 and <br/>
              Introduction to Redux Part 2
            </li>
            <li>
              Redux + React interaction and store management (Part 1) and <br/>
              Redux + React interaction and store management (Part 2)
            </li>
            <li>
              Middleware’s and store management and <br/>
              REST-full API introduction + services setup
            </li>
            <li>
              React PropTypes and Advanced Concepts (Context, Hooks)
            </li>
            <li>
              Testing and CD/CI
            </li>
            <li>
              Recap and <br/>
              Wrap UP!
            </li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(PlanProgram)
