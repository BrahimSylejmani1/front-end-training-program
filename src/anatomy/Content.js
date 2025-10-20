/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Page from 'anatomy/Page'
import Header from 'anatomy/Header'
import LeftNav from 'anatomy/LeftNav'

const styles = ({palette, size, typography, shadows}) => ({
  '@global': {
    ol: {
      margin: `${size.spacing}px 0px`,
      width: '100%'
    },
    ul: {
      margin: `${size.spacing}px 0px`,
      width: '100%'
    },
    img: {
      boxShadow: shadows[3]
    }
  },
  appWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    flexFlow: 'row wrap',
    display: 'flex',
    alignContent: 'flex-start',
    flex: 1,
    overflowY: 'auto',
    padding: `${size.spacing * 2}px ${size.spacing * 4}px`
  },
  footer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${size.spacing}px 0px`,
    fontSize: size.captionFontSize,
    color: palette.disabledColor,
    fontStyle: 'italic'
  }
})

class Content extends React.Component {

  static get defaultProps() {
    return {
      showHeader: true,
      title: ''
    }
  }

  render() {
    const {classes, className: classNameProp, children, showHeader, breadcrumbs, ...other} = this.props
    const className = classNames(classes.root, classNameProp)
    return (
      <Page className={className} {...other}>
        <LeftNav open={true} breadcrumbs={breadcrumbs}/>
        <div className={classes.appWrapper}>
          {showHeader && <Header breadcrumbs={breadcrumbs}/>}
          <div id={'content'} className={classes.content}>
            {children}
          </div>
          <div className={classes.footer}>
            Made by Agon Lohaj and Leutrim Neziri
          </div>
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(Content)
