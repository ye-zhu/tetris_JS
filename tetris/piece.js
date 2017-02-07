const PIECETYPES = {
  'orange':[[1,5],[1,6],[1,7],[1,8]],
  'red': [[2,6],[1,6],[2,7],[1,7]],
  'salmon': [[1,6],[1,7],[1,8],[2,8]],
  'blue': [[1,6],[1,7],[1,8],[2,6]],
  'lightgreen': [[1,6],[1,7],[2,7],[2,8]],
  'pink': [[1,6],[1,7],[1,8],[2,7]],
  'teal': [[1,7],[1,8],[2,7],[2,6]]


}


class Piece {
  constructor () {
    this.buildPiece();
    this.startPos;
    this.pos;
    this.fillColor;
  }

  buildPiece () {
        var keys = Object.keys(PIECETYPES)
        let color = keys[ keys.length * Math.random() << 0]
        this.fillColor = color
        this.pos = PIECETYPES[color]
        this.startPos = PIECETYPES[color]
  }

  //End
}

export default Piece
