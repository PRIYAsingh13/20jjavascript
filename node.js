// using a loop print all oddd numbers up to and including n
for (var i=1;i<=15;i++){
    if (i%2==1)
    console.log(i);
}

// prpint the sum of all even number range from a to b
let sum =0
for(i=2;i<=20;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
    console.log(sum);

    // check weather the given numbe ris an armstrong numberor not

let num= 163;
let fdigit=num%10;
let sdigit=Math.floor(num/10)%10;
let ldigit=Math.floor(num/100);
if(fdigit**3+sdigit**3+ldigit**3==num){
    console.log("armstrong No");
 } else{
        console.log("not a armstrong no");
    }
}

