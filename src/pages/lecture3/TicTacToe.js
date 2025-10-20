/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import React from "react";
import { Button } from "@material-ui/core";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        moves: lines[i]
      }
    }
  }
  return {
    winner: '',
    moves: []
  };
}

const styles = {
  game: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 460,
    width: '100%'
  },
  status: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  highlight: {
    color: 'blue'
  },
  normal: {
    color: 'inherit'
  }
}

function stylesFromHighlight (highlight) {
  return highlight ? styles.highlight : styles.normal
}

class Square extends React.Component {
  render() {
    const { value, highlight, onClick } = this.props
    return (
      <Button style={stylesFromHighlight(highlight)} onClick={onClick}>
        {value || '-'}
      </Button>
    );
  }
}

class Board extends React.Component {

  renderSquare (i) {
    const { highlight, squares, onSquareClicked } = this.props
    let active = highlight.includes(i)
    return <Square highlight={active} key={`row-${i}`} value={squares[i]} onClick={() => {
      onSquareClicked(i)
    }} />
  }

  render() {
    let elements = Array(3).fill(null)
    return (
      <div>
        {elements.map((next, row) =>
          <div key={`board-row-${row}`}>
            {elements.map((next, index) => {
              return this.renderSquare((row * 3) + index)
            })}
          </div>
        )}
      </div>
    );
  }
}

export default class Game extends React.Component {

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
  
  get player () {
    const { stepIndex } = this.state
    return stepIndex % 2 === 0 ? 'X' : 'O'
  }

  handleClick (index) {
    const { history, stepIndex } = this.state
    const board = history[stepIndex].board
    const value = this.player

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
      key={`history-${index}`}>
      <Button style={style} onClick={handler}>{label}</Button>
    </li>
  }

  render() {
    const { history, stepIndex } = this.state
    const board = history[stepIndex].board
    const status = this.player
    const { winner, moves } = calculateWinner(board)
    let label = `Next player is ${status}`
    const total = board.reduce((accumulator, next) => {
      return accumulator + (next ? 1 : 0)
    }, 0)
    if (winner) {
      label = `Winner is ${winner}`
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
        <div style={styles.status}>
          <div>{label}</div>
          <ol>{history.map((next, index) => this.renderHistoryAt(next, index))}</ol>
        </div>
      </div>
    );
  }
}
