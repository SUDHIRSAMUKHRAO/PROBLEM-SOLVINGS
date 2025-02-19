let n =  1634
;

let ognum = n;
let sum = 0;
while(n>0){
let lastDigit = n%10;
sum = sum + (lastDigit * lastDigit * lastDigit)
n = Math.floor(n/10)
}
if(ognum == sum){
   console.log(true)
}
else{
    console.log(false)
}