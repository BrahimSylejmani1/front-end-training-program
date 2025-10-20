/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import { PAGES } from 'Constants';
import Intro from "pages/lecture10/Intro";
import React from "react";
import ReduxMiddleware from "pages/lecture10/ReduxMiddleware";
import ApiServices from "pages/lecture10/ApiServices";
import Assignments from "pages/lecture10/Assignments";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture10 extends React.Component {
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
      case PAGES.LECTURE_10.REDUX_MIDDLEWARE:
        return <ReduxMiddleware {...props} />
      case PAGES.LECTURE_10.API_SERVICES:
        return <ApiServices {...props} />
      case PAGES.LECTURE_10.ASSIGNMENTS:
        return <Assignments {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture10)
