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
    console.log(Math.pow(n,2));
    // or
    // console.log(n*n*n);
}

// rowSumOddNumbers(2);

// DOES MY NUMBER LOOK BIG IN THIS

// A Narcissistic Number is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, 
// we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon 
// whether the given number is a Narcissistic number in base 10. This may be 
// True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, 
// only valid positive non-zero integers will be passed into the function.

const narcissistic = (value) => {
    // Code me to return true or false
    // let stringValue = value.toString();
    let individualValue = value.toString().split('');
    let lengthOfValue = individualValue.length;
    let powerOfValue = 0;

    for (let i = 0 ; i < lengthOfValue ; i++) {
        // console.log(individualValue[i])
        let pow = Math.pow(individualValue[i], lengthOfValue);
        // console.log(pow)
        powerOfValue += pow;
    }

    console.log(value === powerOfValue ? 'true' : 'false')

    // console.log(individualValue, lengthOfValue);

  }
  

//   narcissistic(1938);

//   Bob is preparing to pass IQ test. The most frequent task in this test is to find out which
//   one of the given numbers differs from the others. Bob observed that one number usually differs 
//   from the others in evenness. Help Bob — to check his answers, he needs a program that among the 
//   given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements 
//   start from 1 (not 0)

//   iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

//   iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

const iqTest = (numbers) => {
    let splitNum = numbers.split(' ');
    console.log(splitNum);
    let oddCount = 0;
    let evenCount = 0;
    let oddIndex = 1;
    let evenIndex = 1;


    for(let i = 0; i<splitNum.length; i++){
        console.log(splitNum[i]);
        if(splitNum[i] % 2 === 1 ) {
            oddCount++;
            oddIndex = oddIndex + parseInt(i);
        }else{
            evenCount++;
            evenIndex = evenIndex + parseInt(i);
        }

    }

    // console.log(oddCount);
    // console.log(evenCount);
    if(oddCount < evenCount) {
        console.log(oddIndex);
    }else{
        console.log(evenIndex);
    }
    // console.log(oddCount, evenCount);
    // console.log(oddIndex, evenIndex);

//     oddCount < evenCount ? 
  }

//   iqTest("2 4 7 8 10")
// iqTest("1 2 1 1")

// another solution

// function iqTest(numbers){
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
//     var odd = numbers.filter(function(el){ return el % 2 === 1});
//     var even = numbers.filter(function(el){ return el % 2 === 0});
    
//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
//   }

// BREAK CAMELCASE 
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const breakCase = (string) => {
    console.log(string.replace(/([A-Z]+)/g,' $1'));
}

// breakCase('camelcase');

// What's a Perfect Power anyway?

// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as 
// an integer power of another positive integer. More formally, n is a perfect power 
// if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, 
// return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, 
// None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so 
// (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a 
// perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });

const isPP = (n) => {
    let PP = [];

    for (let i = 0; i<n.length; i++){
        for(let j = 0; j<n.length; j++){
            if(Math.pow(i,j) == n){
                PP.push(i,j)
            }
        }
    }
    if(PP.length == 0){
        console.log(`${n} isn't a perfect number`);

    }else{
    console.log(`${n} = ${PP[0]}^${PP[1]}`);
    // return null; 
    }
  }

//   isPP(5,6,9);

// FIRST NON CONSECUTIVE 
const firstNonConsecutive = (arr) => {
    for(let i =0; i<arr.length - 1; i++){
        let curr = arr[i];
        let next = arr[i+1];

        if(curr + 1 !== next) {
            console.log(next);
        }
    }
    console.log(null)
}

//No oddities here
const noOdds = (values) => {
 let oddArr = [];

 for(let i = 0 ; i<=values.length; i++){
    //  console.log(values[i]);
     if(values[i] % 2 === 0){
         oddArr.push(values[i]);
     }
 }
 console.log(oddArr);
}

// noOdds([0,1,2,3])

// filter method
const noOddsFilter = (values) => {
    return values.filter(val => val % 2 === 0)
}

//Consonant Value
const solve = (s) => {
    console.log(Math.max(...s.replace(/[aeiou]+/g, ' ').trim()
    .split(' ').map(addUpSubstr)));
}

const charToValue = (c) => {
    return c.charCodeAt(0) - 96;
}

const addUpSubstr = (str) => {
    return str.split('').map(charToValue).reduce((acc, item) => acc += item, 0);
}
// solve('zodiac');
// another example
// const solve = (s) => s.split(/[aeiou]+/).reduce((s,n) => Math.max(s, n.split('').reduce((a,b) => a + b.charCodeAt(0) - 96, 0)),0)
// with match example
// const solve = (s) => Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s,v) => s + v.charCodeAt() - 96, 0)))

// Spinning words

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"
const spinWords = (string) => {
    let newStr = '';
    let splitWords = string.split(' ');
    for(let i = 0 ; i<splitWords.length; i++){
        // console.log(splitWords[i]);
        if(splitWords[i].length > 4){
            let reverseWord = splitWords[i].split('').reverse().join('');
            splitWords[i] = reverseWord;
            
        }   
    }
    console.log(splitWords.join(' '));
  }

//   spinWords("Hey fellow warriors")

// another example
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

// FIND MISSING LETTER 
const findMissingLetter = (arr) => {
    for(let i = 0; i<arr.length; i++){
        const curr = arr[i].charCodeAt(0);
        const next = arr[i+1].charCodeAt(0);

        if(curr + 1 !== next) {
            return String.fromCharCode(curr+1);
        }
    }
}

// IP VALIDATION
const isValidIP = (str) => { 
    return str.split('.').filter((v) => { v==Number(v).toString() && Number(v) < 256 && Number(v) >= 0}).length == 4}

// TWO BIGGEST NUM
const diffBig2 = (arr) => {
    let sum = 0;
    let base = 0;
    let highNum = Math.max(...arr);
    let splicedArr = arr.splice(arr.indexOf(highNum), 1);
    console.log(arr);
  
    // console.log(highNum)
    for(let i = 0 ; i<=arr.length; i++){
        if(arr[i] === highNum || arr[i] > base){
            base = arr[i];
        //   console.log(base);
        }
    }

    console.log(highNum - base);
}

// diffBig2([1,8,3,8])
// another example
// const diffBig2 = arr => {
//     let max = Math.max(...arr);
//     arr.splice(arr.indexOf(max), 1);
//     return max - Math.max(...arr);
//   }

// BUILD TOWER
// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
const towerBuilder = (nFloors) => {
    // build here
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(nFloors - i - 1))
    }
    console.log(tower);
}

//   towerBuilder(5);
// another example
// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }

// LONGEST VOWEL CHAIN
function solves(s){
    // let vowels = 'aeiou';
    let arrayNoVowels = s.replace(/[^aeiou]/g,' ').split(' ');
    let filterArr = arrayNoVowels.filter(Boolean);
    let lengthOfItem = filterArr.map(item => item.length);
    console.log(Math.max(...lengthOfItem));
    
   }

// another example 
// const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

// +1 Array
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

// Test.assertSimilar(upArray([2,3,9]), [2,4,0]);
// Test.assertSimilar(upArray([4,3,2,5]), [4,3,2,6]);
// Test.assertSimilar(upArray([1,-9]), null);

const upArray = (arr) => {
  let splitArr = arr.join('').split(' ');
  let newArray = [];

  if(arr.length == 0){
      newArray.push(1);
  }else if(splitArr.includes('-')) {
      console.log(null);
  }else{
      let oneArray = (parseInt(splitArr) + 1);
      let strArray = oneArray.toString().split('');
      strArray.map(item => newArray.push(item));
    //   console.log(strArray);
  }
  console.log(newArray);
}

// upArray([4,3,2,5])

var FilterString = function(value) {
    //Complete this function :)
    let number = value.replace(/[^0-9]/g,'');
    console.log(number)
    
  }

//   FilterString("aa1bb2cc443dd")


// VASYA-CLERK
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing 
// in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

const tickets = (peopleInLine) => {
    
    let changeNotes = {
        '25' : 0,
        '50' : 0,
        '100': 0
    }

    for(let i = 0; i<peopleInLine.length; i++){
        if(peopleInLine[i] === 25){
            changeNotes['25'] += 1;
        }else if(peopleInLine[i] === 50){
            if(changeNotes['25'] >= 1){
                changeNotes['50'] += 1;
                changeNotes['25'] -= 1;
            }else{
                console.log('NO');
            }
        }else if(peopleInLine[i] === 100){
            if(changeNotes['50'] >= 1 && changeNotes['25'] >= 1){
                changeNotes['100'] += 1;
                changeNotes['50'] -= 1;
                changeNotes['25'] -= 1;
            }else if(changeNotes['25'] >= 3){
                changeNotes['100'] += 1;
                changeNotes['25'] -= 3;
            }else{
                console.log('NO');
            }
        }
    }   
   
}
// tickets([25,25,25,100,25,50,25,100,25,25,50,100,25,25,25,100,50,25])

const doubleChar = (str) => {
    let newArr = [];
    splitStr = str.split('');
    // console.log(splitStr);
    for(let i = 0; i<=splitStr.length; i++){
        newArr.push(splitStr[i], splitStr[i]);
    }

    console.log(newArr.join(''));

}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// doubleChar('aabbccdd');
// PANGRAM
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const isPangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let strArr = str.toLowerCase();

    for(let i = 0; i<alphabet.length; i++){

        if(strArr.indexOf(alphabet[i]) < 0){
            console.log(false);
        }
        

    }
    console.log(true);
}

// isPangram('hello')

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }

//DELETE OCCURRENCES OF AN ELEMENT IF IT OCCURS MORE THAN N TIMES
// const deleteNth = (arr, n) => {
//     let count = {};
//     let arr = [];

//     for(let num of arr){
//         count[num] = count[num] ? count[num] + 1 : 1;

//         if(count[num] <= n) {
//             arr.push(num);
//         }
//     }
//     console.log(arr);
// }
// OTHER SOLUTIONS
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }

// KEBABIZE
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

const kebabize = (str) => {
    let capStr = str.replace(/([A-Z])/g, '-$1').trim().toLowerCase().replace(/[0-9]/g,'');
    if(capStr[0] === '-'){
        capStr = capStr.substring(1);
    }
}

// function kebabize(str) {

//     var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
//     return nonumber.join('-').toLowerCase();
  
//   }
// kebabize('camelsHaveThreeHumps');
// kebabize('camelsHave3Humps')
// kebabize('Awga-o');

let arr = [':)', ';(', ';}'];

for(let i = 0 ; i<arr.length; i++){
    console.log(arr[i][0]);
}

// COUNT SMILEY FACES
// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

const countSmileys = (arr) => {
    let count = 0;
    let validSmileys = [':)',';)',':D',';D',':-D',';-D',':~D',';~D',':-)',';-)',':~)',';~)'];
    if(arr.length === 0) {
        console.log(0);
    }
    for(let smileys of arr) {
        if(validSmileys.includes(smileys)){
            count++;
        }
    }
    console.log(count);
}

countSmileys([':D',':~)',';~D',':)'])