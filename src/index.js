module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let result = [];
  
  for (let arr of matrix){
    if(matrix.indexOf(arr) % 2 !== 0) arr.reverse();
    for (let obj of arr) {
      result.push(obj);
    }
  }
  return result;
}
