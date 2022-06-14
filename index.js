var age = prompt("What is your age? ");
var howfarkm = prompt("How far are you traveling? ");
const priceperkm=0.21
const price=priceperkm*howfarkm;
console.log(price)
const priceunder18=price-price*0.2;
const priceabove65=price-price*0.4;
if(age<18){
    console.log(priceunder18)
}
else if(age>65){
    console.log(priceabove65)
}