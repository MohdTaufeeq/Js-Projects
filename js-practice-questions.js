// reverse number
function reverse(num) {
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverse(123456));

// capatalize first word
function capatalize(str) {
  var allwords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allwords.join(" ");
}
console.log(capatalize("hello bhai kaise ho"));

// add all memebers of array
var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;

arr.forEach(function (elem) {
  sum = sum + elem;
});

console.log(sum);
