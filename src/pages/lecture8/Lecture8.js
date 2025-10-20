/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import { PAGES } from 'Constants';
import Intro from "pages/lecture8/Intro";
import Redux from "pages/lecture8/Redux";
import React from "react";
import CoreConcepts from "pages/lecture8/CoreConcepts";
import ReactIntegration from "pages/lecture8/ReactIntegration";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture8 extends React.Component {
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
      case PAGES.LECTURE_8.REDUX:
        return <Redux {...props} />
      case PAGES.LECTURE_8.CORE_CONCEPTS:
        return <CoreConcepts {...props} />
      case PAGES.LECTURE_8.REACT_INTEGRATION:
        return <ReactIntegration {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture8)
