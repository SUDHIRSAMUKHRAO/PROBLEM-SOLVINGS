// Question: Intersection of Two Arrays
// Write a program to find the intersection of two arrays. The intersection means the common elements present in both arrays.

// Output:
// [3, 4, 5]
// Hints
// Use a frequency map or a set to track the elements in one array.
// Check which elements of the second array exist in the frequency map or set.
// Store the common elements in a new array.
let arr1 = [1, 2, 3, 4, 5];  
let arr2 = [3, 4, 5, 6, 7];
let frequencyMap = {};
let intersectionArray = [];
for(let i = 0; i<arr1.length; i++){
     let element = arr1[i]
     if(frequencyMap[element]){
        frequencyMap[element] = frequencyMap[element] + 1;
     }else{
        frequencyMap[element] = 1;
     }
}

for(let i  = 0 ; i<arr2.length ;i++){
    let element =  arr2[i]
    if(frequencyMap[element]){
        intersectionArray.push(element)
    }
}
console.log(intersectionArray)