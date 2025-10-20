import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import { Button } from "@material-ui/core";

const Card = (props) => {
  const { title, titleClass, content, ...other } = props
  return (
    <div {...other}>
      <Typography variant={'title'} className={titleClass}>{title}</Typography>
      <Typography variant={'p'} className={content} >
        I want to be draggable!
			</Typography>
    </div>
  )
}

// x, y = 0
const draggable = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        x: 0,
        y: 0
      }
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }


    onMouseDown = (event) => {
      const { pageX, pageY } = event
      const { x, y } = this.state
      this.setState({
        location: {
          x: pageX - x,
          y: pageY - y
        }
      })
    }

    onMouseMove = (event) => {
      const { pageX, pageY } = event
      const { location } = this.state
      if (!location) {
        return
      }

      this.setState({
        x: pageX - location.x,
        y: pageY - location.y
      })
    }

    onMouseUp = (event) => {
      this.setState({
        location: null
      })
    }

    render() {
      const { x, y } = this.state
      const { style: styleFromProps, onMouseDown, onMouseUp, onMouseMove, ...other } = this.props
      // { height: 50 }
      // const styleFromProps = this.props.style
      const style = {
        top: y,
        left: x,
        ...styleFromProps
      }
      return (
        <WrappedComponent
          onMouseDown={this.onMouseDown}
          style={style}
          {...other}
        />
      )
    }
  }
}

// x, y = 0
const resizable = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        width: 320,
        height: 180,
        x: 0,
        y: 0
      }
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }

    render() {
      const { x, y } = this.state
      const { style: styleFromProps, ...other } = this.props
      // { height: 50 }
      // const styleFromProps = this.props.style
      return (
        <div>
          <WrappedComponent {...other} />
          <div />
        </div>
      )
    }
  }
}

const DraggableCard = draggable(Card, false)

const styles = ({ size }) => ({
  root: {
    width: '100%',
    background: 'grey',
    height: 720,
    position: 'relative'
  },
  card: {
    backgroundColor: 'white',
    width: 280,
    height: 140,
    margin: size.spacing,
    padding: 8,
    display: 'flex',
    position: 'absolute',
    flexFlow: 'column wrap',
    alignItems: 'flex-start'
  },
})

const Resizable = (props) => {
  const { classes, ...other } = props

  const cardProps = {
    titleClass: classes.title,
    className: classes.card,
    content: classes.content
  }
  return (
    <div className={classes.root}>
      <DraggableCard {...cardProps} />
    </div>
  )
}

export default withStyles(styles)(Resizable)