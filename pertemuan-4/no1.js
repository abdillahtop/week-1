function palindrome(str) {
 let re = /[^A-Za-z0-9]/;
 str = str.toLowerCase().replace(re, '');
 let len = str.length;
 console.log(len);
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
     console.log("false")   ;
   }
 }
 console.log("true")   ;
}
palindrome("Makam");