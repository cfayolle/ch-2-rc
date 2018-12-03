### Recursive Deep Filter

#### 7 Points

Create the function `wordBank` that accepts no arguments and returns a function. The function returned from wordBank will either accept two strings, or one string.

```js
const findAndReplace = wordBank();
```

When **two strings** are passed as arguments to the function returned, the function will have a way to access the strings whenever the function returned is used. The first string represents a word to match and the second word represents the word to replace the matched word with. When there are two string arguments, the function returned does not return a value (undefined is the default values functions return if a value isn't returned).

When a **single string** is passed as an argument to the function returned, the function will return the same string \*\*except if a pair of strings were ever passed to the function, it will match and replace words in the string argument.

Review the example:

```js
const findAndReplace = wordBank();
findAndReplace('What are you up to today?'); // returns "What are you up to today?"

// match   replace match with
findAndReplace('today', 'tomorrow'); // nothing is returned

findAndReplace('What are you up to today?'); // returns "What are you up to tomorrow?"
```

In the example, `findAndReplace` holds the function returned from `wordBank`. When `findAndReplace` is initially invoked with a single string argument, the original string is returned (nothing is changed in the string). Afterward, `findAndReplace` is invoked with two string arguments. The pair of string arguments are stored for future invocations of `findAndReplace`. In the future, if findAndReplace is invoked with a single string, and the string contains the word `"today"`, it will be replaced with `"tomorrow"`. This is the behavior observed in the last line of code, `findAndReplace` is invoked with a single string argument `"What are you up to today?"`. Since the string contains `"today"` it is replaced with the string "tomorrow".

Here are a few more examples:

```js
const findAndReplace = wordBank();
findAndReplace('hello', 'goodbye');
findAndReplace('hello'); // returns 'goodbye'
```

<hr>

```js
const findAndReplace = wordBank();
findAndReplace('raining', 'snowing');
findAndReplace('I hope it stops raining'); // returns 'I whope it stops snowing'

findAndReplace('windy', 'cold');
findAndReplace('It is very windy and it is raining'); // returns 'It is very cold and it is snowing'
```

Note: In the previous example, notice that the words that are matched and replaced are stored for multiple invocations.
