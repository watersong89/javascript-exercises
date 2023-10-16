const removeFromArray = function(array, ...toRemove) {
  array = array.filter(arg => !toRemove.includes(arg));
  return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
