/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Intro from "pages/lecture11/Intro";
import React from "react";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture13 extends React.Component {
  render() {
    const { classes, breadcrumbs, ...other } = this.props

    let section = breadcrumbs[0]
    if (breadcrumbs.length > 1) {
      section = breadcrumbs[1]
    }

    const props = {
      section,
      ...other
    }

    switch (section.id) {
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture13)
