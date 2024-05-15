// Задание 1
const width = Number(prompt("Введите ширину"));
const height = Number(prompt("Введите длинну"));
const repairCalculator = (width, height) =>{
    console.log("минимальный: " + (width * height * 7000));
    console.log("средний: " + (width * height * 10_000));
    console.log("максимальный: " + (width * height * 15_000));
}
repairCalculator(width, height);
// Задание 2
let mass = [];
for (let i = 0; i < 4; i++) {
    mass[i] = Math.round(Math.random(1, 10) * 10);
}
total = mass[0] * mass[1] + mass[2] * mass[3];
//console.log(mass);
console.log(total);
// Задание 3
let num = 4753;
console.log(Math.floor(num % 10) +  Math.floor(num / 100 % 10) + Math.floor(num / 1000) + Math.floor(num / 10 % 10));
// Задание 4
let newMass = mass.map(i => i ** 2);
console.log(newMass);
// Задание 5
mass = [1, 2, 3, 4, 5, 6, 7];
newMass = mass.filter(i => i != 4 && i != 5);
console.log(newMass);
// Задание 6
let string = "hello";
let newString = string[0].toLocaleUpperCase() + string[1].toLocaleUpperCase() + string.slice(2);
console.log(newString);
// Задание 7
let massNum = [];
for (let i = 0; i < 20; i++) {
    massNum[i] = Math.round(Math.random(1, 10) * 10);
}let number = Number(prompt());
let newMassNum = massNum.filter(i => i % 2 === 0).filter(el => el <= number);
console.log(newMassNum);
// Задание 8
let data = String("abcdefghijklmnopqrstuvwxyz0123456789");
const dataRandom = (data) =>{
    let mass = data.split("");
    mass = mass.sort(() => Math.random() - 0.5);
    return mass.slice(0, 8);
}
for (let i = 0; i < 8; i++) {
    let pasword = dataRandom(data);
    
    console.log(pasword.join(''));
    
}
// Задание 9
let side1 = 5;
let side2 = 6;
let side3 = 10;
const theAreaOfTheTriangle = (side1, side2, side3) =>{
    let p = (side1 + side2 + side3) / 2;
    let s = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    console.log(s);

}

theAreaOfTheTriangle(side1, side2, side3);
// Задание 10
const riddle = () =>{
    let total = 3;
    while(total != 0){
        let riddle = prompt("Красная девица сидит в темнице, а коса на улице"); // ответ: морковь
        if( riddle.toLocaleLowerCase() === "морковь"){
            alert("Отгадал");
            break;
        }else{
            total--;
            alert("Осталось " + total + " попыток");
        }

    }

}

riddle();
























