let n =  45682

let reversedNumber = 0;

while(n > 0){
    let lastDigit = n % 10;   // remainder    6
    reversedNumber = reversedNumber * 10 + lastDigit;
    n = Math.floor(n / 10);    
                                           
} 
 
console.log(reversedNumber);