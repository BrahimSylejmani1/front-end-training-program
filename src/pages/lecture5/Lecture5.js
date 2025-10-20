/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/lecture5/Intro";
import { PAGES } from 'Constants';
import AssignmentsRecap from 'pages/lecture5/AssignmentsRecap'
import Routing from "pages/lecture5/Routing";
import HigherOrderComponents from "pages/lecture5/HigherOrderComponents";
import ReactChildren from "pages/lecture5/ReactChildren";
import Assignments from "pages/lecture5/Assignments";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture5 extends React.Component {
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
      case PAGES.LECTURE_5.ASSIGNMENT_RECAP:
        return <AssignmentsRecap {...props} />
      case PAGES.LECTURE_5.ROUTING:
        return <Routing {...props} />
      case PAGES.LECTURE_5.HIGHER_ORDER_COMPONENTS:
        return <HigherOrderComponents {...props} />
      case PAGES.LECTURE_5.REACT_CHILDREN_API:
        return <ReactChildren {...props} />
      case PAGES.LECTURE_5.ASSIGNMENTS:
        return <Assignments {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture5)
