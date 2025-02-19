
function print(i,n){               
    if(i>n){                      
        return
    }
     console.log(i)              
    print(i + 1,n)                

} 
let n  = 10
print(1,n)