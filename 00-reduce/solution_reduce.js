const mapReduce = (arr, func) => {
  return arr.reduce((accum, curr) => {
    accum.push(func(curr));
    return accum;
  }, []);
};

const everyReduce = (arr, func) => {
  return arr.reduce((accum, curr) => {
    if(accum) accum = func(curr);
    return accum;
  }, true);
};

// function dirReduc(plan) {
//   var opposite = {
//     'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//   return plan.reduce(function(dirs, dir){
//       if (dirs[dirs.length - 1] === opposite[dir])
//         dirs.pop();
//       else
//         dirs.push(dir);
//       return dirs;
//     }, []);
// }
