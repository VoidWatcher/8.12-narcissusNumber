function narcissusNumber() {
  let result = [];
  for (let i = 100; i <= 999; i++) {
    let digitCubeSum = i.toString().split('').reduce(function(sum, value) {
      return sum + Math.pow(parseInt(value), 3);
    }, 0);
    if (i == digitCubeSum) {
      result.push(i);
    }
  }
  return result;
}

console.log(narcissusNumber());