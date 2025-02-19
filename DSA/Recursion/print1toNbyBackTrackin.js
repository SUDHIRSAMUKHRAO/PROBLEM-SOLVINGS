function print1toNbacktrack(i,n){
    if(i<1){
        return
    }
    
    print1toNbacktrack(i-1,n)
    console.log(i)

}
print1toNbacktrack(3,3)

// understandinng
// keep it in mind we are calling functions before print so function will wait for return  function when confiton is true then next line will print 
// print1toNbacktrack(3,3) ==> print1toNbacktrack(2,3) ==> print1toNbacktrack(1,3) ==>print1toNbacktrack(0,3)
                                                                                     //||basecondition match i<1 so it will return
//    3                    <<==                  2            <<==    console print1                <<== returning