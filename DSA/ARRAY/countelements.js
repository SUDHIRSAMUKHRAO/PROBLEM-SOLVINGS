const arr = [1,3,3,8,10,11,11]

let frequncyMap = {};

for(let i = 0; i<arr.length;i++){
      let element =  arr[i]
    if(frequncyMap[element]){
        frequncyMap[element]= frequncyMap[element] + 1
    }else{
        frequncyMap[element] = 1
    }

}
let newarray = [];
for(let i= 0;i<arr.length;i++){
      let element = arr[i];
      if(frequncyMap[element]>1){

    }

}
console.log(frequncyMap)