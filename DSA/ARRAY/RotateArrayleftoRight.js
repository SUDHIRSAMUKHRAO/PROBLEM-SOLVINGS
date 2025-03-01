let  arr = [8,6,5,9,1,0]


let firstnum = arr[0];
function leftRotate(arr){
for(let i = 0;i<arr.length-1;i++){
  arr[i] =  arr[i+1];   //will assign next number to privous index.

}
arr[arr.length-1] = firstnum
return arr;
}

let left =  leftRotate(arr)
console.log(left)