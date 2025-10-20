/**
 * Created by LeutrimNeziri on 31/03/2019.
 */
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import ArrowDown from 'presentations/icons/ArrowDropDown'
import {lighten} from 'polished'


const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexFlow: 'column nowrap',
    flexShrink: 0
  },
  title: {
    padding: `${size.spacing}px 0px`,
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center'
  },
  icon: {
    transition: transitions.common,
    transform: `rotate(-90deg)`,
    '& > *': {
      fontSize: size.spacing * 2
    },
    color: palette.textColorInverse,
    padding: size.spacing / 2
  },
  iconExpanded: {
    transform: `rotate(0)`,
  },
  content: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap'
  }
})


class Collapsible extends React.Component {

  state = {
    open: this.props.open
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  onCollapse = event => {
    event.stopPropagation()
    event.preventDefault()

    this.setState(state => ({
      open: !state.open
    }))
    const {onCollapse} = this.props
    
    if (onCollapse) {
      onCollapse(event)
    }
  }

  render() {
    const {children, className: classNameProp, classes, title} = this.props
    const {open} = this.state
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        {title && <div className={classes.title}>
          <IconButton 
            classes={{ root: classNames(classes.icon, open && classes.iconExpanded)}}
            onClick={this.onCollapse}>
            <ArrowDown/>
          </IconButton>
          {title}
        </div>}
        {open && <div className={classes.content}>
          {children}
        </div>}
      </div>
    )
  }
}

export default withStyles(styles)(Collapsible)
