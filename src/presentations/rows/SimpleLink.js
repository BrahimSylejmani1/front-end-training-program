/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'

const styles = ({palette, size, transitions}) => ({
  root: {
    padding: `0px ${size.spacing / 2}px`,
    fontSize: size.titleFontSize,
    transition: transitions.common,
    '&:hover': {
      textDecoration: 'underline'
    },
    display: 'contents',
    color: palette.leadColor
  },
  active:{
  }
})

const SimpleLink = props => {
  const {classes, children, className: classNameProp, active, ...other} = props
  const className = classNames(
    classes.root,
    active && classes.active,
    classNameProp
  )


  return (
    <a className={className} {...other}>
      {children}
    </a>
  )
}

export default withStyles(styles)(SimpleLink)
