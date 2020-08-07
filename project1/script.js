/*
var budget = prompt("Какой у вас бюджет?",1000);
var name = prompt("Название вашей фирмы?","У Ашота");

let MainList = {
		budget: budget,
		name: name,
		shopGoods: [],
		employers: {}, 
		open: true
}

for (let i = 0; i < 3; i++) {
	var a = prompt(i + ") Какой тип товаров будем производить?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Верно!');
		MainList.shopGoods[i] = a;
		console.log(MainList.shopGoods[i]);
	} 
	else {
		console.log("Не верно! Так как ошибка " + a);
		i--;
	}
}



budget = budget/30;
alert("Бюджет вашей фирмы на 1 день " + budget + '$');*/

/*var week = ["mon","tue","wen","thsd","frd","sun","strd"];
for (let i = 0; i < 7; i++){
	if (i === 5 || i === 6){
		week[5] = "sunday";
		week[6] = "saturday";
	}
	console.log(week[i]);
}*/
var arr = ["353","564","234","76","45","23","77"];
for (let i = 0; i < 7; i++){
	let a = arr[i];
	if (a[0] === "3" || a[0] === "7") {
		console.log(arr[i]);
	}
}