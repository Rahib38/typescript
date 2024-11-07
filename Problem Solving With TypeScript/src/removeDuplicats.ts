{
  function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
  console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6, 7, 7]));
}
