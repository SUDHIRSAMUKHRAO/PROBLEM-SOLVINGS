function checkArmstrong(n){
	//Write your code here
	const checknum = n;
	let sum = 0;
    let lD;
    while(n>0){
	lD =  Math.floor(n %10);
	//  sum = sum + (lD * lD *lD);
	 n = n/10;


	}      
    console.log(lD)                                      //1634    =    
	// if(checknum == sum){                      1 * 1* 1      1 + 0 = 1
	// 	return true;                          6 * 6 * 6  =    216  + 1 = 217
    //                                           3 * 3 * 3  =     244
    //                                            4 * 4 * 4 =  

	// }
	// else{
	// 	return false;
	// }

}


let num = checkArmstrong(1634)
console.log(num);