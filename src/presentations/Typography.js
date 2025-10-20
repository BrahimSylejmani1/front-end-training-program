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
  title: 'title'
}
const fontStyles = {
  italic: 'italic'
}

const styles = ({palette, size, typography}) => ({
  root: {
    color: palette.textColor,
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    '&$lead': {
      color: palette.leadColor,
    }
  },
  lead: {},
  inverted: {
    color: palette.textColorInverse,
  },
  heading: {
    fontSize: size.displayFontSize,
    fontWeight: typography.weight.bold,
    margin: `0px 0px ${size.spacing * 3}px 0px`,
    color: 'inherit'
  },
  subHeading: {
    fontSize: size.headerFontSize + size.spacing,
    margin: `0px 0px ${size.spacing * 2}px 0px`,
    fontWeight: typography.weight.regular,
    color: 'inherit'
  },
  title: {
    fontSize: size.headerFontSize,
    margin: `${size.spacing}px 0px`,
    lineHeight: 1.7,
    fontWeight: typography.weight.bold,
    color: 'inherit'
  },
  p: {
    fontSize: size.titleFontSize,
    margin: `${size.spacing}px 0px`,
    lineHeight: 1.7,
    fontWeight: typography.weight.regular,
    color: 'inherit'
  },
  italic: {
    fontStyle: 'italic'
  }
})

const Typography = ({classes, variant, fontStyle, inverted, component: ComponentProp, lead, className: classNameProp, children, ...other}) => {

  const className = classNames(
    classes.root,
    variant === variants.heading && classes.heading,
    variant === variants.subHeading && classes.subHeading,
    variant === variants.title && classes.title,
    variant === variants.p && classes.p,
    fontStyle === fontStyles.italic && classes.italic,
    lead && classes.lead,
    inverted && classes.inverted,
    classNameProp
  )


  return (
    <ComponentProp className={className} {...other}>
      {children}
    </ComponentProp>
  )
}

Typography.defaultProps = ({
  component: 'div',
  lead: false,
  inverted: false,
  variant: variants.p
})


Typography.propTypes = ({
  lead: PropTypes.bool,
  inverted: PropTypes.bool,
  fontStyle: PropTypes.string,
  component: PropTypes.any,
  variant: PropTypes.oneOf(Object.keys(variants))
})

export default withStyles(styles)(Typography)
