import {TPosition} from "../../types/position";

type TNeigh<T> = [T, TPosition];

const matrixGetNeighs = <T>(matrix: T[][], position: TPosition): TNeigh<T>[] => {
  const masks = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const result: TNeigh<T>[] = [];

  for (let i = 0; i < masks.length; i++) {
    const row = position.row + masks[i][0];
    const col = position.col + masks[i][1];
    const value = matrix[row]?.[col];

    if (value !== undefined) result.push([value, { row, col }]);
  }

  return result;
}

export default matrixGetNeighs;
