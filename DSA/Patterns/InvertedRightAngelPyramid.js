// Input Format: N = 3
// Result: 
// * * *
// * * 
// *

// Input Format: N = 6
// Result:
// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
let n = 5;
 for(let i = n; i>=1; i--){    
    let row = ""         //    i = 5, i>=n  5>=5     5-1 =4
    for(let j = i;j>=1;j--){
        row = row + " *"
    }
    console.log(row)
}


