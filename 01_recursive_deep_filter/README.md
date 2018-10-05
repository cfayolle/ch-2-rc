### Recursive Deep Filter

#### 8 Points

The `recursiveDeepFilter` function accepts an array and callback function as arguments. Every element in the array is passed to the callback function, if the element passes the test, the element
is included in the array returned from `recursiveDeepFilter` which consists of all of the elements that passed the test of the callback function.

If the array argument has nested arrays, the callback function should test the elements in the nested arrays and include the elements that pass the tests in the filtered array returned.

The `recursiveDeepFilter` function is a recursive function (it should call itself). `recursiveDeepFilter` should not call the [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function.
