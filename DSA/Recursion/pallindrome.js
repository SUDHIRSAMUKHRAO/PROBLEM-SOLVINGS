let str = "ABCDCBA";
let og =str;


let reverse = ""

for(let i = str.length-1;i>=0;i--){
    reverse = reverse + str[i]
}

if(reverse==og){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")  //not a palindrome as reverse of ABCDCBA is ACBDCBA, not ABCDCBA. This is because JavaScript uses Unicode characters, which are 21-bit code units. When comparing strings, JavaScript compares code units, not characters. The code units of 'A' and 'a' are different. So, when checking for palindrome, JavaScript considers 'A' and 'a' as different characters.  The reverse of 'ABCDCBA' is 'ABCDcba', not 'ABCDCBA'.  This is a common mistake in JavaScript.  The correct way to compare strings in JavaScript is to convert them to lowercase or uppercase before comparing.  For example, `str.toLowerCase() == reverse.toLowerCase()`.  This will ensure that the comparison is case-insensitive.  Here's the corrected code:
}
console.log(reverse)