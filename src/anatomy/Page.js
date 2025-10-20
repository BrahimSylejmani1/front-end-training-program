/**
 * Created by LeutrimNeziri on 28/02/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = ({palette, size, typography}) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexFlow: 'row wrap',
    backgroundColor: palette.bgColor,
    height: '100vh',
    overflow: 'hidden',
    color: palette.textColor,
    fontSize: size.defaultFontSize
  }
})

class Page extends React.Component {

  render() {
    const {className: classNameProp, classes, children, props} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Page)