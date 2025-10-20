/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Intro from "pages/lecture12/Intro";
import React from "react";
import { PAGES } from 'Constants'
import Testing from "pages/lecture12/Testing";
import TestingRedux from "pages/lecture12/TestingRedux"
import TestingReactComponents from "pages/lecture12/TestingReactComponents";
import ContinousDeploymentAndIntegration from "pages/lecture12/ContinousDeploymentAndIntegration";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture12 extends React.Component {
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
      case PAGES.LECTURE_12.TESTING:
        return <Testing {...props} />
      case PAGES.LECTURE_12.TESTING_REDUX:
        return <TestingRedux {...props} />
      case PAGES.LECTURE_12.TESTING_REACT_COMPONENTS:
        return <TestingReactComponents {...props} />
      case PAGES.LECTURE_12.CDCI:
        return <ContinousDeploymentAndIntegration {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture12)
