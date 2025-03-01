// let arr = [2,6,1,4,0];

let arr = [2,2,3,4,5]

//i.e Every element in the array is smaller than or equals to its next values, So the answer is True.
function isSorted(){
for(let i = 0; i <arr.length;i++){
     for(let j = i+1;j<arr.length;j++){
           if(arr[j]<arr[i]){
            return false
           }


     }


}
return true
}555


// function isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1])
//        no return here so if any proble will go in else 
//     }else{
//         return false
//}
//     return true;
//   }
  
//   const arr = [1, 2, 3, 4, 5];
  
//   console.log(isSorted(arr) ? "True" : "False");
  
  

const answer = isSorted(arr)
console.log(answer)
