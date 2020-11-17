// Examples:
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// function willFit(present, box){
//   let fst = present.reduce(function(a, arr) {return a + arr}, 0)
//   let snd = box.reduce(function(a, arr){return a + arr}, 0)
//    return fst < snd
// }

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

console.log(accum("HbideVbxncC"))

// Kata to find shortest word
function findShort(s){
  let fst = s.split(' ');   
  let w = fst[0];
  for (i of fst) {if (i.length < w.length){      w = i } }
    return w.length
 }

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

// Algorithm to find note in message

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false; 
  });
  return noteIsPossible;
}
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');


// Palindrome algorithm

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  return lettersArr.join('') === lettersArr.reverse().join('');
}

function palindrome(note) {
  const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '')
  const cleannt = clean(note);
  return cleannt.split('').every((c, i) => c === cleannt[cleannt.length -1 -i])
}

isPalindrome("Madam, I'm Adam");


// Ceaser cipher algorithm :- finds letter in position num from letters in note 
function ceaserCipher(note, num) {
  num = num % 26;
  const clean = (str) => str.toLowerCase()
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let str = ''
  const cleannt = clean(note);
  for ( i = 0; i < cleannt.length; i++){
    let currentletter = cleannt[i]
    if (currentletter == ' '){
      str += currentletter;
      continue;
    }
    let currentIndex = alpha.indexOf(currentletter)
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(note[i] === note[i].toUpperCase()){ 
      str += alpha[newIndex].toUpperCase();
    }
    else str += alpha[newIndex];
    
  }
  return str;
}
ceaserCipher("Big Car", -16);
ceaserCipher("Javascript", -900);


// Reverse all the words in a string

function reverseWords (string) {
  let str = string.split(' ')
  let arr = str.map( a => a.split('').reverse().join('')).join(' ')
  return arr
}
reverseWords("the Big Car");

function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}
reverseWords('Coding JavaScript');

// Reverse array in place

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);

// Return mean, median, and mode
// my version
function getMean (array) {
  let mean = array.reduce((agg, x) => (agg + x), 0)/ array.length
  return mean
}
function getMedian (array) {
  let median = []
  let sorted = array.sort((a, b) => a - b)
  let mid = Math.floor(array.length/2)
  if(array.length % 2 == 0){
    median = [array[mid], array[mid-1]]
  }else{
    median = [sorted[mid]]
  }
  return median
}
function getMode (array) {
  let obj = {}
  array.forEach( int => { if (!obj[int]) obj[int] = 0;
    obj[int]++
   } )
   let max = obj[0]
  for(i = 1; i < obj.length; i++){
    if (obj[i] > max) max = obj[i];
  }
  let mode = []
  for (i in obj){
    if(obj[i] == max){
      mode.push(i)
    }
  }
  return mode
}

function meanMedianMode (array) {
  console.log(getMean(array))
  console.log(getMedian(array))
  console.log(getMode(array)) 
}
meanMedianMode([2, 4, 5 ,0, 0, 0, 2, 2]);

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
function getMean(array) {
  var sum = 0;
  array.forEach(num => {
    sum += num;
  });
  var mean = sum / array.length;
  return mean;
}
function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}
function getMode(array) {
  var modeObj = {};
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
meanMedianMode([9,10,23,10,23,9]);

// return array of arrays where 2 values in array add up the Sum input

function twoSum (array, sum) {
  const map1 = array.map((x, index, array) => { 
    for (i of array){
      if (x + i == sum){ return [x, i] } 
    } 
  })
  maps = map1.filter(function( element ) {
   return element !== undefined;
});

  return maps;
 }

twoSum([1, 4, 6 ,5, 3,], 7);

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}
twoSum([1, 6, 4, 5, 3, 3], 7);

// Finding factorial with recursion

function factorial (num) {
  if(num === 1){
    return num
  }else{
    return num * factorial(num - 1)
  }
 }

factorial(8);

// Binary search with recursion
function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];
  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
      return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) {
      return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false;
}
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

// You are given two strings s and t. Both strings have length n and consist of lowercase Latin letters.

// You can successively perform the following move any number of times (possibly, zero):

// swap any two adjacent (neighboring) characters of s (i.e. for any i={0,1,2,…,n−2} you can swap si and si+1).
// Input:
// Strings s and t, which consisting of n(1 ≤ n ≤ 1000) lowercase Latin letters.

// Output:
// The minimum number of moves to transform s to t. If it is impossible to obtain the string t using moves, return -1.

// Examples:

// ('abcdef', 'abdfec') => 4
// ('abcd', 'accd') => -1
// ('ab', 'ab') => 0
// ('ab', 'ba') => 1
// ('aaa', 'aaa') => 0
// Note:
// In the first example the string s changes as follows: "abcdef" → "abdcef" → "abdcfe" → "abdfce" → "abdfec".

function obtain(s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let index = t.indexOf(s[i]);
    if (index === -1) return -1;
    t = t.slice(0, index) + t.slice(index + 1);
    count += index;
  }
  return count;
}