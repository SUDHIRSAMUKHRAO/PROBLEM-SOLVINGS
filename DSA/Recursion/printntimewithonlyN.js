
    // Javascript code for print numbers from 
    // 1 to 100 without using loop
    
    // Prints numbers from 1 to n
    function printNos(n)
    {
        if(n > 0)                                    
        {
            printNos(n - 1);                             
           console.log(n)                               
        }                                               
        return;                                          
    }
    
    printNos(5);

// This code is contributed by rameshtravel07.
