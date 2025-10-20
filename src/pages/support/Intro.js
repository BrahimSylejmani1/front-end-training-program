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
          Support Materials and Resources
          <Divider />
        </Typography>
        <Typography variant='p'>
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
