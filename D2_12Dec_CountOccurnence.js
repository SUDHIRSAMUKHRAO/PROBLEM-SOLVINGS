function countOccurrences(arr) {
    let frequencyMap = {}; // Create an empty object to store counts
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i]; // Get the current element
      if(frequencyMap[element]){
       frequencyMap[element] = frequencyMap[element] + 1;
    }else{
        frequencyMap[element] = 1;
      }
    }
    return frequencyMap; // Return the frequency map
  }
  
  // Example usage
  let arr = [1, 2, 2];
  console.log(countOccurrences(arr));

  