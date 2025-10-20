/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from 'classnames'

const variants = {
  heading: 'heading',
  subHeading: 'subHeading',
  p: 'p',
}

const styles = ({palette, size, typography}) => ({
  root: {
    width: '100%',
    display: 'flex',
    margin: `${size.spacing}px 0px ${size.spacing * 3}px 0px`,
    '&:before': {
      content: '""',
      width: 60,
      display: 'flex',
      height: 4,
      backgroundColor: palette.leadColor
    },
    '&$lead': {
      color: palette.leadColor,
    }
  },
  lead: {

  }
})

const Divider = ({classes, variant, inverted, component: ComponentProp, lead, className: classNameProp, children, ...other}) => {

  const className = classNames(
    classes.root,
    lead && classes.lead,
    inverted && classes.inverted,
    classNameProp
  )


  return (
    <div className={className} {...other}/>
  )
}

Divider.defaultProps = ({
  variant: variants.p
})


export default withStyles(styles)(Divider)
