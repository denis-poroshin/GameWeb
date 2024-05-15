const theGuessingGameOfTheYear = () => {
    let month = Number(prompt("Введите номер месяца"));
    switch (month) {
        case 12:
        case 1:
        case 2:
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осень");
            break;
        default:
            alert("Такого времени года не существует");
            break;
    }
   
}
const rememberTheWord = () => {
    let mass = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    mass = mass.sort(() => Math.random() - 0.5);
    alert(mass);
    let firstWord = String(prompt("Напишите первое слово из списка"));
    let lastWord = String(prompt("Напишите последнее слово из списка"));
    if (firstWord.toLocaleLowerCase() === mass[0].toLocaleLowerCase() && lastWord.toLocaleLowerCase() === mass[mass.length - 1].toLocaleLowerCase()) {
        alert("Поздравляем вы угадали оба слова!");
    }else if (firstWord.toLocaleLowerCase() === mass[0].toLocaleLowerCase() || lastWord.toLocaleLowerCase() === mass[mass.length - 1].toLocaleLowerCase()){
        alert("Вы были близки к победе!");
    }else if(firstWord.toLocaleLowerCase() === "null" && lastWord.toLocaleLowerCase() === "null"){
        alert("Вы даже не попробуете?");
    }else{
        alert("Вы не угадали, попробуйте еще раз");
    }
}
const riddle = () =>{
    let total = 3;
    while(total != 0){
        --total;
        let riddle = prompt("Красная девица сидит в темнице, а коса на улице"); // ответ: морковь
        if( riddle.toLocaleLowerCase() === "морковь" || riddle.toLocaleLowerCase() === "морковка"){
            alert("Отгадал");
            break;
        }else if(total === 2){
            alert("Осталось " + total + " попыток");
            alert("Это овощь");
        }else if(total === 1){
            alert("Осталось " + total + " попыток");
            alert("Этот овощь любят есть кролики или зайцы");
        }else{
            alert("Осталось " + total + " попыток");
            alert("Вы не угадали, попробуете еще раз");
        }
    }

}
