'use strict'

let question,
 questionAnsw,
 questionOne,
 questionOneAnsw;

 let money;
start();

 let appData = {
    budget: money,
    budgetDay: 0,
    expenses:{},
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        question = prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Счёт телефона");
        while (isNaN(questionAnsw)==true||questionAnsw==null||questionAnsw==""){
            questionAnsw= +prompt ("Во сколько это обойдётся?", 400);
        };
        questionOne = prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Интернет");
        while(isNaN(questionOneAnsw) ==true||questionOneAnsw===null|| questionOneAnsw===""){
            questionOneAnsw = +prompt ("Во сколько это обойдётся?", 700);
        };
        this.expenses[question]=questionAnsw;
        this.expenses[questionOne]=questionOneAnsw;
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth+=appData.expenses[key];
        }
    },
    getBudget: function() {
       this.budgetMonth=this.budget-this.expensesMonth;
       this.budgetDay=Math.floor(this.budgetMonth/30);
    },
    getTargetMonth: function() {
        let result = Math.floor(mission / appData.budgetMonth);
       if (result < 0) {
           return ("Цель не будет достигнута");
       };
       return ("Цель будет достигнута через "+result);
   },
   getStatusIncome: function(){
    if (this.budgetDay > 800) {
        return("Высокий уровень дохода");
    }
    else if (this.budgetDay >= 300 && this.budgetDay <= 800 ){
        return("Средний уровень дохода");
    }
    else if (this.budgetDay >= 0 && this.budgetDay < 300 ) {
        return("Низкий уровень дохода");
    }
    else if (this.budgetDay < 0) {
        return "Что-то пошло не так!";
    };
    }
};
 appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log("расходы за месяц "+appData.expensesMonth);
let mission = 4;


console.log(appData.getTargetMonth());




console.log('getStatusIncome(): ', appData.getStatusIncome());



function start(){
    do {
        money = Number(prompt('Ваш месячный доход???', 10000));
        console.log(money); 
    } while (isNaN(money) || money == '' || money == null);
};
let values="";
for(let key in appData){
    values+="\n"+key+": "+appData[key];
}
console.log("Наша программа включает в себя данные: "+values);