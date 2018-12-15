
const wordBank = () => {
    let first = '';
    let second = '';
    return (str, str1) => {
      if(!str1){
          return str.replace(first, second)
      } else {
          first = str;
          second = str1
      }
    }
}

/* You are on the right track here. You create closure by creating the first/second variables,
but in order store these pairs, you need to create an {} and store the words as key/value pairs. Please review
the solution code

function censoredPhrase(phraseIn, bank) {
  for (let i in bank) {
    phraseIn = phraseIn.replace(i, bank[i]);
  }
  return phraseIn;
}

function wordBank() {
  const bank = {};
  function findAndReplace(find, replace) {
    if (!replace) {
      return censoredPhrase(find, bank);
    } else {
      bank[find] = replace;
      // 	console.log(lexicon);
      return;
    }
  }
  return findAndReplace;
}

*/
