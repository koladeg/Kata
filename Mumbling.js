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


// Ceaser cipher
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  return newString;
}
caesarCipher('Zoo Keeper', 2);
