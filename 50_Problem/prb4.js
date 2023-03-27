// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (var i = 1; i <= 10; i=i+1) {
    printTable(i);
    console.log("");
}

function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}