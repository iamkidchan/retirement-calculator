function calculateRetirement() {
    // Get input values
    const currentAge = Number(document.getElementById('currentAge').value);
    const retirementAge = Number(document.getElementById('retirementAge').value);
    const lifeExpectancy = Number(document.getElementById('lifeExpectancy').value);
    const currentIncome = Number(document.getElementById('currentIncome').value);
    const desiredIncome = Number(document.getElementById('desiredIncome').value);
    const currentSavings = Number(document.getElementById('currentSavings').value);
    const returnRate = Number(document.getElementById('returnRate').value) / 100;
    const inflationRate = Number(document.getElementById('inflationRate').value) / 100;

    // Perform calculations
    const retirementDuration = lifeExpectancy - retirementAge;
    const futureValue = desiredIncome * Math.pow((1 + inflationRate), retirementDuration);
    const totalSavings = futureValue * retirementDuration;
    const presentValue = totalSavings / Math.pow((1 + returnRate), (retirementAge - currentAge));
    const annualSavings = (presentValue - currentSavings) / (retirementAge - currentAge);
    const monthlySavings = annualSavings / 12;

    // Display results
    document.getElementById('totalSavings').textContent = formatCurrency(totalSavings);
    document.getElementById('annualSavings').textContent = formatCurrency(annualSavings);
    document.getElementById('monthlySavings').textContent = formatCurrency(monthlySavings);
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
