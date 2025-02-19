

function printntoone(n){
    if(n>0){

    console.log(n);
    printntoone(n-1);
      
    }
}

printntoone(5)