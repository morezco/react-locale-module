export function removeRepeatingElements(array: Array<any>) {
  let result: typeof array = [];
  for (let item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
