// //num % 10 extracts the last digit of the number.
// count = count + 1 increments the digit count.
// num = Math.floor(num / 10) removes the last digit by discarding the decimal part. 
//Number of time n is divisible by 10 is the count of digit
let num = 23;
let count =  0;
while(num>0)
{

let lastDigit =  num % 10  ;   //this will send remainder 
count =  count + 1;
num = Math.floor(num / 10);  


}
console.log(count)
    
    
    

