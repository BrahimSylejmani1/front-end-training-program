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

class Glossary extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Glossary
          <Divider />
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>CD - Continuous Development</li>
            <li>CI - Continuous Integration</li>
            <li>NPM - Node Package Manager for the Javascript programming language</li>
            <li>VS - Visual Studio</li>
            <li>GUI - Graphical User Interface</li>
            <li>JSON - JavaScript Object Notation</li>
            <li>QA - Quality Assurance</li>
            <li>JS - JavaScript</li>
            <li>JSX - Extended JavaScript, used in React</li>
            <li>API - Application programming interface</li>
            <li>HTML - Hyper Text Markup Language</li>
            <li>CSS - Cascading Style Sheet</li>
            <li>UI - User Interface</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Glossary)
