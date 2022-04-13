
const number = process.argv.slice(2);
// console.log(number);

// edge cases:
// 1. no numbers,should be no beep and end it
// 2. negative numbers, ignore
// 3. input is not as number. ignore


// iterating loops
for (let num of number) {
  
  // checking edge cases, ignore if condition is met
  if (num <= 0 || num === "" || isNaN(num)) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(num);
  }, num * 1000);
  
}

// node timer1.js 10 3 5 15 9
//  beep at : 3 seconds, 5 seconds, etc