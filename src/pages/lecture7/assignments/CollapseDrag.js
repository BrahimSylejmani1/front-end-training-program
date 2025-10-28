import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import ArrowDropDown from "presentations/icons/ArrowDropDown";
import classNames from 'classnames'

const collapasibleStyles = (theme) => ({
  root: {
    width: 320
  },
  title: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    padding: 4,
    alignItems: 'center'
  },
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap'
  },
  open: {
    display: 'flex',
  },
  closed: {
    display: 'none',
  }
})

const Collapsable = (props) => {
  const { className, open, classes, title, item, draggable = true, ...other } = props
  const contentClass = classNames(classes.content, open ? classes.open : classes.closed)

  const onDragStart = (event) => {
    event.dataTransfer.setData('item', JSON.stringify(item))
  }

  return (
    <div draggable={draggable} onDragStart={onDragStart} className={classNames(className, classes.root)} {...other}>
      <Typography className={classes.title}>
        {item.text} <ArrowDropDown />
      </Typography>
      <div className={contentClass}>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
      </div>
    </div>
  )
}
const CollapsableWithStyles = withStyles(collapasibleStyles)(Collapsable)

const collapseContainerStyles = (theme) => ({
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  card: {
    background: 'white',
    margin: 8,
    padding: 8,
    borderRadius: 8
  },
  leftSide: {
    minWidth: 320
  },
  content: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row wrap',
  }
})

class CollapsableContainer extends React.Component {

  onDrop = (event) => {
    const item = event.dataTransfer.getData('item')
    console.log('on drop', event, item)

    const { onDrop } = this.props
    onDrop(JSON.parse(item))
    // let the parent that an item is dropped
  }

  onDragOver = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  onDragLeave = (event) => {
    event.preventDefault()
  }

  render() {
    const { className, classes, children, ...other } = this.props
      const childrenArray = React.Children.toArray(children)

      const leftChildren = childrenArray.filter(
          (child) => child.props.item.placement === 'left')

      const rightChildren = childrenArray.filter(
          (child) => child.props.item.placement === 'right')

      const rightExpanded = rightChildren.map((child) =>
          React.cloneElement(child, { open: true, draggable: false })
      );


    return (
      <div className={classes.content}>
        <div className={classNames(classes.leftSide, classes.card)}>
          <Typography variant='title'>Left Side</Typography>
            {leftChildren}
        </div>
        <div
          className={classNames(classes.content, classes.card)}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
        >
            <Typography variant='title'>Dropped (Expanded)</Typography>
            {rightExpanded}
        </div>
      </div>
    )
  }
}

const CollapsableContainerWithStyles = withStyles(collapseContainerStyles)(CollapsableContainer)


const styles = (theme) => ({
})

class CollapseDrag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, text: 'First Draggable', placement: 'left' },
        { id: 2, text: 'Second Draggable', placement: 'left' },
        { id: 3, text: 'Third Draggable', placement: 'left' },
        { id: 4, text: 'Forth Draggable', placement: 'left' },
        { id: 5, text: 'Fifth Draggable', placement: 'left' },
        { id: 6, text: 'Sixth Draggable', placement: 'left' }
      ]
    }
  }

  onDrop = (item) => {
    this.setState(prevState => ({
      items: prevState.items.map(next => {
        if (next.id === item.id) {
          return { ...item, placement: 'right' }
        }
        return next
      })
    }))
  }

  render() {
    const { className, classes, ...other } = this.props
    const { items } = this.state
    console.log('items', items)
    return (
      <CollapsableContainerWithStyles onDrop={this.onDrop}>
        {items.map(next => <CollapsableWithStyles key={next.id} item={next} />)}
      </CollapsableContainerWithStyles>
    )
  }
}

export default withStyles(styles)(CollapseDrag)