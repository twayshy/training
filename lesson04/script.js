let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let waste = addExpenses.split(",");

function getExpensesMonth(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += Number(array[i]);
    }
    return result;
};
console.log(getExpensesMonth(waste));


let money = Number(prompt("Ваш месячный доход???"));

function getAccumulatedMonth(o, c) {
    let result = o - c;
    return result;
};
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(waste));
console.log('accumulatedMonth: ', accumulatedMonth);


let mission = 4;

function getTargetMonth() {
    let result = Math.floor(mission / accumulatedMonth);

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