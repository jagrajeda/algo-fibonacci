function fibonacci(num) {
  // also remember to keep defined variable - I reverted to n instead of the established num and tests failed at first
  // taking what I learned from Linus I will do my base cases here 
  // fibonacci tells us F(0)=0 , F(1) = 1 , and for any num > 1: F(num) = F(num -1) + F(num -2)
  if (num === 0) return 0;
  if (num === 1) return 1;

  let previous2 = 0;
  let previous1 = 1;
  let current = 0;

  for (let i = 2; i <= num; i++) {
    current = previous1 + previous2;
    previous2 = previous1;
    previous1 = current;
  }
  return current;
}

module.exports = fibonacci;
