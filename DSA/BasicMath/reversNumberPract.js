let n  =  18398;
let revers = 0;
 while( n>0){
    let lastDigit = n % 10;
    revers = revers * 10 + lastDigit; 

    n =Math.floor(n/10)

 }
 console.log(revers)