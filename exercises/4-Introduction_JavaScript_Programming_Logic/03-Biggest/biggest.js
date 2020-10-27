let num1 = 12.3;
let num2 = 20.42;
let num3 = 45.34;

if (num1 >= num2 && num1 >= num3) {
    console.log(`O número maior é ${num1}.`);

} else if (num2 >= num1 && num2 >= num3) {
    console.log(`O número maior é ${num2}.`);
    
} else {
    console.log(`O número maior é ${num3}.`);
}