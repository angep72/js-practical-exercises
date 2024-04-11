function oddSquares (s){
var newArray = s.filter((element)=>element%2 !== 0)
var results  = newArray.map((element)=>element*element);
return results
}
console.log(oddSquares([1,54,34,34,42,23]))