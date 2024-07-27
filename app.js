function calculatePercentage() {
    // Get the values from the input fields
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);

    // Check if any value is greater than 100
    if (subject1 > 100 || subject2 > 100 || subject3 > 100 || subject4 > 100) {
        alert('Please enter a number less than or equal to 100 for all subjects.');
        return;
    }

    // Validate the input to ensure they are numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers for all subjects.';
        return;
    }

    // Calculate the total and percentage
    const total = subject1 + subject2 + subject3 + subject4;
    const percentage = (total / 400) * 100; // Assuming each subject is out of 100

    // Display the result
    document.getElementById('result').innerHTML = `Total: ${total}<br>Percentage: ${percentage.toFixed(2)}%`;
}
