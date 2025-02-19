let n = 5;


//in every loop we increase the space value.
//and minus the * value.

for (let i = 0; i < n; i++) {
    let row = "";
    // Add spaces before stars
    for (let j = 0; j < i; j++) { // 0 space   j= 0     i =0  
        row += " ";             // 2 space   j = 0,1  i = 1
                            // 3 space  j  = 0,123 ; i 1,2,3
    }                             // 4 space   
    // Add stars                      
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
        row += "*";
    } 
    // Add spaces after stars (optional, not necessary for the pattern)
    for (let j = 0; j < i; j++) {
        row += " ";
    }
    console.log(row);
}



