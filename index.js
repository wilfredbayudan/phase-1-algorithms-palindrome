function isPalindrome(word) {
  // Write your algorithm here
  const characters = word.split("");
  const charactersLength = characters.length;

  for (let i = 0; i < charactersLength; i++) {
    console.log(characters[i], characters[charactersLength-(i+1)]);
    if (characters[i] !== characters[charactersLength-(i+1)]) {
      return false;
    }
    return true;
  }

}

/* 
  Add your pseudocode here
  Input: Word
  Return: Boolean

  Example - racecar => true, robot => false

  Input word

  split word into array of characters
  for loop, match 1st letter to last letter, 2nd letter to 2nd to last letter, and so on.
  if tested letters do not match, return false
  after loop, return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
