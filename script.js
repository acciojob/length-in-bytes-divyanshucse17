// Function to calculate the byte size of a string
function byteSize(str) {
    // Use Blob to calculate byte size
    return new Blob([str]).size;
}

// Function to handle the calculation and display the result
function calculateByteSize() {
    const inputString = document.getElementById('inputString').value;
    const result = byteSize(inputString);

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `The byte size of the string is: ${result} bytes.`;
}

