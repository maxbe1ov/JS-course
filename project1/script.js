

let money = +prompt("Ваш бюджет на месяц?","1000");
let time = prompt("Введите дату в формате YYYY-MM-DD","2020.08.07");

let appData = {
	budget: money,
	timeData: time,
	expences: {},
	optionalExpences: {},
	income: [],
	savings: false
};


	
for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце","");
	let b = prompt("Во сколько обойдется?","");
	if ( (typeof(a)) !== 'string' || (typeof(a)) === null || b === null || a == '' || b =='') {
		alert('Данные не корректны!');
		--i;
	}
	else {
		appData.expences[a] = b;
		appData.budget -= b;
	}
	console.log(a);
	console.log(b);
	
}

appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на 1 день :" + appData.moneyPerDay);

console.log(appData);

