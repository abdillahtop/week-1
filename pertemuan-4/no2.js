let array = [123,9,27];
let total= 0;
let total1 = 0;
let total2 = 0; 


for (let i = 0; i < array.length; i++) {
    total += array[i]; 
    
}

 let penampung1 = Array.from(total.toString()).map(Number);

for (let j = 0; j< penampung1.length; j++) {
    total1+= penampung1[j]; 
}

let penampung2 = Array.from(total1.toString()).map(Number);

for (let m = 0; m< penampung2.length; m++) {
    total2 += penampung2[m]; 
}

console.log(penampung1)
console.log("a : " +total);
console.log("b : "+total1);
console.log("c/Output : "+total2)

