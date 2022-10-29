import './style.css'
import splitToChunks from "./utils/array/splitToChunks";
import setItemsPosition from "./utils/setItemsPosition";
import matrixFindIndex from "./utils/matrix/matrixFindIndex";
import matrixGetNeighs from "./utils/matrix/matrixGetNeighs";
import swapItemsPosition from "./utils/swapItemsPosition";

const field = document.querySelector<HTMLDivElement>('.field');
export const fieldItems = Array.from(document.querySelectorAll<HTMLButtonElement>('.field__item'));

function main() {
  if (fieldItems.length !== 16) throw Error('Должно быть 16 элементов');

  const values = fieldItems.map((elem) => Number(elem.innerHTML));
  const matrix = splitToChunks(values, 4);

  setItemsPosition(matrix);

  let hiddenPosition = matrixFindIndex(matrix, 16);

  field?.addEventListener('click', (event: MouseEvent) => {
    const clickedButton = (event.target as HTMLButtonElement).closest('button');
    const clickedItem = Number(clickedButton?.innerHTML);

    const neighs = matrixGetNeighs(matrix, hiddenPosition);
    const neigh = neighs.find(([value]) => value === clickedItem);

    if (!neigh) return;

    const neighPosition = neigh[1];

    swapItemsPosition(matrix, hiddenPosition, neighPosition);
    setItemsPosition(matrix);

    hiddenPosition = neighPosition;
  })
}

main();
