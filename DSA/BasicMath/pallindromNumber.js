
var isPalindrome = function(x) {
    let temp = x;
    let lastDigit;
    let reverse = 0
    while(x>0){
    lastDigit = x %10;
    reverse = reverse * 10 + lastDigit;
     x = Math.floor(x/10)
    }
    if(x<0 || reverse !== temp){
     console.log( false);}
     else{
         console.log( true );
     }
    }
 
 
 
 
 
 
 
 