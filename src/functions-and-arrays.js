// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
  if(num1>num2)
    return num1;
  else
    return num2;
}
let num1 = 4;
let num2 = 9;
let answer = maxOfTwoNumbers(num1,num2);
console.log(`The largest of ${num1} and ${num2} is ${answer}`);



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let max = words[0];
  let maxIndex = words[0];
  for(let i=0;i<words.length;i++)
  {
    if(words[i].length>max.length)
    {
      max  = words[i];
      maxIndex = i;
    }
  }
  return words[maxIndex];
}

const answer3 = findLongestWord(words);
console.log(`Longest word is ${answer3}`);



// Iteration #3: Calculate the sum
const numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers1(numbers1) {
  let sum=0;
  for(let i=0;i<numbers1.length;i++)
  {
      sum+=numbers1[i];
  }
  return sum;
}

let answer2 = sumNumbers1(numbers1);
console.log(`The sum is ${answer2}`);

// Iteration #3.1 Bonus:
const numbers = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum2(numbers) {
  let totalSum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      totalSum += numbers[i].length;
    } else if (typeof numbers[i] === "boolean") {
      totalSum += numbers[i] ? 1 : 0;
    } else if (typeof numbers[i] === "number") {
      totalSum += numbers[i];
    }
  }
  
  return totalSum;
}

let answer4 = sum2(numbers);
console.log(answer4);


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let sum3 = 0;
  for(let i=0;i<numbersAvg.length;i++)
  {
      sum3+=numbersAvg[i];
  }
  return sum3/numbersAvg.length;
}
console.log(`The average is ${averageNumbers(numbersAvg)}`);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
      let sum4 = 0;
      for(let i=0;i<averageWordLength.length;i++)
      {
        sum4+=wordsArr[i].length;
      }
      console.log(sum4/wordsArr.length);
 }
 averageWordLength(wordsArr);

// Bonus - Iteration #4.1
 let mixArr2 =  [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function avg(mixArr2) {
  let sum5 = 0
  for(let i=0;i<mixArr2.length;i++){
  if(typeof mixArr2[i] == "string")
    sum5+=mixArr2[i].length;
  else if (typeof mixArr2[i] == "boolean")
    sum5+=mixArr2[i] ? 1 : 0;
  else if(typeof mixArr2[i] == "number")
    sum5+=mixArr2[i];
  return sum5 / mixArr2.length;
}
}
 console.log(avg(mixArr2));



// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words) {
  return words.filter(function(word, index) {
    return words.indexOf(word) === index;
  });
}

const answer6 = uniquifyArray(words);
console.log(answer6);



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind,word) {
    for(let i=0;i<wordsFind.length;i++)
    {
      if(wordsFind[i]===word)
        return true;
    }
    return false;
}

const answer7 = doesWordExist(wordsFind,'eating');
console.log(answer7 ? "It exists" : "Not exists");



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsCount,word) {
  let count = 0;
  for(let i=0;i<wordsCount.length;i++)
  {
    if(wordsCount[i]===word)
      count++;
  }
  return count;
}

const answer8 = howManyTimes(wordsCount,'matter');
console.log(`The number of times word repeated is ${answer8}`);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers1,
    sum2,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
  };
}
