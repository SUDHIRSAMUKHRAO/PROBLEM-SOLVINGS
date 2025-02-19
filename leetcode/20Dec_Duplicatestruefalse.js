
let nums = [2,14,18,22,22]

function Duplicates(num){
let frequncyMap = {};
for(let i = 0 ; i<nums.length;i++){
     let element = nums[i];
    if(frequncyMap[element]){
        frequncyMap[element]++ 
       
    }
    else {
        frequncyMap[element]= 1;
      

    }

}

for(let i =0 ; i<nums.length;i++){
    let element = nums[i]
    if(frequncyMap[element]>1){
        console.log(true)
        return true
    }
    else{
        console.log(false)
    }
}

// for (let key in frequncyMap) {
//     if (frequncyMap[key] > 1) { // Check if count is greater than 1
//       console.log(true); // Convert key to a number and store it
//     }

//   }
// If no duplicates are found
console.log(false);
return false;   

}


Duplicates(nums)