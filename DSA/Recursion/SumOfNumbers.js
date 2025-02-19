// let n = 5;
// let sum = 0;
// for(let i = 0;i<=n;i++){
//   sum = sum + i
// }
// console.log(sum)

//with recursive way
//parametrtc way where we change the value of sum
// function sum(i,sumw){
//     if(i<1){
//         console.log(sumw)
//         return
        
//     }
//     sum(i-1, sumw + i)
// }
// let sumw = 0;
// let i = 3
// sum(i,sumw)


//functional way

function plus(n){                     //3                         //2                       //1                      0
    if(n==0){                  
        return 0                     //not match                                                                  condition Match return 0
    }
    return  n + plus(n-1)            // 3 + (n-1) = 2            // 2 +  (n - 1) =          // 1 +  (n - 1) =       
                                     //waiting for returning     // waitin                  // waiting    
                                                                                            //1  + (0-1)
                                                                    2 +  (2-1)
                                        // 3 + 3 = 6                           3                            // 2          

}

console.log(plus(3))