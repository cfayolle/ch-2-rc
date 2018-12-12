
//add reduce? what is being reduced here?
function mapReduce(arr, callback){
    let newArr = []
    arr.forEach((elem)=>{
      newArr.push(callback(elem))
    })
    return newArr;
}

function everyReduce(arr, callback){
   return arr.reduce((accum, value)=>{
      return (callback(value))
    }, true)
}