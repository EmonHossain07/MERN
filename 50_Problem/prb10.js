// Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumArray(ar){
    var sum = 0;
    for(var i=0;i<ar.length;i++){
        sum += ar[i];
    }
    return sum;
}
var ar = [1,9,10,-20]
var sum = sumArray(ar)
console.log(sum);