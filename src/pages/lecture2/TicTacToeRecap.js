/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Code from "presentations/Code";
import KeyMissingImage from "assets/images/lecture3/key_missing.png";

const styles = ({ typography, size }) => ({
})

const initialSquare = `
class Square extends React.Component {
  render() {
    return (
      <Button>
        TODO
      </Button>
    );
  }
}`
const square = `
class Square extends React.Component {
  render() {
    const { value, highlight, onClick } = this.props
    return (
      <Button style={stylesFromHighlight(highlight)} onClick={onClick}>
        {value || '-'}
      </Button>
    );
  }
}`

const board = `
class Board extends React.Component {

  renderSquare (i) {
    const { highlight, squares, onSquareClicked } = this.props
    let active = false
    if (highlight) {
      active = highlight.includes(i)
    }
    return <Square highlight={active} key={\`row-\${i}\`} value={squares[i]} onClick={() => {
      onSquareClicked(i)
    }} />
  }

  render() {
    let elements = Array(3).fill(null)
    return (
      <div>
        {elements.map((next, row) =>
          <div key={\`row-\${row}\`}>
            {elements.map((next, index) => {
              return this.renderSquare((row * 3) + index)
            })}
          </div>
        )}
      </div>
    );
  }
}
`

const game = `
class Game extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      history: [
        {
          board: Array(9).fill(null),
        }
      ],
      stepIndex: 0
    }
  }
  
  get isXNext () {
    const { stepIndex } = this.state
    return stepIndex % 2 === 0
  }

  handleClick (index) {
    const { history, stepIndex } = this.state
    const isXNext = this.isXNext
    const board = history[stepIndex].board
    const value = isXNext ? 'X' : 'Y'

    const { winner } = calculateWinner(board)
    if (board[index] || winner) {
      return
    }
    this.setState({
      history: [...history.filter((history, index) => index <= stepIndex), {
        board: board.map((next, boardIndex) => {
          if (index === boardIndex) {
            return value
          }
          return next
        }),
      }],
      stepIndex: stepIndex + 1
    })
  }
  jumpToStep (index) {
    this.setState({
      stepIndex: index
    })

  }

  renderHistoryAt(next, index) {
    const { stepIndex } = this.state
    const handler = () => {
      this.jumpToStep(index)
    }
    const label = index === 0 ? 'Start of the Game' : 'Move # ' + index
    const highlight = stepIndex === index
    const style = stylesFromHighlight(highlight)
    return <li
      style={style}
      key={\`history-\${index}\`}>
      <Button style={style} onClick={handler}>{label}</Button>
    </li>
  }

  render() {
    const { history, stepIndex } = this.state
    const board = history[stepIndex].board
    const isXNext = this.isXNext
    const status = isXNext ? 'X' : 'Y'
    const { winner, moves } = calculateWinner(board)
    let label = \`Next player is \${status}\`
    const total = board.reduce((accumulator, next) => {
      return accumulator + (next ? 1 : 0)
    }, 0)
    if (winner) {
      label = \`Winner is \${winner}\`
    } else if (total === 9) {
      label = 'Game Over!'
    }

    return (
      <div style={styles.game}>
        <div>
          <Board highlight={moves} squares={board} onSquareClicked={(index) => {
            this.handleClick(index)
          }} />
        </div>
        <div style={styles.staus}>
          <div>{label}</div>
          <ol>{history.map((next, index) => this.renderHistoryAt(next, index))}</ol>
        </div>
      </div>
    );
  }
}
`

const listAtLecture = 
`
renderHistoryAt(next, index) {
  ...
  return <li
    style={style}
    key={\`history-\${index}\`}>
    <Button style={style} onClick={handler}>{label}</Button>
  </li>
}
`

const keyBadExample = `
<ol>
  {numbers.map((number) =>
    <li>
      {number}
    </li>
  )}
</ol>
`

const keyGoodExample = `
<ol>
  {numbers.map((number) =>
    <li key={number}>
      {number}
    </li>
  )}
</ol>
`

class TicTacToeRecap extends React.Component {
  render() {
    const { classes, section } = this.props
    let functionalComponents = section.children[0]
    // let tictactoe = section.children[1]

    const numbers = [1, 2, 3, 4, 5]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant={'p'}>
          Let's do a quick recap on the previous Tic Tac Toe Example. The solution is located at 'src/pages/lecture3/TicTacToe'. It includes also the solution on bonus assignments!
        </Typography>

        <Typography variant={'p'}>
          We started off with an initial Square component that looked like this:
        </Typography>
        <Code>
          {initialSquare}
        </Code>
        
        <Typography variant={'p'}>
          At the end we ended up with the following Square component, highlighting steps that won the game as well, being told what to do by its parent:
        </Typography>
        
        <Code>
          {square}
        </Code>
        <Typography variant={'p'}>
          The Square component basically lifted up the state, such that everything is managed by the parent Component (Node).
        </Typography>

        <Typography variant={'p'}>
          Our Board component maintained the sole purpose of handling multiple squares without caring about the logic on how they would intercat. Same as the Square component, our board is used only to render visual elements without any state of its own:
        </Typography>
        
        <Code>
          {board}
        </Code>

        <Typography variant={'p'}>
          And the Game component handled all the heavy lifting. By that it means that all the logic was embedded into once component. That basically looks like this:
        </Typography>

        <Code>
          {game}
        </Code>

        
        <Typography variant={'p'}>
          One key difference (no pun intended) from the last lecture that we did is the addition of the key property at the {'<li>'} node:
        </Typography>

        <Code>
          {listAtLecture}
        </Code>

        <Typography variant={'p'}>
          Which, if you don't specify and look at the console log, right click on the web app and select "Inspect Element" and going to the "Console" tab, looks like this (Try removing it from the solution):
        </Typography>
        <Typography variant={'p'}>
          <img src={KeyMissingImage}/>
        </Typography>

        <Typography variant={'p'}>
          In this page the following example code renders the list, fix it please, see the next paragraph:
          <Code>
            {keyBadExample}
          </Code>
          <ol>
            {numbers.map((number) =>
              <li>
                {number}
              </li>
            )}
          </ol>
        </Typography>

        <Typography variant={'p'}>
          Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
        </Typography>
        <Code>
          {keyGoodExample}
        </Code>
      </Fragment>

    )
  }
}

export default withStyles(styles)(TicTacToeRecap)
