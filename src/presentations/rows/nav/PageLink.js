/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    padding: `${size.spacing}px 0px`,
    fontSize: size.titleFontSize,
    textDecoration: 'none',
    transition: transitions.common,
    '&:hover': {
      color: palette.leadColor
    },
  },
  inline: {
    display: 'contents',
  },
  active:{
    color: palette.leadColor
  }
})

const PageLink = props => {
  const {classes, children, inline, className: classNameProp, ...other} = props
  let active = props.to === window.location.pathname
  const className = classNames(
    classes.root,
    active && classes.active,
    inline && classes.inline,
    classNameProp
  )


  return (
    <Link className={className} {...other}>
      {children}
    </Link>
  )
}

export default withStyles(styles)(PageLink)
