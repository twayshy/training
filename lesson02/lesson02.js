let money = 3.14;
let income = "freelance";
let addExpenses = "lemON, orange, pie";
let deposit = true;
let mission = 4;
let period = 3.14;

console.log( typeof money);
console.log( typeof income);
console.log( typeof deposit);
console.log( income.length);
console.log( "Период " +period+ " месяцев");
console.log( "Цель заработать " + mission + " рублей");
addExpenses=addExpenses.toLowerCase();
console.log( addExpenses.split(" "));

let budgetDay = 15000 / 30;
console.log(budgetDay + " " + 15000 % 30);