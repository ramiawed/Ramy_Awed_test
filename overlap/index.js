// check if the element in array are in order
// if not swap the element
// if [3, 1] will return [1, 3]
function swapElement(point) {
  if (point[0] > point[1]) {
    [point[0], point[1]] = [point[1], point[0]];
  }
}

function checkOverlap(p1, p2) {
  // order the element inside each points
  // ex [13, 5] => [5, 13]
  swapElement(p1);
  swapElement(p2);

  // destruct the value from the points based on which
  // point is lowest
  const [p1x1, p1x2] = p1[0] < p2[0] ? p1 : p2;
  const [p2x1, p2x2] = p1[0] < p2[0] ? p2 : p1;

  // check if there is an overlap
  if (p2x1 > p1x1 && p2x1 < p1x2 && p2x2 > p1x2) {
    return true;
  }

  return false;
}

// test the module
console.log(
  checkOverlap([10, 20], [9, 19])
    ? "there is an overlap"
    : "there is no overlap"
); // there is overlap
console.log(
  checkOverlap([9, 19], [10, 20])
    ? "there is an overlap"
    : "there is no overlap"
); // there is overlap
console.log(
  checkOverlap([11, 19], [10, 20])
    ? "there is an overlap"
    : "there is no overlap"
); // there is no overlap
console.log(
  checkOverlap([9, 21], [10, 20])
    ? "there is an overlap"
    : "there is no overlap"
); // there is no overlap
