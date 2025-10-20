/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import { PAGES } from 'Constants';
import Intro from "pages/lecture9/Intro";
import React from "react";
import Promises from "pages/lecture9/Promises";
import ReactAsynch from "pages/lecture9/ReactAsynch";
import ReduxAsynch from "pages/lecture9/ReduxAsynch";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture9 extends React.Component {
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
      case PAGES.LECTURE_9.PROMISES:
        return <Promises {...props} />
      case PAGES.LECTURE_9.REACT_ASYNCH:
        return <ReactAsynch {...props} />
      case PAGES.LECTURE_9.REDUX_ASYNCH:
        return <ReduxAsynch {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture9)
