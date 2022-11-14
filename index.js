/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let btnEl = document.getElementById("btn-el");
let tx1 = document.getElementById("txt1");
let tx2 = document.getElementById("txt2");
let tx3 = document.getElementById("txt3");


btnEl.addEventListener("click", function(){
    let boxEl = document.getElementById("box").value;
        tx1.innerHTML = `${boxEl} meters = ${(boxEl*3.2808).toFixed(3)} feet | ${boxEl} feet = ${(boxEl/3.2808).toFixed(3)} meters`
        tx2.innerHTML = `${boxEl} liters = ${(boxEl*0.264).toFixed(3)} gallons | ${boxEl} gallons = ${(boxEl/0.264).toFixed(3)} liters`
        tx3.innerHTML = `${boxEl} kilos = ${(boxEl*2.204).toFixed(3)} ponds | ${boxEl} pounds = ${(boxEl/2.204).toFixed(3)} kilos`
})
