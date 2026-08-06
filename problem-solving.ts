// ================================
// Problem 01: Reverse String
// ================================

const reverseString = (str: string): string =>{
    return str.split("").reverse().join("");
};
console.log(reverseString("hello"))


// ================================
// Problem 02: Even or Odd
// ================================

const checkEvenOdd = (num: number): string =>{
    if (num % 2 === 0) {
       return "Even" ;
    }

    return "Odd";
};

console.log(checkEvenOdd(7));


// ================================
// Problem 03: Find Largest Number
// ================================

const findLargest = (numbers: number[]): number => {
    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest){
            largest = number;
        }
    }

    return largest;
};

console.log(findLargest([10, 5, 25, 8, 15]));


// ================================
// Problem 04: Remove Duplicates
// ================================

const removeDuplicates = (numbers: number[]): number[] => {
  const result: number[] = [];

  for (const number of numbers) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// ================================
// Problem 05: Check Palindrome
// ================================

const isPalindrome = (str: string): boolean => {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


// ==========================================
// Problem 06: Find the Second Largest Number
// ===========================================

const findSecondLargest = (numbers: number[]): number => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const number of numbers) {
    if (number > largest) {
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest && number !== largest) {
      secondLargest = number;
    }
  }

  return secondLargest;
};

console.log(findSecondLargest([10, 5, 25, 8, 15]));


// ==========================================
// Problem 07: Factorial of a Number
// ===========================================

const factorial = (n: number): number => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(5));

// ==========================================
// Problem 08: Checking Prime Number
// ===========================================

const isPrime = (n: number): boolean => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(7));
console.log(isPrime(10));

// ==========================================
// Problem 08: Fibonacci Sequence
// ===========================================

const fibonacci = (n: number): number[] => {
  const result: number[] = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);

    const next = a + b;
    a = b;
    b = next;
  }

  return result;
};

console.log(fibonacci(7));