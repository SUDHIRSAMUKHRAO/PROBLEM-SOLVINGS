// let  arr = [17,15,50,34,40];

// let temp;
// for(let i = 0;i<arr.length-1;i++){ /// to the last element index start from 0.so length is 5 - 1 = 4;
//                                    // outer loop make 4 passes.
//      for(let j = 0; j<arr.length - i - 1;j++){} // we does not need to check sorted elemet after pass.
//                                              // means after first pass hevey elmemt in last postion.
//                                         // so why shoul check for lasyt so we do n-1-i.
//                                               //i will crease by every pass.
//      if(arr[j]>arr[j+1]){   //17>15  pass  so on
//       temp = arr[j];       
//       arr[j] = arr[j+1];
//       arr[j+1] = temp

//      }
// }
// console.log(arr)
let arr = [13,46,24,52,20,9]

for(let i = 0;i<arr.length-1;i++){
     
     for(let j = 0;j<arr.length-i-1;j++){
         
       if(arr[j]>arr[j+1]){
           let temp =  arr[j];
           arr[j] = arr[j+1]
           arr[j+1] = temp
       }
     } 
    
}
console.log(arr)