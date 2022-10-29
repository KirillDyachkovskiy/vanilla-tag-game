import './style.css'
import splitToChunks from "./utils/array/splitToChunks";
import setItemsPosition from "./utils/setItemsPosition";
import matrixFindIndex from "./utils/matrix/matrixFindIndex";
import matrixGetNeighs from "./utils/matrix/matrixGetNeighs";
import swapItemsPosition from "./utils/swapItemsPosition";
import matrixIsSorted from "./utils/matrix/matrixIsSorted";
import {TPosition} from "./types/position";

export const field = document.querySelector<HTMLDivElement>('.field');
export const fieldItems = Array.from(document.querySelectorAll<HTMLButtonElement>('.field__item'));

function main() {
  if (fieldItems.length !== 16) throw Error('Должно быть 16 элементов');

  const values = fieldItems.map((elem) => Number(elem.innerHTML));
  const matrix = splitToChunks(values, 4);

  setItemsPosition(matrix);

  let hiddenPosition = matrixFindIndex(matrix, 16);

  const makeMove = (newPos: TPosition) => {
    swapItemsPosition(matrix, hiddenPosition, newPos);
    setItemsPosition(matrix);

    hiddenPosition = newPos;

    if (field) {
      field.dataset.solved = String(matrixIsSorted(matrix));
    }
  }

  field?.addEventListener('click', (event: MouseEvent) => {
    const clickedButton = (event.target as HTMLButtonElement).closest('button');
    const clickedItem = Number(clickedButton?.innerHTML);

    const neighs = matrixGetNeighs(matrix, hiddenPosition);
    const neigh = neighs.find(([value]) => value === clickedItem);

    if (!neigh) return;

    const neighPosition = neigh[1];

    makeMove(neighPosition);
  });

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    const neighPosition = { ...hiddenPosition };

    switch (event.key) {
      case 'ArrowUp':
        neighPosition.col++;
        break;
      case 'ArrowDown':
        neighPosition.col--;
        break;
      case 'ArrowLeft':
        neighPosition.row++;
        break;
      case 'ArrowRight':
        neighPosition.row--;
        break;
    }

    if (matrix[neighPosition.row]?.[neighPosition.col] === undefined) return;

    makeMove(neighPosition);
  })
}

main();
