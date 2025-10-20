/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

import { 
  randomValuesOfLength,
  randomPositiveValues,
  randomWordsOfLength,
  randomGroupsOfLength,
  uniqueValues
} from 'utils/DataGenerator'
import { TextField, Button } from "@material-ui/core";

const styles = ({ typography, size }) => ({
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start'
  },
  search: {
    width: '100%',
  }
})

const groups = uniqueValues(randomGroupsOfLength(5))
const words = randomWordsOfLength(50)
const values = randomPositiveValues(50)

const items = values.map((value, index) => ({ group: groups[index % groups.length], word: words[index % words.length], value, inStock: index % 5 === 0 }))

const grouped = groups.map(group => {
  return {
    group,
    children: items.filter(next => next.group === group)
  }
})

const cardStyle = {
  root: {
    display: 'flex', 
    flexFlow: 'column wrap',
    backgroundColor: 'white',
    broderRadius: 16,
    height: 320,
    width: 280,
    margin: 16,
    padding: 16,
    fontSize: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    width: '100%',
    marginBottom: 8
  }
}
const Card = (props) => {
  const next = props.item
  return (
    <div style={cardStyle.root}>
      <div style={cardStyle.title}>
        {next.group}
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {next.children.map((child, index) => {
          return (
            <div key={`${next.group}-${child.word}-${index}`} style={{ width: '100%', marginBottom: 4, fontSize: 18 }}>
              {child.word} {child.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          )
        })}
      </div>
    </div>
  )
}
class Exercise extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      items: grouped,
      search: ''
    }
  }

  onSearchChanged = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { classes, section } = this.props
    const { items, search } = this.state
    const filtered = items
      .map(next => {
        return {...next, children: next.children.filter(child => child.word.toLowerCase().includes(search.toLowerCase()))}
      })
      .filter(which => which.children.length > 0)

      /// 0.0001ms
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section, we are going to do an exercise following the concepts that we learned in the previous sections/lectures.
          </Typography>
          <Divider />
        </Typography>
        <div className={classes.content}>
          <TextField fullWidth onChange={this.onSearchChanged} value={search} label={"Search"} placeholder="Word... Group..." />
          <div style={{width: '100%', display: 'flex', flexFlow: 'row wrap', alignItems: 'flex-start'}}>
            {filtered.map(next => {
              return <Card key={next.group} item={next} />
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Exercise)
