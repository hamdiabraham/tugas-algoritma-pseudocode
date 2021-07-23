let max = 100;
let min = 1;
while (min <= max) {
  if (min % 3 === 0 && min % 5 === 0) {
    console.log("FizzBuzz");
  } else if (min % 3 === 0) {
    console.log("Fizz");
  } else if (min % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(min);
  }
  min++;
}
