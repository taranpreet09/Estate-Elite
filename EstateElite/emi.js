const conversionRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.009,
};

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const totalMonths = tenure * 12;

    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, totalMonths)) / (Math.pow(1 + interestRate, totalMonths) - 1);
    const totalPayable = emi * totalMonths;
    const interestAmount = totalPayable - loanAmount;

    const selectedCurrency = document.getElementById('currency').value;
    const conversionRate = conversionRates[selectedCurrency];

    const convertedEMI = emi * conversionRate;
    const convertedTotalPayable = totalPayable * conversionRate;

    document.getElementById('monthlyEMI').innerText = formatNumber(convertedEMI.toFixed(2));
    document.getElementById('totalPayable').innerText = formatNumber(convertedTotalPayable.toFixed(2));

    const currencySymbols = {
        INR: '₹',
        USD: '$',
        EUR: '€',
        GBP: '£',
    };
    document.getElementById('currencySymbol').innerText = currencySymbols[selectedCurrency];
    document.getElementById('currencySymbol2').innerText = currencySymbols[selectedCurrency];

    renderChart(loanAmount * conversionRate, interestAmount * conversionRate);
}

function renderChart(principal, interest) {
    const ctx = document.getElementById('emiChart').getContext('2d');
    if (window.chart) {
        window.chart.destroy();
    }
    window.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal Amount', 'Interest Amount'],
            datasets: [{
                label: 'EMI Breakdown',
                data: [principal, interest],
                backgroundColor: ['#002366', '#66cdaa'],
                hoverOffset: 4
            }]
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

window.onload = function() {
    calculateEMI();
};
