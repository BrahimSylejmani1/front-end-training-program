/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import React from "react";
import { Button } from "@material-ui/core";

/**
 * Takes an array of board moves and calculates if there is a winner, if so returns the winner moves
 * @param {Array} squares - the
 * @returns {Object} - the winner object, with the moves as an array
 */
function calculateWinner(squares = []) {
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
  staus: {
    display: 'flex',
    flexFlow: 'column nowrap',
  }
}

class Square extends React.Component {

  render () {
    return (
      <Button>
        TODO
      </Button>
    )
  }
}

class Board extends React.Component {

  renderSquare = (i) => {
    return <Square value={i} />
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default class Game extends React.Component {

  constructor (props) {
    super (props)


    this.state = {
      // PUT YOUR STATE HERE
    }
  }
  render() {
    return (
      <div style={styles.game}>
        <div>
          <Board />
        </div>
        <div style={styles.staus}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
