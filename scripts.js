// Write a for loop that increments a counter variable by 10 each time, and displays the value.
var tenList = document.getElementById("task1");

for (var i = 0; i < 100; i += 10) {
    tenList.innerHTML += "<li>" + i + "</li>";
}



// Write a for loop that divides a counter variable by 2 each time, and displays the value.
var dividedByTen = document.getElementById("task2");
for (var j = 16384; j > 1; j = j/2) {
    dividedByTen.innerHTML += "<li>" + j + "... divided by 2 equals..." + "</li>";
}



// Augment the loop to insert each new value into an array
var newArray = [];
var displayArray = document.getElementById("task3");

for (var j = 400; j > 3; j = j/2) {
    console.log("var j", j);
    newArray.push(j)
}

displayArray.innerHTML = "[";
for (var i = 0; i < newArray.length - 1; i++) {
 displayArray.innerHTML += newArray[i] + ", ";
}


displayArray.innerHTML += newArray[newArray.length - 1] + "]";


// Write a loop that starts at 100 and decrements a variable by 1. 
var evenThenOddArray = []; 
displayArray2 = document.getElementById("task4");

for (var i = 100; i > 0; i--) {
    if (i%2 === 0) {
        evenThenOddArray.unshift(i); // If the number is even, add the number to the beginning of an array,
    } else {
        evenThenOddArray.push(i); //  else add it to the end of the array.
    }
}

displayArray2.innerHTML = "[";
for (var i = 0; i < evenThenOddArray.length - 1; i++) {
 displayArray2.innerHTML += evenThenOddArray[i] + ", ";
}


displayArray2.innerHTML += evenThenOddArray[evenThenOddArray.length - 1] + "]";

console.log("evenThenOddArray", evenThenOddArray);