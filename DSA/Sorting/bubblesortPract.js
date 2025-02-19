let arr = [10,5,4,33,21];

for(let i = 0;i<arr.length-1;i++){
   let minIndex = i;

   for(let j = i+1;j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j;


      }
      let temp = arr[minIndex];
      arr[minIndex] = arr[j];
      arr[j] = temp;

   }
    


}
console.log(arr)