/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import classNames from 'classnames'

const agon = { emri: 'agon', mbiemri: 'lohaj'}

const { emri, mbiemri } = agon

const styles = ({ palette, size, shadows }) => {
  return {
    root: {
    }
  }
}

class Intro extends React.Component {
  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p' className={classes.root}>
          The lecture 7 contains these underlying pages:
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
