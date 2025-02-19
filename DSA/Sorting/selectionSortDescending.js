
// Complexity Analysis of Selection Sort
// Time Complexity: O(n2) ,as there are two nested loops:

// One loop to select an element of Array one by one = O(n)
// Another loop to compare that element with every other Array element = O(n)
// Therefore overall complexity = O(n) * O(n) = O(n*n) = O(n2)
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i; // Start with the current index as the minimum
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[minIndex]) {          //    imp for desending this only change. 
                minIndex = j; // Update minIndex if a smaller value is found
            }
        }
        // Swap the smallest element found with the first element of the unsorted part
        
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        
    }
    return array;
}

let arr = [3, 5, 7, 2, 9];
let sortedArray = selectionSort(arr);
console.log(sortedArray); //Output: [2, 3, 5, 7, 9];
