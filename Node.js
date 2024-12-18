// Conversion rates relative to 1 meter
const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    inches: 39.3701,
    feet: 3.28084
};

// Function to perform unit conversion
function convertUnits(value, fromUnit, toUnit) {
    // Convert the input value to meters first
    const valueInMeters = value / conversionRates[fromUnit];

    // Convert from meters to the target unit
    const convertedValue = valueInMeters * conversionRates[toUnit];

    return convertedValue;
}

// Event listener for the Convert button
document.getElementById('convert-btn').addEventListener('click', () => {
    // Retrieve input values
    const inputValue = parseFloat(document.getElementById('distance').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    // Validate the input
    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        document.getElementById('outputResult').innerText = 'Result: --';
        return;
    }

    // Perform conversion
    const result = convertUnits(inputValue, fromUnit, toUnit);

    // Display the result
    document.getElementById('outputResult').innerText = result.toFixed(4);
}); // Correctly placed closing parenthesis and brace
