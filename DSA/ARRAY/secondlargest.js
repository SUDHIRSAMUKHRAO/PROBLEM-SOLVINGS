// let arr =  [1,4,99,33,22]      //1<4 = 4 //4<99 ==99  99<33 ==99 99<22 = 99

//first find largest element
// compare secondlargest which is -1 < arr[i]   and  arry[i]==max; 
//code is runnif two loops diffrently so is o[2 N]
//let max = arr[0];
// for(let i=0;i<arr.length-1;i++){


//     if(max<arr[i]){
//         max = arr[i]
//     }


// }
// console.log(max)
// let secondlargest = -1;
// for(let i =0;i<arr.length;i++){
//         if(secondlargest<arr[i] && arr[i]!=max)
//                secondlargest =  arr[i]

// }
// console.log(secondlargest)




// let largest = arr[0];
// let secondlargest = -1;

// for(let i=0;i<arr.length;i++){
   //      if(largest<arr[i]){
      //         largest = arr[i]
      
      let arr = [17296 ,9524,28446,12750, 422 ,7888,25584]
//      }



//}

   let slaregst = -1; 
  let max= arr[0];
   for(let i = 1;i<arr.length;i++){
         if(arr[i]>max){   
            max =  arr[i] 
         }
       
   }
   console.log(max)
   
   for(let i = 0 ;i<arr.length;i++){
       if(arr[i]>slaregst && arr[i]!==max){  
           slaregst =  arr[i]
       }
       
   }
  console.log(slaregst) 
   


