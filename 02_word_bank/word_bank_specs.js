/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('wordBank', () => {
  it('returns a function', () => {
    expect(typeof wordBank()).toBe('function');
  });

  it('when two string arguments are passed to the function returned from "findAndReplace", the function does not return a value', () => {
    const findAndReplace = wordBank();
    expect(findAndReplace('hello', 'goodbye')).toBe(undefined); // note: if a function doesn't return a value, it will return undefined by default
  });

  it('if one argument is passed to the function returned, the function will return a string', () => {
    const findAndReplace = wordBank();
    expect(typeof findAndReplace('The best of both worlds')).toBe('string');
  });

  it('the function returned from wordBank uses the two string arguments to replace a word in a single string argument', () => {
    const findAndReplace = wordBank();
    findAndReplace('hello', 'goodbye');

    expect(findAndReplace('hello')).toBe(findAndReplace('goodbye'));
  });

  it('the function returned from wordBank uses the two string arguments to replace a word in a single string argument', () => {
    const findAndReplace = wordBank();

    expect(findAndReplace('The best of both worlds')).toBe(
      'The best of both worlds'
    );

    findAndReplace('worlds', 'planets'); // reference the second test spec, when there are two string arguments, nothing is returned from the function

    expect(findAndReplace('The best of both worlds')).toBe(
      'The best of both planets'
    );
  });

  it('works with multiple invocations', () => {
    const findAndReplace = wordBank();

    findAndReplace('cake', 'pie');
    expect(findAndReplace('A piece of cake')).toBe('A piece of pie');

    findAndReplace('iPhone', 'Pixel');
    expect(findAndReplace('I purchased a new iPhone')).toBe(
      'I purchased a new Pixel'
    );

    expect(
      findAndReplace('I purchased a new iPhone and ate a piece of cake')
    ).toBe('I purchased a new Pixel and ate a piece of pie');
  });
});
