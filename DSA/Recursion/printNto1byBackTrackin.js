function printNto1(i,n){
    if(i>n){
        return
    }
    printNto1(i+1,n)
    console.log(i)
}

printNto1(1,3)