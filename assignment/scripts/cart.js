console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];

function addItem(item) {
	if (item) {
		basket.push(item)
		return true
	}
	else false;
}


