function checkprime(n){
    if(n<=1){
        return false
    }
    else {
       for(let i = 2; i<n; i++){
          if(Math.floor(n%i)==0){
            console.log(false)
            return false
          }
          else{
            console.log(true)
            return true          
          }
       }
    }
}

checkprime(6)