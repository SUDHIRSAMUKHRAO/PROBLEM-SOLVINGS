let array=  [9,1,8,3,2,6]


for(let i = 0;i<array.length;i++) {
    for(let j = i+1;j<array.length;j++) {
      if(array[i]>array[j]) {
      array[j] = array[i]
      console.log( array[j])  
    
    }
}

}