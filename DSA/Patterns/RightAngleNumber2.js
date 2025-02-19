// Input Format: N = 3
// Result: 
// 1
// 2 2 
// 3 3 3

// Input Format: N = 6
// Result:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

let n = 5;
for(let i = 1;i<=n;i++){
let row = ""
  for(let j = 1;j<=i;j++ ){
    row = row + " " + i; // space added between numbers in the row. 
    // It's a way to make the pattern look more visually appealing. 
    // For the given example, it doesn't change the output. 
    // For other patterns, you might want to remove this line.  
    // // 1st row: 1, 2nd row: 1 2, 3rd row: 1 2 3, 4th row: 1 2 3 4, 5th row: 1 2 3 4 5.  
    // // For each row, it adds the current number to the row string, followed by a space. Then, it prints the row.  
    // // For example, for i = 1, the row string will be "1", for i = 2, the row string will be "1 2", and so on.  
    // // The result will be the desired pattern.  // Note
  }
  console.log(row)
}