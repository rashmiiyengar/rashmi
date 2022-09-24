var isPalindrome = function(x) {
    if (x < 0 ) return false;
   
   let reverse = 0;
   let temp = x;
   
   while (temp > 0) {
     reverse = (10 * reverse) + temp % 10;
     temp = Math.floor(temp / 10);
   }
   return x === reverse ? true: false;
 };

 console.log(isPalindrome(121));
 
 