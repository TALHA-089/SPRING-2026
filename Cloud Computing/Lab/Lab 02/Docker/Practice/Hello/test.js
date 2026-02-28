const add = require('./app.js');

console.log("Starting Unit Test: Checking if 2 + 6 = 8...");

if (add(2, 6) === 8) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}