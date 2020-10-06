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