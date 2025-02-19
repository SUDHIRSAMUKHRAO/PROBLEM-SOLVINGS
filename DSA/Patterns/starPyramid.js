// Input Format: N = 3
// Result: 
//   *  
//  *** 
// *****   
// Input Format: N = 6
// Result:
//      *             1st outerloop go for n value.  spaces was decresing
//     ***            // left side spaces  =  righ side spaces.
//    *****           // space loop for both side 1st row = 3
//   *******                                      2nd row = 2
//  *********                                     3rd row = 1 
// ***********        //printing star  =  1 st row = 1 star 
                                        //2nd row  = 2
                                        // 3rd row  = 3 star.

//1st loop goes for n
// 2nd loop run spaces  so it will assin value to row =  " " this to number of spaces.
// 3rd loop  run for star  so row = "  " *   this will assin value
// 4th loop run again for spaces so it will assin value to row "  "* " "

//for star row value should assign like    1star   so this is 2*1+1 time
 //                                        3 Star
 //                                        5 star                             

let n = 3;                    //agar n = 3 hai to spaces will 210
for(let i = 0;i<n;i++){              //runt o n
let row = "";
              
for(let j = 0; j <n-i-1;j++){     //spaces is 2    so loop should run 3 time 
     row = row + " "              //           1   beacuse of this we use fomrulaa n - i -1 = 3-0-1 = 2  2 space
}                                 //           0                                            = 3- 1 -1 = 1 space

for(let j = 0;j< 2 * i + 1;j++){    // here star want 1 , 3,5 so 2 * i + 1
    row = row + "*"
}
// for(let j = 0; j <n-i-1;j++){      // same like upper. optional
//      row = row + " "
// }


console.log(row)



            
}

// for (let i = 0; i < n; i++) {
//     // Initialize a row as an empty string
//     let row = "";

//     // For printing the spaces before stars in each row
//     for (let j = 0; j < n - i - 1; j++) {
//        row = row + " "
//     }

//     // For printing the stars in each row
//     for (let j = 0; j < 2 * i + 1; j++) {
//        row =  row +"*";
//     }

//     // For printing the spaces after the stars in each row
//     for (let j = 0; j < n - i - 1; j++) {
//          row = row + " "
//     }

//     // Print the row
//     console.log(row);
// }


