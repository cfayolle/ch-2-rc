
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
