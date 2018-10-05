### Reduce

#### 4 Points

Create the functions `mapReduce` and `everyReduce` that emulate the behavior of the [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) functions.

`mapReduce` accepts an array and callback function as arguments. Every value in the array is passed to the callback function and a new array is returned with the values returned from the callback function. `Array.prototype.map` cannot be used and you need to use the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function in your solution.

`everyReduce` accepts an array and callback function as arguments. The `everyReduce` function tests whether all elements in the array pass the test implemented by the callback (predicate) function. If all elements pass the test, `true` is returned, if one (or more) of the elements fail the test, `false` is returned. `Array.prototype.map` cannot be used and you need to use the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function in your solution.
