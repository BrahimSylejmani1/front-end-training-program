/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class Intro extends React.Component {
  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Lecture 1: Setup and Introduction 
          <Divider />
        </Typography>
        <Typography variant='p'>
          The purpose of the lecture one is to onboard the participants, get them acquainted with the way of working, the program plan, the tools that they need to setup and the training program structure.
        </Typography>
        <Typography variant='p'>
          The lecture 1 contains these underlying pages:
          <ol>
            {section.children.map(next => <li key={next.id}>
              <PageLink to={`/lecture/${next.id}/`}>{next.display}</PageLink>
            </li>)}
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Intro)
