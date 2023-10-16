const sumAll = function(val1, val2) {
  let numArray = [];
  let sum = 0;
  if (!Number.isInteger(val1) || !Number.isInteger(val2) || val1 < 0 || val2 < 0) {
    return 'ERROR';
  }else if (val1 < val2) {
    for (let i = 0; i < val2; i++) {
      numArray.push(val1);
      val1++;
    }
  } else if (val1 > val2) {
    for (let i = 0; i < val1; i++) {
      numArray.push(val2);
      val2++;
    }
  }
for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i];
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
