// Problem Statement: Given an integer N, print the following pattern.


// Examples:

// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *

let n =  2

// count the number of  rows aadvya line
for(let i = 1 ; i<=n;i++){    
    let row = ""
    
    for(let j = 1 ; j<=n;j++){   //this is inner loop for counting column ubhya line
    row = row + "* "
    }
    console.log(row); // Print the row, trimmed to remove the trailing space

}