// Problem: Write a program to find the union of two arrays. 
// The union of two arrays is a new array containing all unique elements from both arrays, 
// without duplicates
//Key Points:
// Both arrays may have duplicates.
// The result should only contain unique elements.
let array1 = [1,2,3,4,5];
let array2 = [4,5,6,7,8];

let frequencyMap = {};
let newArray = [];
for(let i = 0; i<array1.length; i++){
   let element = array1[i]
   if(!frequencyMap[element]){
    frequencyMap[element] =  true
    newArray.push(element)             
   }
}


for(let i = 0;i<array2.length;i++){
  let element = array2[i]
  if(!frequencyMap[element]){
    frequencyMap[element] = true
    newArray.push(element)
  }
}

console.log(newArray)


    
    
