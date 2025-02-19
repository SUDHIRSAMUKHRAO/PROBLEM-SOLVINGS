
let arr = [76,89,76,55,56,90];
let frequencyMap = {};
let newArray = []
for(let i = 0; i < arr.length; i++){
    
   let element = arr[i];
   if(frequencyMap[element]){
    frequencyMap[element] = frequencyMap[element] + 1;
   }
   else{
    frequencyMap[element] = 1;
   }
   
}

for(let i = 0; i < arr.length; i++){
    if(frequencyMap[arr[i]] == 1){
        newArray.push(arr[i])   
    
    }
}

console.log(newArray)







