/**
 * Created by LeutrimNeziri on 28/02/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = ({palette, size, typography}) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  }
})

class Header extends React.Component {

  static get defaultProps() {
    return {}
  }

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

export default withStyles(styles)(Header)