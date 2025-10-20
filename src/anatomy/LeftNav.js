/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import IconButton from '@material-ui/core/IconButton'
import LeftNavPane from 'containers/LeftNavPane'
//Icons
import Logo from 'presentations/icons/Logo'
import LogoTextIcon from 'presentations/icons/LogoTextIcon'

const styles = ({size, zIndex, palette, typography}) => ({
  root: {
    maxWidth: 320,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: palette.navBgColor,
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    color: palette.textColorInverse,
  },
  leftNavHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    height: 80,
    padding: size.spacing * 2,
    // borderBottom: `1px solid ${palette.borderColor}`
  },
  logo: {
    fontSize: size.avatarSize,
    padding: 0,
    marginRight: size.spacing * 2
  },
  logoText: {
    fontSize: size.spacing * 5,
    width: 'unset'
  },
  icon: {
    fontSize: size.headingFontSize,
    color: palette.textColorInverse,
    opacity: 0.7,
    '&$iconActive, &:hover': {
      opacity: 1
    }
  },
  iconActive: {},
  leftNavRoot:{
    height: `calc(100% - 80px)`,
    overflowY: 'overlay'
  }
})

class LeftNav extends React.Component {

  state = {
    active: ''
  }

  onNavClick = (which, event) => {
    event.preventDefault()
    this.setState({
      active: which
    })
  }

  onClose = event => {
    this.setState({active: ''})
  }

  render() {
    const {className: classNameProp, classes, breadcrumbs, children} = this.props
    const {active} = this.state
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        <div className={classes.leftNavHeader}>
          <IconButton
            color="inherit"
            className={classes.logo}
            onClick={event => this.onNavClick('', event)}>
            <Logo fontSize="inherit"/>
          </IconButton>
          <LogoTextIcon className={classes.logoText}/>
        </div>
        {/*Left Nav Pane*/}
        <LeftNavPane className={classes.leftNavRoot} breadcrumbs={breadcrumbs} open={true} active={active} onClose={this.onClose}/>
      </div>
    )
  }
}

export default withStyles(styles)(LeftNav)
