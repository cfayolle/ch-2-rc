/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('recursiveDeepFilter', () => {
  it('returns an array', () => {
    const valueReturned = recursiveDeepFilter([1, 2, 3, 4], num => {
      return num > 2;
    });
    expect(Array.isArray(valueReturned)).toBe(true);
  });

  it('filters the values in the array that fail the test provided by the callback function', () => {
    const valueReturned = recursiveDeepFilter([1, 2, 3, 4], num => {
      return num > 2;
    });
    expect(valueReturned).toEqual([3, 4]);

    expect(
      recursiveDeepFilter(['one', 'two', 'three', 'four'], str => {
        return str.length <= 3;
      })
    ).toEqual(['one', 'two']);
  });

  it('filters nested arrays and includes the values that pass the callback functions test in the array returned (the filtered array)', () => {
    const arrayWithNesting = [1, 2, [3, 4, 5]];

    expect(
      recursiveDeepFilter(arrayWithNesting, num => {
        return num % 2 !== 0;
      })
    ).toEqual([1, 3, 5]);

    expect(
      recursiveDeepFilter([[2, 3, 4], [1, 7, 12], 13, 14], num => {
        return num % 2 === 0;
      })
    ).toEqual([2, 4, 12, 14]);
  });

  it('does not call Array.prototype.filter', () => {
    spyOn(Array.prototype, 'filter').and.callThrough();

    recursiveDeepFilter(['find', 'the', 'strings', 'greater', 'than', 'three'], (str) => {
      return str.length > 3;
    });

    expect(Array.prototype.filter.calls.count()).toBe(0);
  });

  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the recursiveDeepFilter function calls itself recursively 
      In order to make this spec work properly, the function needs to be declared as a function declaration:
        function recursiveDeepFilter() {
        }
      You can't use an expression:
        const recursiveDeepFilter = function() {}
        const recursiveDeepFilter = () => {}
      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.
    */

    spyOn(window, 'recursiveDeepFilter').and.callThrough();

    recursiveDeepFilter([8, 4, 0], num => {
      return num > 4;
    });

    // checks if `recSmallesInt` is called more than once (if it is recursive, it will be called more than one time)
    expect(recursiveDeepFilter.calls.count()).toBeGreaterThan(1);
  });
});
