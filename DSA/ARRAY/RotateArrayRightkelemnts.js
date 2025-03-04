
//left roated by 3
let arr = [5,8,2,55,44,66]
console.log(arr)
let n = 6;
let d= 3  

//brute force

//we need to add the first 3 value in the temp array
let tempArray = [];
for(let i= 0;i<d;i++){     // it will temparray = [5,8,5]
     tempArray.push(arr[i])
}
console.log(tempArray)
//now we need to shift the array to left side from 3rd index
//it will look like [2,55,44,66,_,_]  ///


for(let i= d;i<n;i++) {
    arr[i-d] =   arr[i]                     //i-d  = 3-3 = 0 , arr[0] = a[i]    == 
                                           //arr[i-d]=arr[i]
                                          //arr[3-3=0]= arr[3]
}

//now put temp into mainarray again

for(let i = n-d ;i<n;i++){              //this i will start from n-d means  6-3 =3 till last number           
    arr[i] =  tempArray[(i-(n-d))]          
} //arr[3] =     3-(6-3) = temparray[0]    // me are assignig temp0,2,3 to arr[3,4,5]                                              
console.log(arr)