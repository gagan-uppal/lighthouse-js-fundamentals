function isOdd(num){
for(let i = 1; i <= num; i++){
  var odd = num % 2 !== 0;
  return odd;
}

}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
