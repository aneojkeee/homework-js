const goods = [
	{
		id: 1,
        name: "T-shirt",
        description: "color: black, material: coton",
        sizes: ["S", "M", "L"],
        price: 500,
        available: true,
	},

	{
		id: 2,
        name: "Jeans",
        description: "color: blue, material: jeans",
        sizes: ["48", "50", "52"],
        price: 1000,
        available: true,
	},

	{
		id: 3,
        name: "Shirt",
        description: "color: white, material: coton",
        sizes: ["S", "M", "L"],
        price: 800,
        available: true,
	},

	{
		id: 4,
        name: "shorts",
        description: "color: red, material: coton",
        sizes: ["48", "50", "52"],
        price: 700,
        available: true,
	},

	{
		id: 5,
        name: "Sneakers",
        description: "color: black, material: lether",
        sizes: ["41", "42", "3"],
        price: 2000,
        available: true,
	},

]

const basket = [
	{
		good: 1,
        amount: 4,
	},
	{
		good: 2,
        amount: 3,
	}
		
]

function addGood(goodIndex, amount) {
    basket.push({"good":goodIndex, "amount": amount});
    return basket
}

function delGood(goodIndex, amount) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodIndex) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            } 
            basket[i].amount -= amount;
        }    
    }
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length);
    return basket
}


function getTotal() {
    result = {
        totalAmount: 0,
        totalSum: 0,
    }
    for(let each of basket) {
        result.totalAmount += each.amount;
        result.totalSum += goods[each.good].price * each.amount;
    }
    return result;
}


//console.log(addGood(process.argv[2], process.argv[3]))
//console.log(delGood(process.argv[2], process.argv[3]))
//console.log(clearBasket())
console.log(getTotal())