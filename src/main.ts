import './style.css'
import splitToChunks from "./utils/array/splitToChunks";
import setItemsPosition from "./utils/setItemsPosition";
import matrixFindIndex from "./utils/matrix/matrixFindIndex";
import matrixGetNeighs from "./utils/matrix/matrixGetNeighs";
import swapItemsPosition from "./utils/swapItemsPosition";
import matrixIsSorted from "./utils/matrix/matrixIsSorted";
import {TPosition} from "./types/position";
import getRandomElem from "./utils/array/getRandomElem";

const FIELD = document.querySelector<HTMLDivElement>('.field');
const FIELD_ITEMS = Array.from(document.querySelectorAll<HTMLButtonElement>('.field__item'));

const SHUFFLE_BUTTON = document.querySelector<HTMLButtonElement>('.shuffle');
const SWAPS_COUNT = 50;

function main() {
  if (FIELD_ITEMS.length !== 16) throw Error('Должно быть 16 элементов');

  const values = FIELD_ITEMS.map((elem) => Number(elem.innerHTML));
  const matrix = splitToChunks(values, 4);

  setItemsPosition(matrix, FIELD_ITEMS);

  let hiddenPosition = matrixFindIndex(matrix, 16);

  const makeMove = (newPos: TPosition) => {
    swapItemsPosition(matrix, hiddenPosition, newPos);
    setItemsPosition(matrix, FIELD_ITEMS);

    hiddenPosition = newPos;

    if (FIELD) {
      FIELD.dataset.solved = String(matrixIsSorted(matrix));
    }
  }

  FIELD?.addEventListener('click', (event: MouseEvent) => {
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
  });

  let counter = 0;
  let interval: NodeJS.Timer;

  SHUFFLE_BUTTON?.addEventListener('click', () => {
    counter = 0;
    clearInterval(interval);
    let lastPosition = { col: -1, row: -1 };

    interval = setInterval(() => {
      const neighs = matrixGetNeighs(matrix, hiddenPosition);
      const randomNeigh = getRandomElem(neighs);
      let position = randomNeigh[1];

      if (position.row === lastPosition.row && position.col === lastPosition.col) {
        position = getRandomElem(neighs.filter(neigh => neigh !== randomNeigh))[1];
      }

      lastPosition = hiddenPosition;
      makeMove(position);

      counter++;
      if (counter > SWAPS_COUNT) {
        clearInterval(interval);
      }
    }, 100)
  })
}

main();
