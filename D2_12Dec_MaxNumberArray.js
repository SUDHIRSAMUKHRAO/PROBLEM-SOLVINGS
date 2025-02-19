let arr= [1,2,3,4,9,6,7,8,];

let max = arr[0];
for(var i= 2; i<arr.length; i++){                           //1<2 = max= 2
if(max < arr[i]){                                            //2<3  = max = 3
 max = arr[i]                                                // 3 <4 = max = 4
}
}
console.log("the maximum number is ", max);

