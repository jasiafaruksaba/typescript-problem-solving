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