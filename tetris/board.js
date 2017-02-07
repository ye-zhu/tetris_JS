class Board {
  constructor () {
    this.grid = this.makeBoard();
  }

 units () {
   let units = Array(14).fill().map((unit, colidx) => {
     let filled = (colidx === 0 || colidx === 12 || colidx === 1 || colidx ===13) ? 'black' : false
     return {filled}
    })
    return units
 }

 makeBoard () {
    let grid = Array(25).fill().map((row, rowidx) => this.units())
    grid[23].forEach((el) => {el.filled = "black"})
    grid[24].forEach((el) => {el.filled = "black"})
    return grid
  }





  //End
}

export default Board
