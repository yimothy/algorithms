// """Inputs
//
// Never Empty Array
// Alway Integer
//
// Challenge 2
//
// Given an array and a starting edge and an ending edge
// sum consecutive like numbers, if there are numbers that
// are also like prior to the starting edge go back and add those in as well (given [1,1,1,2,2,2] and a starting edge with index 1 and an ending edge with index 4 return [3,6]
//
//
//        S=2           E=6
//          |                |
// [2, 1, 1, 1, 4, 3, 6, 6, 1] => [3, 4, 3, 6]"""
//

function sumConsecPlus(array, s, e) {
  let result = [];
  let numTimes = 1;
  let i = s;
  while(i <= e) {
    let curr = array[i];
    if(s === i) {
      tempIdx = s-1;
      while(array[tempIdx] === curr) {
        numTimes++;
        tempIdx--;
      }
    }
    while(array[i+1] === curr) {
      numTimes++;
      i++;
    }
    result.push(numTimes*curr);
    numTimes = 0;
    i++;
  }
  return result;
}
