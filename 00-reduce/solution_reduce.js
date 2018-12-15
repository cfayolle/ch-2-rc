
//add reduce? what is being reduced here?
function mapReduce(arr, callback){
    let newArr = []
    arr.forEach((elem)=>{
      newArr.push(callback(elem))
    })
    return newArr;
}

/* For mapReduce, the accumulator would be an array. Then you call the callback on each element
  and push it into the accumulator like this

  return arr.reduce((accum, curr) => {
    accum.push(func(curr));
    return accum;
  }, []);

*/

function everyReduce(arr, callback){
   return arr.reduce((accum, value)=>{
      return (callback(value))
    }, true)
}

// good job on everyReduce!
