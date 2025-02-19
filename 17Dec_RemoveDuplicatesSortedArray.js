const array = [55,56,56,57,58];  // sorted array.    

let newarray = [];
for(let i = 0 ; i<array.length; i++){                              
    //    4                  ||     0[55]        1[56]            
    // if(i == array.length - 1 || 
        if(array[i] !== array[i+1]){         
        newarray.push(array[i])
    }
                                                                    

}

console.log(newarray)
// [55,56,56,57,58]    lenght = 5  for j lenght is array.lenght - 1 = 4
// i = 0 = 55    !=   j = 1 = 56              newarray[]           false    
// i = 1=  56    !=   j = 2 = 56              newarray[56]          true
// i = 2 = 56    !=   j = 3 = 57              newarray[56]
// i = 3 = 57    !=   j = 4 = 58              newarray[56]
// i = 4 = 58    