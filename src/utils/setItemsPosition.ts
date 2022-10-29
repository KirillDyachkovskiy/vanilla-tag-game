import {fieldItems} from "../main";
import setItemPosition from "./setItemPostion";
import matrixForEach from "./matrix/matrixForEach";

const setItemsPosition = (matrix: number[][]) =>
  matrixForEach(matrix, (value, {row, col}) => {
    setItemPosition(fieldItems[value - 1], row, col)
  })

export default setItemsPosition;
