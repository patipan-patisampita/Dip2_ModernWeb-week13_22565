"use strict";
//Array Type
let i;
let arr2;
arr2 = [10, 20, 30, 40];
for (i in arr2) {
    console.log(`${arr2[i]}`);
}
let p;
// let province:string[] = new Array("Trat","Chantaburi","Rayong")
let province = ["Trat", "Chantaburi", "Rayong"];
for (p in province) {
    console.log(`${province[p]}`);
}
let a;
let animal = new Array("Cat", "Dog", "Rabbit");
function display(arr_value) {
    for (a in arr_value) {
        console.log(`${animal[a]}`);
    }
}
display(animal);
