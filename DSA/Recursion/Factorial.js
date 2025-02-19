

//normal
// let n = 5;
// let factorial = 1;
// for(let i = 1;i<=n;i++){  
//     factorial = factorial * i
// }
// console.log(factorial)


//recursion

function factorial(n){                     
                                                        
  if(n==0){                            
    return 1   
  }          
  return n * factorial(n-1);                 

}

console.log(factorial(3))