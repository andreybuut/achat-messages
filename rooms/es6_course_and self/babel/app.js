
const acc = {
	name: "Andrey",
	account: "123",
	amount: 14000
}

function testTax (tax){
	return tax * 150
}

testTax(acc.amount);

const { x, y, ...z } = {x: 1, y: 2, a:3, b: 4};

