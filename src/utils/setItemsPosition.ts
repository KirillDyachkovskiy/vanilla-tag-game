import setItemPosition from "./setItemPostion";
import matrixForEach from "./matrix/matrixForEach";

const setItemsPosition = (matrix: number[][], items: HTMLButtonElement[]) =>
  matrixForEach(matrix, (value, {row, col}) => {
    setItemPosition(items[value - 1], row, col)
  })

export default setItemsPosition;
