let arr = [1,3,5,6,2,3,8]
                                           //  max 1<3=  true   max 3
                                           //  3<5       max  = 5
                                           //  5<6     max =6
                                           //  6<2   false
                                           //  6<3   false
                                           //  6<8     max = 8

//1st find largest 
//check                              max =  i                           1           max<3 = max 3
                                     //2ndelement =   //i+1             3
let max = arr[0];
let secondmax ;                         

for(let i = 1;i<arr.length;i++){
   if(max<arr[i]){
   }
}    
