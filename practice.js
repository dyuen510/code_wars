// const highAndLow = (str) => {
//     const numArray = [];
//     return str.map((item) => {
//         numArray.push(item); 
//     })
// }

// highAndLow('3 4 5')
// console.log('hello')

// [19,5,42,2,77];
// add the two lowest numbers

const sumOfTwoLowest = (num) => {
    num.sort((a,b) => b-a);
    console.log(num[0]+num[1])
}

// sumOfTwoLowest([19, 5, 42, 2, 77]);

// array destructing
const sumOf2Lowest = (num) => {
    const [firstNum, secondNum] = num.sort((a, b) => a - b);
    // console.log(firstNum + secondNum)
}

sumOf2Lowest([19, 5, 42, 2, 77]);

// convert alphabet to index number

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const alphabetPosition = (text) => {
    return text.toLowerCase()
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .map((letter) => alphabet.indexOf(letter) + 1).join(' ')
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))


// function arrayDiff(a, b) {
//     console.log(a.filter(x => !b.includes(x)));
// }

const arrayDiff = (a,b) => console.log(a.filter(x => !b.includes(x)));

//   arrayDiff([], [4,5]);
//   arrayDiff([3,4],[3]);


// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
const createPhoneNumber = (num) => {
  const first = [];
  const second = [];
  const third = [];

  for(var i = 0 ; i < 1; i++){
     first.push(num[0],num[1],num[2]);
     second.push(num[3], num[4], num[5]);
     third.push(num[6], num[7], num[8], num[9]);


  }
  const phoneNumber = ('(' + first.toString() + ') ' + second.toString() + '-' + third.toString())
  console.log(phoneNumber.replace(/,/g,''));
}

// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

// another way to do it
const createPhoneNum = (numbers) => {
    let format = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    console.log(format);
}

// createPhoneNum([4,5,6,3,5,6,7,8,9,3]);

// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")



const duplicateCount =(text) => {
    // console.log(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length);
    let dupCount = 0;
    let dupChar = {};
    let textArray = text.toLowerCase().split('');
    textArray.forEach(function(x) {
        dupChar[x] = (dupChar[x] || 0) + 1;
    });

    let obValues = Object.values(dupChar);
    for(let i = 0 ; i < obValues.length ; i++ ){
        if(obValues[i] > 1){
            dupCount++;
        }
    }

            console.log(dupCount);
        }

//   duplicateCount('aaabccBdAdd');
 
//VOWEL COUNT
const vowelCount = (str) => {
    let count = 0;
    let singleChar = str.toLowerCase().replace(/[^a-zA-z]/g, "").split('');
    
    for(let i = 0; i<=singleChar.length; i++) {
        if(singleChar[i] === 'a' || singleChar[i] === 'e' || singleChar[i] === 'i' || singleChar[i] === 'o' || singleChar[i] === 'u') {
            count = count + 1;
            console.log(singleChar[i]);
        }else{
            console.log('none');
        }
    }

    console.log(count);
}

// vowelCount('hello world')

// Another Way

const getCount = (str) => {
    let vowelsCount = 0;

    for (const letter of str) {
        if (
        letter === 'a' || 
        letter === 'e' || 
        letter === 'i' || 
        letter === 'o' || 
        letter === 'u'){
            vowelsCount++;
        }
    }
    console.log(vowelsCount)
}

// console.log(getCount('abracadabra'));

// another example with .match

const getCounts = (str) => {
    let vowelCount = 0;

    for (const letter of str) {
        if (letter.match(/[aeiou]/g)) {
            vowelCount++;
        }
    }

    console.log(vowelCount);
}

// console.log(getCounts('abracadabra'));

// Reduce Method for vowel count 
const getCountt = (str) => {
        // ternary operator

    const vowelCount = str.split('').reduce((acc, letter) => (letter.match(/[aeiou]/g) ? acc + 1 : acc), 0)
        // if(letter.match(/[aeiou]/g)) {
        //     return acc + 1;
        // }
}

// length of the matches vowel count 
const getCounta = (str) => (str.match(/[aeiou]/ig)||[]).length;

//s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

const printerError = (s) => {
    let correct = s.length;
    let errors = 0;

    for(const letters of s) {
        if (letters.match(/[nopqrstuvwxyz]/g)) {
            errors++;
        }
    }

    console.log(errors + '/' + correct);
}


// another example for printing errors
const printerErrors = (s) => console.log(s.match(/[^a-m]/g).length + '/' + s.length);

// printerErrors('hellosy');

// sum of multiples of 3 and 5


// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//  Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

//input 10,23
// function solution(number, target){
//   let sum = 0;
//   let totalNum = target;
//   let solutionNum = ''

//   for(let i = 1; i<=number; i++){
//       console.log(i)
//       if(i % 3 == 0 || i % 5 == 0 && i + sum <= target){
//           sum = i + sum
//           solutionNum = solutionNum.concat(i + ' ');
//       } else if(sum == target) {
//           console.log(solutionNum);
//       }
//   }
//   console.log(solutionNum);
// }

// solution(10,23);

const solution = (num) => {
    let sum = 0;

    for(let i = 1; i<num; i++){
        if(i % 3 === 0 || i % 5 === 0)
        sum = i + sum;
        // console.log(i);
        console.log(sum);
    }
    // console.log(sum);
}

// solution(10);

// format a string of names 
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''
const list = (names) => {
    names = names.map(({ name }) => name)
    lengthOfStr = names.length;
    if(lengthOfStr == 0){
        console.log('');
    }else if (lengthOfStr == 1){
        console.log(names);
    }else{
    let endName = names.pop();
    names = names.join(', ');
    console.log(names + ' & ' + endName);
    }
  }
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

// divisors
// Create a function named divisors/Divisors that takes an integer n > 1 
// and returns an array with all of the integer's divisors(except for 1 
//     and the number itself), from smallest to largest. If the number is 
//     prime return the string '(integer) is prime' (null in C#) 
//     (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
  let array = [];

  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
        array.push(i);
    }
  }

  if(array.length === 0){
      console.log(`${integer} is prime`)
  }else{
      console.log(array);
  }
};


// divisors(13);

// Descending Order

// Your task is to make a function that can take any non-negative integer as 
// an argument and return it with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     // console.log(n);
//     if(n.length <= 1){
//         console.log(parseInt(n));
//     }else{
//     let stringNum = n.toString();
//     let split = stringNum.split('');
//     let sorts = split.sort();
//     let reverse = sorts.reverse().join('');



//     console.log(reverse);
//     }
//   }

//   descendingOrder(1012312222);

function descendingOrder(n){
       
    let stringNum = String(n);
    let split = stringNum.split('');
    let sorts = split.sort();
    let reverse = parseInt(sorts.reverse().join(''));
    console.log(reverse);
    
  

}

//   descendingOrder(1012312222);

const sumOfArr = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i]);
    sum += arr[i];
    // console.log(sum);
    }
    console.log(sum);
    
}

// sumOfArr([5,3,2,1,7])

// given arr = [2,5,8,7,13,17];
// num = 7;
// answer = 3;

const linearSearch = (arr, num) => {
    for(let i = 0; i < arr.length; i++ ){
        if(num === arr[i]) console.log(i);
    }
}

// linearSearch([2,5,8,7,13,17], 2)

// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each 
// other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    // let arrayStr = iterable.split('');
    // console.log(typeof(iterable));
    let unique = [];
    
    //string
    if(typeof(iterable) === 'string'){
        let arrayStr = iterable.split('');
        for(let i = 0; i<=arrayStr.length; i++){
            if(arrayStr[i] !== unique[unique.length-1] && arrayStr[i] !== undefined) {
                unique.push(arrayStr[i]);
            }
        }
    }else if(typeof(iterable) === 'object'){
        for(let i = 0 ; i < iterable.length; i++){
            if(iterable[i] !== unique[unique.length-1]){
                unique.push(iterable[i]);
            }
        }
    }

    // console.log(arrayStr)
    console.log(unique);
  }

// uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder([1,2,2,3,3,1])       

// SUM OF ODD NUMBERS GIVEN A TRIANGLE
const rowSumOddNumbers = (n) => {
    // TODO
    console.log(Math.pow(n,3));
    // or
    console.log(n*n*n);
}

rowSumOddNumbers(2);