let question = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionAnsw = +prompt ("Во сколько это обойдётся?");
let questionOne = prompt ("Какие обязательные ежемесячные расходы у вас есть?");
let questionOneAnsw = +prompt ("Во сколько это обойдётся?");

let getExpensesMonth =function(){
    return (questionAnsw+questionOneAnsw());
};
console.log('getExpensesMonth: ', getExpensesMonth);

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

    return result;
};
console.log(getTargetMonth());

let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof(mission);

let budgetDay = money / 30; 

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
}
console.log('getStatusIncome(): ', getStatusIncome());