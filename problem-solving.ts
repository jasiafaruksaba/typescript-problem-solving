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