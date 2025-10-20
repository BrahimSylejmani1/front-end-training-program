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
          Lecture 2: Javascript and React (Part 1)
          <Divider />
        </Typography>
        <Typography variant='p'>
          The purpose of Lecture 2, is to introduce the participants with the web app structure, and have an introduction to React JS as well as JavaScript programming recap.
        </Typography>
        <Typography variant='p'>
          The lecture 2 contains these underlying pages:
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
