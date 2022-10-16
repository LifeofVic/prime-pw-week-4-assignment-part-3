console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];

function addItem(item) {
	if (item) {
		basket.push(item)
		return true
	}
	else
		return false;
}

console.log('Adding random items to basket array. ', addItem('Apple'));
console.log('Adding random items to basket array. ', addItem('Cereal'));
console.log('Adding random items to basket array. ', addItem('Chips'));
console.log('Adding random items to basket array. ', addItem('Milk'));
console.log('Adding random items to basket array. ', addItem('Mangoes'));

console.log('Adding zero items to basket array. [false] ', addItem());

console.log('Checking the current items on "basket", ', basket);
console.log('Function of adding item to basket Array is working properly as well as adding zero items in the parameters.');

