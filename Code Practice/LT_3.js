function sumOfEvenSqr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum = sum + arr[i] * arr[i];
      }
    }
    return sum;
  }

const arr = [1, 2, 3, 4, 5];
console.log("Sum of Even Number is : " + sumOfEvenSqr(arr));