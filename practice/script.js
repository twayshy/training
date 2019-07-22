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
    income: {},
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    deposit: confirm ("Есть ли у вас счёт в банке?"),
    addExpenses: prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', "Кафе, булочная"),
    getInfoDeposit: function(){
        if(appData.deposit) {
            appData.percentDeposit = prompt("Какой годовой процент?", "10");
            while (isNaN(appData.percentDeposit)==true||appData.percentDeposit==null||appData.percentDeposit==""){
             appData.percentDeposit= prompt ("Какой годовой процент?", "10");
         };
            appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            while (isNaN(appData.moneyDeposit)==true||appData.moneyDeposit==null||appData.moneyDeposit==""){
             appData.moneyDeposit= prompt ("Какая сумма заложена?", 10000);
            }
        }
     },
    asking: function() {

        if(confirm("Есть ли у вас дополнительный источник заработка?")){
            let itemIncome = prompt("Какой дополнительный заработок у вас есть?", "Танцую");
                while (isNaN(itemIncome)==false||itemIncome==null||itemIncome==""){
                    itemIncome= prompt ("Какой дополнительный заработок у вас есть?", "Грузчик");
                }
            let cashIncome = prompt("Сколько вы зарабатываете на этом в месяц???", "10000");
                while (isNaN(cashIncome)==true || cashIncome==null || cashIncome==""){
                    cashIncome= prompt ("Сколько вы зарабатываете на этом в месяц??????", 10000);
                }
            appData.income [itemIncome] = cashIncome;
        }
        question = prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Счёт телефона");
        while (isNaN(question)==false||question==null||question==""){
            question= prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Счёт телефона");
        };
        while (isNaN(questionAnsw)==true||questionAnsw==null||questionAnsw==""){
            questionAnsw= +prompt ("Во сколько это обойдётся?", 400);
        };
        questionOne = prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Интернет");
        while (isNaN(questionOne)==false||questionOne==null||questionOne==""){
            questionOne= prompt ("Какие обязательные ежемесячные расходы у вас есть?", "Интернет");
        };
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
    },
    
    calcSavedMoney: function(){
        appData.budgetMonth * appData.period;
    }
};
appData.addExpenses= appData.addExpenses.split(" ");
let arr =[];
for (let i=0; i<appData.addExpenses.length;i++){
    
if (appData.addExpenses[i][appData.addExpenses[i].length-1]==","){
    appData.addExpenses[i]=appData.addExpenses[i].substring(0, appData.addExpenses[i].length - 1)
};
arr.push(appData.addExpenses[i][0].toUpperCase()+appData.addExpenses[i].substr(1));
}
console.log(arr.join(", "));




appData.getInfoDeposit();
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
console.log(appData.calcSavedMoney, appData.moneyDeposit, appData.percentDeposit);
