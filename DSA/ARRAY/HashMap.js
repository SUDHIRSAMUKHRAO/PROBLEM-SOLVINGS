let arr = [2,5,4,4,5]
let frequencyMap = new Map();
for(let num of arr){
    
    let currentCount =  frequencyMap.get(num)    // this will check is number is present in map or not.
     
    if(!currentCount){
        currentCount = 0
    }

    // Increase the count by 1
    let newCount = currentCount + 1;  

    
     // Update the Map with the new count
        frequencyMap.set(num, newCount);
    

}

console.log(frequencyMap);
