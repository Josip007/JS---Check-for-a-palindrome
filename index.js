function palindrome(str) {
  let regex = /\s|\W|_/g;
  str = str.replace(regex, '').toLowerCase();
  let reversed = str.split('').reverse().join('');
  return str === reversed ;
}
console.log(palindrome("_eye"));
