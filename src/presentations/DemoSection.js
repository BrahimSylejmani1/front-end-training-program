/**
 * Created by LeutrimNeziri on 08/03/2019.
 */
import React, {Fragment} from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import IconButton from '@material-ui/core/IconButton'
import Code from 'presentations/Code'
import Collapse from '@material-ui/core/Collapse';
import ShowCodeIcon from 'presentations/icons/CodeIcon'
import {rgba} from 'polished'
const styles = ({palette, size, typography}) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
  },
  header: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    marginBottom: size.spacing * 4,
  },
  description: {
    ...typography.headerLight,
  },
  title: {
    ...typography.display,
    marginBottom: size.spacing * 2,
  },
  demo: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
    backgroundColor: rgba(palette.disabledColor, 0.1),
    padding: `${size.spacing* 3}px 0px`,
    borderRadius: size.baseRadius * 2
  },
  code: {
    display: 'flex',
    width: '100%',
    paddingBottom: size.spacing * 3
  },
  contentHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: size.spacing * 3
  },
  codeBtn: {},
  demoContent:{
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%'
  },
  innerTitle: {
    ...typography.header
  }
})


class DemoSection extends React.Component {

  state = {
    open: this.props.showCode || false
  }

  toggleCodeBlock = event => {
    event.preventDefault()
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    const {className: classNameProp, title, description, code, children, classes} = this.props
    const {open} = this.state
    let className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <span className={classes.description}>{description}</span>
        </div>
        <div className={classes.demo}>
          <div className={classes.contentHeader}>
            <span className={classes.innerTitle}>{open ? 'Code' : 'Demo'}</span>
            <IconButton pressed={open} className={classes.codeBtn} onClick={this.toggleCodeBlock}>
              <ShowCodeIcon/>
            </IconButton>
          </div>
          <Collapse in={open}>
            <div className={classes.code}>
              <Code>{code}</Code>
            </div>
          </Collapse>
          <div className={classes.demoContent}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DemoSection)