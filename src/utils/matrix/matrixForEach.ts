import {TPosition} from "../../types/position";

const matrixForEach = <T>(matrix: T[][], cb: (value: T, index: TPosition, self: T[][]) => void) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      cb(matrix[row][col], {row, col}, matrix);
    }
  }
}

export default matrixForEach;
