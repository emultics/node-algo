function binarySearch(items, filterElement) {
  const index = recursiveBinarySearch(
    items,
    0,
    items.length - 1,
    filterElement
  );
  return index;
}

function recursiveBinarySearch(items, left, right, filterElement) {
  //check right >= left, right should be greater than or equals left
  //left : leftIndex, right:rightIndex | not element
  if (right >= left) {
    let midIndex = left + Math.floor((right - left) / 2);

    //if mid element equals to filterElement , found, return index;

    if (items[midIndex] === filterElement) return midIndex;
    // if mid element greater than filterElement go to the left half
    if (items[midIndex] > filterElement)
      return recursiveBinarySearch(items, left, midIndex - 1, filterElement);
    // if mid element lesser than the filter element go to the right array
    if (items[midIndex] < filterElement)
      return recursiveBinarySearch(items, midIndex + 1, right, filterElement);
  } else return -1;
}

module.exports = { binarySearch };
