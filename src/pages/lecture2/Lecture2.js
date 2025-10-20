/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/lecture2/Intro";
import { PAGES } from 'Constants';
import Javascript from "pages/lecture2/Javascript";
import ReactJS from "pages/lecture2/ReactJS";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture1 extends React.Component {
  render() {
    const { classes, breadcrumbs } = this.props

    let section = breadcrumbs[0]
    if (breadcrumbs.length > 1) {
      section = breadcrumbs[1]
    }

    const props = {
      section
    }

    switch (section.id) {
      case PAGES.LECTURE_2.JAVASCRIPT:
        return <Javascript {...props} />
      case PAGES.LECTURE_2.REACT:
        return <ReactJS {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture1)
