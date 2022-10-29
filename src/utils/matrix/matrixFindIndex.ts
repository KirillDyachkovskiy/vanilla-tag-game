import {TPosition} from "../../types/position";

const matrixFindIndex = <T>(matrix: T[][], target: T): TPosition => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) return { row, col };
    }
  }

  return { row: -1, col: -1 };
}

export default matrixFindIndex;
