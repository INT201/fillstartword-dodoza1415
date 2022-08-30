// const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here

  return (word == null || undefined ? 'undefined' : word == startWord ? word : startWord + word )
}
// module.exports = fillStartWord
console.log(fillStartWord("1-2565-","Hello World"))
console.log(fillStartWord("JS", "beginner" ))
console.log(fillStartWord("first", "firststep" ))
console.log(fillStartWord("first", null ))
console.log(fillStartWord("first", undefined ))
