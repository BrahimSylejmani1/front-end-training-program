/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import ReactRedux from 'assets/images/lecture8/react_redux.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Italic } from "presentations/Label";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Todo from 'pages/lecture8/todo/Todo'
const styles = ({ typography }) => ({
  actionWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    width: '100%'
  },
})

const connectingComponent = `
import { connect } from 'react-redux'
import { fetchUsers } from 'reducers/users/UserActions'
const Component = (props) => {
  console.log('props', props)
  return <div>
    I can dispatch actions to the store, and read store values through props provided by the connect HOC
  </div>
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})
const ReduxAwareComponent = connect(mapStateToProps, mapDispatchToProps)(Component)
`

class ReactIntegration extends React.Component {

  render() {
    const { classes, section } = this.props
    const exercise = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>

        <Typography variant={'p'}>
          So far, we have managed our model by using state at a React component and passing it down to child components. Through props we reacted to changes through functions and this way we managed our models through organised components in a hierarchy.
        </Typography>
        <Typography variant={'p'}>
          With Redux we can basically split these concerns and make it the reducers responsibility to handle state change, and redux to manage our store! Now we can distribute this store at any React component by using the <Italic>connect</Italic> HOC!
        </Typography>
        <Typography variant={'p'}>
          That looks like this:
          <Code>
            {connectingComponent}
          </Code>
        </Typography>
        <Typography variant='p'>
          The following image explains the difference in this approach:
        </Typography>
        <img src={ReactRedux} />

        <Typography variant='title' id={exercise.id}>
          {exercise.display}
        </Typography>
        <Typography variant='p'>
          In order to explain this integration we are going to do an example here, of the simple ToDo List implementation using React and Redux!
        </Typography>

        <Todo />
      </Fragment>
    )
  }
}

export default withStyles(styles)(ReactIntegration)
