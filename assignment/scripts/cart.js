console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
const maxItems = 5;

function addItem(item) {
	if (isFull(basket) != true) {
		basket.push(item)
		return true
	}
	else if (isFull(basket) == true) {
		return false;
	}
}

console.log('Adding item to basket array. ', addItem('Apple'));
console.log('Adding items to basket array. ', addItem('Cereal'));
console.log('Adding item to basket array. ', addItem('Chips'));
console.log('Adding item to basket array. ', addItem('Milk'));
console.log('Adding item to basket array. ', addItem('Mangoes'));

console.log('Adding zero items to basket array. [false] ', addItem());

console.log('Checking the current items in "basket", ', basket);
console.log('Function of adding item to basket Array is working properly as well as adding zero items in the parameters.');

function listItems(array) {
	console.log('Current items in your basket: ')
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
	if (array.length == 0) {
		return console.log('None');
	}
}

listItems(basket); // Function Worked Properly.

function empty(array) {
	for (let i = 0; i < array.length; i++) {
		array.pop();
		empty(array);
	}
}

empty(basket);

console.log('Called the function "empty"');
console.log('Calling basket to check zero items are in the array - [zero]', basket);
listItems(basket); //Will return no items in the basket and will log "Current items in your basket, none"


function isFull(array) {
	if (array.length >= maxItems) {
		return true;
	}
	else if (array.length < maxItems) {
		return false;
	}

}

console.log('Adding item to basket array. ', addItem('Pear'));
console.log('Adding item to basket array. ', addItem('Cookie'));
console.log('Adding item to basket array. ', addItem('Orange Juice'));
console.log('Adding item to basket array. ', addItem('Yogurt'));
console.log('Adding item to basket array. ', addItem('Bread'));
console.log('Adding item to basket array.[false] ', addItem('Chicken')); //items exceed the max items on basket.

console.log('Chicken does not appear on the basket list : ', basket);


function removeItem(item) {
	let itemIndex = basket.indexOf(item);

	return itemIndex >= 0 ? basket.splice(itemIndex, 1) : null;
}


console.log('**********TESTING removeItem function***********');
console.log('Called the listItems function for Basket to display the current items');
listItems(basket);
console.log('***************************************')
console.log('Called the removeItems function for "Orange Juice."');
removeItem("Orange Juice");
console.log('***************************************')
console.log('Calling listItem for basket, "Orange Juice should be removed from the basketlist "')
listItems(basket);

console.log('***************************************')

console.log('Called the listItems function for Basket to display the current items');
listItems(basket);
console.log('***************************************')
console.log('Called the removeItems function for "Yogurt."');
removeItem("Yogurt");
console.log('***************************************')
console.log('Calling listItem for basket, "Yogurt" should be removed from the basketlist "')
listItems(basket);

