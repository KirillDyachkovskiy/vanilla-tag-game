const shuffle = <T>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    const rndI = Math.floor(Math.random() * i);

    [arr[i], arr[rndI]] = [arr[rndI], arr[i]];
  }

  return arr;
}

export default shuffle;
