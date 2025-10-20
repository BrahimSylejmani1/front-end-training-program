/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import { PAGES } from 'Constants';
import AgileMethodology from "pages/lecture1/AgileMethodology";
import GettingStarted from "pages/lecture1/GettingStarted";
import Intro from "pages/lecture1/Intro";
import ProjectSetup from "pages/lecture1/ProjectSetup";
import WayOfWorking from "pages/lecture1/WayOfWorking";
import WorkingWithGit from "pages/lecture1/WorkingWithGit";
import React from "react";
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
      case PAGES.LECTURE_1.GETTING_STARTED:
        return <GettingStarted {...props} />
      case PAGES.LECTURE_1.PROJECT_SETTUP:
        return <ProjectSetup {...props} />
      case PAGES.LECTURE_1.AGILE_METHODOLOGY:
        return <AgileMethodology {...props} />
      case PAGES.LECTURE_1.WAY_OF_WORKING:
        return <WayOfWorking {...props} />
      case PAGES.LECTURE_1.WORKING_WITH_GIT:
        return <WorkingWithGit {...props} />
    }
    return <Intro {...props} />
  }
}

export default withStyles(styles)(Lecture1)
