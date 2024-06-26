// Function to sum two numbers
const sum = (a, b) => a + b;

// Function to convert Euros to Dollars
const fromEuroToDollar = (valueInEuro) => valueInEuro * 1.07;

// Function to convert Dollars to Yen
const fromDollarToYen = (amountInDollars) => amountInDollars * 1.07 * 156.5;

// Function to convert Yen to Pounds
const fromYenToPound = (amountInYen) => amountInYen * (1 / 156.5) * 0.87;

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
