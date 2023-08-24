
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let rows = false
  let arr = []

  if(matrix == undefined || matrix.length === 0) {
    return []
  }

  for(let i=0; i<matrix.length; i++) {
    if(!rows) {
      arr = arr.concat(matrix[i])
      rows = true
    } else {
      arr = arr.concat(matrix[i].reverse())
      rows = false  
    }
  }

  return arr
}
