const setItemPosition = (item: HTMLButtonElement, x: number, y: number) => {
  item.style.transform = `translate3D(${x * 100}%, ${y * 100}%, 0)`
}

export default setItemPosition;
