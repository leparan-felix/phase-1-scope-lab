// Write your solution in this file!
// Declare a global variable customerName and assign it 'bob'
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Function attempting to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person'; // This will throw an error
}

