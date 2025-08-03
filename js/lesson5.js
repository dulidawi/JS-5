let choice;
let option = prompt("Оберіть продукт із списку: 1, 2 або 3");

switch (option) {
  case "1":
    choice = "Чай";
    break;
  case "2":
    choice = "Кава";
    break;
  case "3":
    choice = "Сок";
    break;
  default:
    console.log("Такого вибіру не існує");
}

console.log(choice);

let day;
let input = prompt("Введіть день тижня").trim().toLocaleLowerCase();

switch (input) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
    day = "Робочий день";
        break;
    case "субота":
    case "неділя":
    day = "Вихідний день";
        break;
    default:
        console.log("Такого дня не існує, спробуйте ще раз");
}

console.log(day);

let season;
let num = prompt("Введіть номер місяця від 1 до 12").trim();

switch (num) {
  case "1":
  case "2":
  case "12":
    season = "Зима";
    break;
  case "3":
  case "4":
  case "5":
    season = "Весна";
    break;
  case "6":
  case "7":
  case "8":
    season = "Літо";
    break;
  case "9":
  case "10":
  case "11":
    season = "Осінь";
    break;
  default:
    console.log("Такого місяця не існує");
}

console.log(season);

let decision;
let answer = prompt("Оберіть колір: червоний, жовтий, зелений").trim().toLocaleLowerCase()

switch (answer) {
    case "червоний":
        decision = "стоп";
        break;
    case "жовтий":
        decision = "чекати";
        break;
    case "зелений":
        decision = "йти";
        break;
    default:
        console.log("Такого коліру немає у списку");
}

console.log(decision);

let number1 = Number(prompt("Введіть перше число"));
let number2 = Number(prompt("Введіть друге число"));
let number3;
let type = prompt("Оберіть значення зі списку: +,-,*,/");

if (type === "+") {
    number3 = number1 + number2;
} else if (type === "-") {
    number3 = number1 - number2;
} else if (type === "*") {
    number3 = number1 * number2;
} else if (type === "/" && number2 === 0) {
    alert("Ділення на нуль не можливе!")
} else {
    number3 = number1 / number2;
}

console.log(number3);

     
