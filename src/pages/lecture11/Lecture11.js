/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Intro from "pages/lecture11/Intro";
import React from "react";
import { PAGES } from 'Constants'
import ReactPropTypes from "pages/lecture11/ReactPropTypes";
import ReactContext from "pages/lecture11/ReactContext";
import ReactHooks from "pages/lecture11/ReactHooks";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture11 extends React.Component {
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
      case PAGES.LECTURE_11.REACT_PROPTYPES:
        return <ReactPropTypes {...props} />
      case PAGES.LECTURE_11.REACT_CONTEXT:
        return <ReactContext {...props} />
      case PAGES.LECTURE_11.REACT_HOOKS:
        return <ReactHooks {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture11)
