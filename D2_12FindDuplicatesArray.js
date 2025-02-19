// Write a program to find all the duplicate elements in an array. For example, given the array \
// [1, 2, 3, 2, 4, 5, 6, 4, 7], the output should be [2, 4] 
// (as these numbers appear more than once).


let arr = [6, 4, 3, 4];
let emptyObject = {};
let duplicateArray = [];

function findDuplicates(arr) {
  // Loop to count frequency of each element
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (emptyObject[element]) {
      emptyObject[element] = emptyObject[element] + 1;  // Increment count if element exists
    } else {
      emptyObject[element] = 1;  // Initialize count to 1 if element does not exist
    }
  }

  // Loop through frequency map and find duplicates
  for (let key in emptyObject) {
    if (emptyObject[key] > 1) { // Check if count is greater than 1
      duplicateArray.push(Number(key)); // Convert key to a number and store it
      duplicateArray.push()
    }
  }
}

findDuplicates(arr); // Call function to populate duplicateArray
console.log(duplicateArray); // Now print the duplicates array
