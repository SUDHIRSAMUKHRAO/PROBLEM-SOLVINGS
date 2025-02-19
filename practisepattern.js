// let n =  3;  
// //rectangle
//take note here  jeva aapn run karto j == 3 aslys innnre loop row chi value 3 vela assign karnar.
// meaans "" + "*"    = "*"
//        "*" + "*"   = "**"
//        "**" + "*"  = "***" ======out honar  and outer loop again inner loop 
// for(let i = 1;i<=n;i++){
//     let row = ""
    
//     for(let j =1;j<=n;j++){

//         row = row + "*"
//     }


//     console.log(row)
// }






//right angle traingle
//jas aapn pahile every loop row chi value assgin hot hoti evry iteartion.
//aata ith every itrartion value assign vhalayla phijr  + 1; means 1st loop la 1 time out ,2nd loop la 2 time out
// mhnun inner loop chalnar jevdi i  chi value aahe. 
// for(let i = 1;i<=n;i++){              // run to 3 or will run 3 times.
//   let row = ""

//     for(let j =1;j<=i;j++){
//       row = row + "*"
//     }


//     console.log(row)
// }

//right angle number pyramid,
//1
//1 2
//1 2 3
// ith  pan same logic 1st inner loop print karnar 1 st number which is j chi value.//
//  "" + "1" == 1 is j chi value.
//  "1" + 2  =  12   run for 2 time
//   1  + 2 + 3  =123   run for 3 time 
// 2nd time 
// for(let i = 1 ; i<=n;i++){
//     let row = "";
//     for(let j = 1;j<=i; j++){
//         row =  row + j
//     }
//     console.log(row)
// }

//Right-Angled Number Pyramid - II  
//
//1
//22
//333
// bagh bhava 1 n;
// varti jas row chi valu j var define keli tas ith i var keli.
//  "" + i     = 1
//   "" + "2"    = 22  // loop run for 2 time beacuse of i value is 2 j <= i
//   "" + "3"    = 333  // loop run for 3 time beacuse of i value is 3 j <= i
// for(let i = 1;i<=n;i++){
//     let row = "";
//     for(let j = 1; j<=i;j++){
//     row  =  row + i
//     }
//     console.log(row)


//     }


//inverted right pyramid.
// ****
// ***
// **
// *
//inner loop as chalvaychy ki pahile n vela chalel then ulta.
// to 1 paryant.
let n = 5;
// for(let i = n;i>=1;i--){
//     let row = "";
//     for(let j =i;j>=1;j--){
//         row = row + "*"
//     }
//     console.log(row)
// } 
//


//for(let  i =  1;i<=100;i++){
//}

//Inverted Numbered Right Pyramid
//12345
//1234
//123
//12
//1
for(let i = 1;i>=1;i--){
    let row = "";
    for(let j = i;j>= 1 ; j--){
        row = row + j 
    }
    console.log(row)
}