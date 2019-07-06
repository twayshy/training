let money = +prompt("Ваш месячный доход???");
let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.split(","));
let deposit = confirm ("Есть ли у вас депозит в банке?");
console.log(deposit);
let income = "freelance";
console.log(typeof income, typeof deposit, typeof money);
let question = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionAnsw = +prompt ("Во сколько это обойдётся?");
let questionOne = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionOneAnsw = +prompt ("Во сколько это обойдётся?");
let budgetMonth = money - questionAnsw - questionOneAnsw;
console.log('budgetMonth: ', budgetMonth);
let mission = 4;
console.log(Math.ceil(mission / money));
console.log(Math.floor(mission / budgetMonth));
let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);
if (budgetDay > 800) {
    console.log("Высокий уровень дохода");
}
else if (budgetDay >= 300 && budgetDay <= 800 ){
    console.log("Средний уровень дохода");
}
else if (budgetDay >= 0 && budgetDay < 300 ) {
    console.log("Низкий уровень дохода");
}
else {
    console.log("Что-то пошло не так");
    // "что-то" пишется через дефис.
}