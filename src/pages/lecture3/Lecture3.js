/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/lecture3/Intro";
import { PAGES } from 'Constants';
import PropsStateAndLifecycle from "pages/lecture3/PropsStateAndLifecycle";
import ProjectStructure from "pages/lecture3/ProjectStructure";
import FunctionalComponents from "pages/lecture3/FunctionalComponents";
import Assignments from "pages/lecture3/Assignments";
import TicTacToeRecap from 'pages/lecture3/TicTacToeRecap'

const styles = ({ typography }) => ({
  root: {},
})

class Lecture3 extends React.Component {
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
      case PAGES.LECTURE_3.TIC_TAC_TOE_RECAP:
        return <TicTacToeRecap {...props} />
      case PAGES.LECTURE_3.REACT_FUNCTIONAL_COMPONENTS:
        return <FunctionalComponents {...props} />
      case PAGES.LECTURE_3.REACT_PART_TWO:
        return <PropsStateAndLifecycle {...props} />
      case PAGES.LECTURE_3.PROJECT_STRUCTURE:
        return <ProjectStructure {...props} />
      case PAGES.LECTURE_3.ASSIGNMENTS:
        return <Assignments {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture3)
