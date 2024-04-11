function arrayStats (array){
    var sum = array.reduce((acc,currentValue)=> acc+currentValue,0)
     var average = sum/array.length;
     var maxNumber = Math.max(...array);
     var minNumber = Math.min(...array);
     var results =[];
        results.push(sum);
        results.push(average);
        results.push(maxNumber);
        results.push(minNumber);
    
     return results
}
console.log(arrayStats([1,2,3,4,5,6,7]));