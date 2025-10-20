/**
 * Created by LeutrimNeziri on 31/03/2019.
 */
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import NavLink from 'presentations/rows/nav/NavLink'
import Collapsible from 'presentations/Collapsible'
import IconButton from '@material-ui/core/IconButton'
import ArrowDown from 'presentations/icons/ArrowDropDown'
import {darken, lighten, rgba} from 'polished'
import { PAGES } from "Constants"

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexFlow: 'column nowrap',
    height: 'auto',
    borderTop: `1px solid ${rgba(palette.common.white, 0.1)}`,
    '&:last-child': {
      borderBottom: `1px solid ${rgba(palette.common.white, 0.1)}`
    }
  },
  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
    height: 60,
    flexShrink: 0
  },
  navLinkRoot: {
    flex: 1,
    padding: size.spacing * 2,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block'
  },
  content: {
    display: 'flex',
    width: '100%',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    padding: `${size.spacing * 2}px 0px`,
    overflowY: 'auto',
    minHeight: 100,
    maxHeight: 300,
    backgroundColor: darken(0.03, palette.navBgColor),
    boxShadow: `inset 0px 0px 10px ${rgba(palette.common.black, 0.4)}`,
    borderTop: `1px solid ${rgba(palette.common.white, 0.1)}`,
  },
  icon: {
    transition: transitions.common,
    marginRight: size.spacing * 2,
    '& > *': {
      transition: transitions.common,
      transform: `rotate(-90deg)`,
      fontSize: size.spacing * 3
    },
    padding: size.spacing / 2,
    color: palette.textColorInverse
  },
  iconExpanded: {
    '& > *': {
      transform: `rotate(0)`
    }
  },
  collapsibleRoot: {
    paddingLeft: size.spacing * 2
  },
  collapsibleContent: {
    flexFlow: 'column nowrap'
  },
  hide: {
    opacity: 0
  },
  subLink: {
    fontSize: size.defaultFontSize
  }
})

class NavRowWrapper extends React.Component {

  static get defaultProps() {
    return {
      open: false,
      defaultOpen: false
    }
  }

  processChildren = (child, index) => {
    const {classes, item} = this.props
    const children = child.children || []
    const hideIcon = children.length <= 0
    const url = `/lecture/${child.id}/`
    const title = <NavLink className={classes.subLink} to={url}>{child.display}</NavLink>

    const { breadcrumbs } = this.props

    return (
      <Collapsible
        key={child.id}
        open={!!breadcrumbs.find(which => which.id === child.id)}
        classes={{
          root: classes.collapsibleRoot,
          icon: hideIcon && classes.hide,
          content: classes.collapsibleContent
        }}
        title={title}>
        {children && children.length > 0 && children.map(this.processChildren)}
      </Collapsible>
    )
  }

  onClick = event => {
    const {onClick} = this.props
    if (onClick) onClick(event)
  }

  onCollapse = event => {
    const {onCollapse, item} = this.props
    event.preventDefault()
    event.stopPropagation()
    if (onCollapse) onCollapse(event, item)
  }

  render() {
    const {classes, className: classNameProp, item, item: {children = []}, open, defaultOpen, ...other} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    let url = `/lecture/${item.id}/`
    switch (item.id) {
      case PAGES.HOME:
        url = '/'
        break
      case PAGES.SANDBOX:
        url = '/sandbox/'
        break
    }
    return (
      <div className={className}>
        <div className={classes.header}>
          <NavLink className={classes.navLinkRoot} to={url}
                   onClick={this.onClick}>{item.display}</NavLink>
          {children && children.length > 0 &&
          <IconButton
            classes={{ root: classNames(classes.icon, open && classes.iconExpanded)}}
            onClick={this.onCollapse}>
            <ArrowDown/>
          </IconButton>}
        </div>
        {children && children.length > 0 && (defaultOpen || open) && <div className={classes.content}>
          {children.map(this.processChildren)}
        </div>}
      </div>
    )
  }
}

export default withStyles(styles)(NavRowWrapper)
