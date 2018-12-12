/* note: the function is pre-defined so the function can properly be tested. 
   don't forget to define the function's paramaters
*/
// function recursiveDeepFilter(arr, callback){
//   let first = arr[0];
//   if(arr.length === 0){
//       return []
//   } else {
//       let returnValue = recursiveDeepFilter(arr.slice(1), callback)
//       if(callback(first)){returnValue.push(first)}
//       return returnValue.reverse();
//   }
// }

function recursiveDeepFilter(arr, callback){
    let finalArr = [];
    for(let i = 0; i<arr.length; ++i){
      let elem = arr[i]
      if(Array.isArray(elem)){
        recursiveDeepFilter(arr.slice(1), callback)
      } else if (callback(elem)){
          finalArr.push(elem)
      }
    }
    return finalArr;
  }