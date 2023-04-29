// 1.Print numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Output : 1 2 3 4 5 6 7 8 9 10



// 2: Print the odd numbers less than 100

for (var i = 1; i <= 100; i += 2) {
    console.log(i);
}


//Output: 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99



// 3: Print the multiplication table with 7
for (var i = 1; i <= 10; i++) {
    var row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}

//Output :
/*
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
*/



// 4: Print all the multiplication tables with numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}


//Output :
/*
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10

2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20

3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30

4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50

6 * 1 = 6
6 * 2 = 12
6 * 3 = 18
6 * 4 = 24
6 * 5 = 30
6 * 6 = 36
6 * 7 = 42
6 * 8 = 48
6 * 9 = 54
6 * 10 = 60

7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70

8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80

9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
9 * 4 = 36
9 * 5 = 45
9 * 6 = 54
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
9 * 10 = 90

10 * 1 = 10
10 * 2 = 20
10 * 3 = 30
10 * 4 = 40
10 * 5 = 50
10 * 6 = 60
10 * 7 = 70
10 * 8 = 80
10 * 9 = 90
10 * 10 = 100
*/



// 5: Calculate the sum of numbers from 1 to 10
var sum = 0;

for (var i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

//Output : Sum of 1 to 10 numbers : 55



// 6: Calculate 10!
var prod = 1;

for (var i = 1; i <= 10; i++) {
    prod *= i;
}

console.log("Result Is : "+prod);

//Output : Result Is : 3628800



// 7: Calculate the sum of odd numbers greater than 10 and less than 30
var sum = 0;

for (var i = 11; i <= 30; i += 2) {
    sum += i;
}

console.log("Sum Of Number : "+sum);

//Output : Sum Of Number : 200



// 8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(n) {
    return n * 1.8 + 32;
}

var r = celsiusToFahrenheit(20);
console.log("Temperature : "+r+" F");

//Output : Temperature : 68 F



// 9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(n) {
    return (n - 32) / 1.8;
}

var r = fahrenheitToCelsius(68);
console.log("Temperature : "+r+" C");

//Output : Temperature : 20 C



// 10: Calculate the sum of numbers in an array of numbers
function sumArray(ar){
    var sum = 0;
    for(var i=0;i<ar.length;i++){
        sum += ar[i];
    }
    return sum;
}
var ar = [2,9,10,-20]
var sum = sumArray(ar)
console.log("Sum Is : "+sum);

//Output : Sum Is : 1



// 11: Calculate the average of the numbers in an array of numbers

function averageArray(ar) {
    var n = ar.length;
    var sum = 0;

    for (var i = 0; i < n; i++) {
        sum += ar[i];
    }

    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

console.log("Average : ", avg);

// Output : Average :  23.6



// 12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
    var ar2 = [];

    for (var i = 0; i < ar.length; i++) {
        var el = ar[i];

        if (el >= 0) {
            ar2.push(el);
        }
    }

    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log("Positive Numbers of Array : "+ar2);

//Output : Positive Numbers of Array : 10,12,5,90,0,1



// 13: Find the maximum number in an array of numbers
function findMax(ar) {
    var max = ar[0];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }

    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max Value : ", max);


//Output : Max Number :  100



// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for (var i = 2; i < 10; i++) {
    var fi = f1 + f0;
    console.log(fi);

    f0 = f1;
    f1 = fi;
}


//Output : 0 1 1 2 3 5 8 13 21 34



