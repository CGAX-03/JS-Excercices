// Generate 3 random whole numbers between 1 and 100
let numbers = [];
for (let i = 0; i < 3; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

// Find the greatest and smallest numbers in the array
let greatest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > greatest) {
    greatest = numbers[i];
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

// Print the results
console.log("The 3 random whole numbers are: " + numbers.join(", "));
console.log("The greatest number is: " + greatest);
console.log("The smallest number is: " + smallest);
