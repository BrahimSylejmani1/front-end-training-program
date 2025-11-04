import withStyles from "@material-ui/core/styles/withStyles";
import { PAGES } from "Constants";
import Intro from "pages/lecture10/Intro";
import React from "react";
import ReduxMiddleware from "pages/lecture10/ReduxMiddleware";
import ApiServices from "pages/lecture10/ApiServices";
import Assignments from "pages/lecture10/Assignments";
import UsersView from "pages/lecture10/users/UsersView";
import TransactionsView from "pages/lecture10/transactions/TransactionsView";
import { Route, Switch, withRouter } from "react-router-dom";

const styles = () => ({ root: {} });

class Lecture10 extends React.Component {
  render() {
    const { breadcrumbs, match, ...other } = this.props;

    let section = breadcrumbs[0];
    if (breadcrumbs.length > 1) {
      section = breadcrumbs[1];
    }

    const props = { section, ...other };

    switch (section.id) {
      case PAGES.LECTURE_10.REDUX_MIDDLEWARE:
        return <ReduxMiddleware {...props} />;

      case PAGES.LECTURE_10.API_SERVICES:
        return <ApiServices {...props} />;

      case PAGES.LECTURE_10.ASSIGNMENTS:
        const baseUrl = match.url.replace(/\/$/, '')
        console.log('Base URL:', baseUrl)
        return (
          <Switch>
            <Route path={`${baseUrl}/users/:id/transactions`} component={TransactionsView} />
            <Route exact path={`${baseUrl}/users`} component={UsersView} />
            <Route exact path={baseUrl} component={Assignments} />
          </Switch>
        )

      default:
        return <Intro {...props} />;
    }
  }
}

export default withRouter(withStyles(styles)(Lecture10));

