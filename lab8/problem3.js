Array.prototype.mySort = function () {
  let arr = this;
  let length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};


console.log([4,2,7,2,8].mySort());






console.log(f1, f2);