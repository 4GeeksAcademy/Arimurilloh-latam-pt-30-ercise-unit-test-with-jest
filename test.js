// Import functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Tests for the sum function
test('adds 14 + 9 to equal 23', () => {
    // Calculate the total
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Tests for function fromEuroToDollar 
test("One euro should be 1.07 dollars", function() {
    // Convert euros to dollars
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});

// Tests for function fromDollarToYen 
test('Converts 10 dollars to yen', () => {
    // Convert dollars to yen
    const dollars = 10;
    const yenAmount = fromDollarToYen(dollars);
    const expected = dollars * 1.07 * 156.5; 
    expect(yenAmount).toBe(expected);
});

// Tests for unctionfromYenToPound f
test('Converts 1000 yen to pound', () => {
    // Convert yen to pounds
    const yenAmount = 1000;
    const poundAmount = fromYenToPound(yenAmount);
    const expected = yenAmount * (1 / 156.5) * 0.87;
    expect(poundAmount).toBe(expected);
});
