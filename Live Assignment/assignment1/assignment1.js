// A multiplication table for a given number using a for loop.

function multiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var row = num + " * " + i + " = " + num * i;
        console.log(row);
    }
}
multiplicationTable(1);
console.log(" ");
multiplicationTable(2);
console.log(" ");
multiplicationTable(3);
console.log(" ");
multiplicationTable(4);