import {TPosition} from "../types/position";

const swapItemsPosition = (matrix: number[][], posA: TPosition, posB: TPosition) => {
  [matrix[posA.row][posA.col], matrix[posB.row][posB.col]] = [matrix[posB.row][posB.col], matrix[posA.row][posA.col]];
}

export default swapItemsPosition;
