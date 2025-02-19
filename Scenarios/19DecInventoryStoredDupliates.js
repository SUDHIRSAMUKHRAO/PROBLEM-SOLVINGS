// Scenario: Managing Inventory in a Store
// You are managing the inventory of a store. There are two arrays:

// currentStock: Contains the IDs of items currently in stock.
// Problem Statement
// Find the updated inventory: Combine the two arrays, ensuring no duplicate item IDs in the final result.
// Find the items that were newly added to the inventory: Identify the IDs in newShipment that were not already in currentStock.
// Expected Output Use a frequency map or a Set to ensure no duplicates in the updated inventory.
// Compare the elements of newShipment with currentStock to find newly added items.
// This question tests your understanding of:
//hint
// Building a frequency map.
// Avoiding duplicates while combining arrays.
// Comparing two arrays to find unique elements.


let currentStock = [101, 102, 103, 104, 105];
let newShipment = [104, 105, 106, 107, 108];
let newlyAddedItems = []; 

let  frequencyMap = {};
let updatedStock = [];
for(let i = 0; i<currentStock.length; i++){
    let element = currentStock[i]
    
    if(!frequencyMap[element]){
       frequencyMap[element]= true
       updatedStock.push(element)
    }
}

for(let i=0; i<newShipment.length; i++){
    let element = newShipment[i];
    if(!frequencyMap[element]){
        frequencyMap[element] =  true
        updatedStock.push(element)
        newlyAddedItems.push(element);
    }    
}

console.log(updatedStock)
console.log("newlyadded Items", newlyAddedItems)

// here in first step adding first array in object with = true.
// after creating frequncyMap in 2nd loop checkung that elements from 2nd array are availble in frequencymap.
// if not availbale then add in newarry. and also in new added array.









