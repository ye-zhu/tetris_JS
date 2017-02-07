import Game from './game.js'
import React from 'react'
import ReactDOM from 'react-dom'

class View extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: new Game(this)
    }
  }

  render () {

    let piece = this.state.game.gamePiece
    let board = this.state.game.board.grid.map((row, rowidx) => {
        let units = row.map((unit, colidx) => {

            let additionClass;
            this.state.game.gamePiece.pos.forEach((el) => {
              if (el[0] === rowidx && el[1] === colidx) {
                additionClass = this.state.game.gamePiece.fillColor
              }
            })

            if (rowidx === 0 || rowidx === 1) {
              additionClass = "black"
            }

          return (
            <div className={`unit ${additionClass} ${unit.filled}`} key={`${colidx}`}>
            </div>
          )

        })

        return (
          <div className={`row`} key={`${rowidx}`}>
            {units}
          </div>
        )

      })

    return (
      <div>
        {board}
      </div>
    )
  }

  //End
}

export default View

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  ReactDOM.render(<View />, root )
})
