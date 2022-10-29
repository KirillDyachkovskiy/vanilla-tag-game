import matrixToArray from "./matrixToArray";

const matrixIsSorted = (matrix: number[][]) => matrixToArray(matrix).every((num, idx, self) => num > self[idx - 1] || idx === 0);

export default matrixIsSorted;
