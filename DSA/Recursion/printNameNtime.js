//print name n time

function printName(i,n) {    //n=5
  
    let name = "sudhir"          
    if(i>=n){                    
        return
    }
    console.log(name)               
    printName(i + 1, n)

}

let n = 5
printName(0,n)


function printwithonlyN(n){
   if(n<0){
    return
   }
   console.log("sam with n")
   printwithonlyN(n-1)

}
printwithonlyN(5)