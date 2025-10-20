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

class Playground extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Playground
          <Typography>This will be a page dedicated for experiments and fooling around. Do what ever you need right here, use the playground folder at the project to create more files for whatever reason.</Typography>
          <Divider />
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Playground)
