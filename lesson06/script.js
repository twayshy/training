'use strict'

let question = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionAnsw = +prompt ("Во сколько это обойдётся?");
let questionOne = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionOneAnsw = +prompt ("Во сколько это обойдётся?");


let getExpensesMonth =function(){

    if (isNaN(questionAnsw) || questionAnsw == '' || questionAnsw == null) {
        return "wrong value 1";
    }
    else if (isNaN(questionOneAnsw) || questionOneAnsw == '' || questionOneAnsw == null) {
       return "wrong value 2";
    }
    else {
        return (questionAnsw + questionOneAnsw);
    }
};
console.log('getExpensesMonth: ', getExpensesMonth());

let money = Number(prompt("Ваш месячный доход???"));

function getAccumulatedMonth() {
    let result = money- getExpensesMonth();
    return result;
};
let accumulatedMonth = getAccumulatedMonth();
console.log('accumulatedMonth: ', accumulatedMonth);


let mission = 4;

function getTargetMonth() {
     let result = Math.floor(mission / getAccumulatedMonth());
    if (result < 0) {
        return ("Цель не будет достигнута");
    };
    return ("Цель будет достигнута через "+result);
};
console.log(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30); 

function getStatusIncome(){
    if (budgetDay > 800) {
        return("Высокий уровень дохода");
    }
    else if (budgetDay >= 300 && budgetDay <= 800 ){
        return("Средний уровень дохода");
    }
    else if (budgetDay >= 0 && budgetDay < 300 ) {
        return("Низкий уровень дохода");
    }
    else if (budgetDay < 0) {
        return "Что-то пошло не так!";
    }
}
console.log('getStatusIncome(): ', getStatusIncome());



let start = function(){
    money = prompt('Ваш месячный доход???');
    console.log(money);

    do {
        money = prompt('Ваш месячный доход???');
        console.log(money); 
    } while (isNaN(money) || money == '' || money == null);
};

