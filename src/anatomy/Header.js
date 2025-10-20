/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import GoPrimeHeader from 'presentations/Header';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import { PAGES } from "Constants";
import ArrowRight from 'presentations/icons/ArrowRight';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const styles = ({palette, size, transitions, typography}) => ({
  root: {
    padding: size.spacing * 4,
    alignItems: 'center'
  },
  breadCrumbs: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    ...typography.header,
    textDecoration: 'none',
    marginRight: size.spacing * 2,
    transition: transitions.common,
    '&:hover': {
      color: palette.leadColor
    }
  },
  activeLink: {
    color: palette.leadColor
  },
  icon: {
    marginRight: size.spacing * 2,
    width: size.spacing * 2,
    height: size.spacing * 2
  }
})

class Header extends React.Component {

  static get defaultProps() {
    return {}
  }

  createBreadCrumbs = (link, index) => {
    const {classes, breadcrumbs} = this.props
    let page = breadcrumbs[0]
    let last = index === breadcrumbs.length - 1
    let url = link.id === PAGES.HOME ? '/' : `/lecture/${link.id}/`
    return <Fragment key={link.id + index}>
      {index !== 0 && <ArrowRight className={classes.icon}/>}
      <Link className={classNames(classes.link, last && classes.activeLink)} to={url}>{link.display}</Link>
    </Fragment>
  }

  render() {
    const {classes, className: classNameProp, breadcrumbs, other} = this.props
    const className = classNames(classes.root, classNameProp)

    return (
      <GoPrimeHeader className={className} {...other}>
        <div className={classes.breadCrumbs}>
          {breadcrumbs.map(this.createBreadCrumbs)}
        </div>
      </GoPrimeHeader>
    )
  }
}

export default withStyles(styles)(Header)
