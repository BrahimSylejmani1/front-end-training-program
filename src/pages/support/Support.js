/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/support/Intro";
import { PAGES } from 'Constants';
import Glossary from "pages/support/Glossary";
import TipsAndTricks from "pages/support/TipsAndTricks";
import Resources from "pages/support/Resources";
import PlanProgram from "pages/support/PlanProgram";

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
      case PAGES.SUPPORT.TIPS_AND_TRICKS:
        return <TipsAndTricks  {...props} />
      case PAGES.SUPPORT.RESOURCES:
        return <Resources  {...props} />
      case PAGES.SUPPORT.GLOSSARY:
        return <Glossary  {...props} />
      case PAGES.SUPPORT.PLAN_PROGRAM:
        return <PlanProgram {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture3)
