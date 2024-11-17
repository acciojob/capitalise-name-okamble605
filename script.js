//your JS code here. If required.
// Function to convert the input field content to uppercase
function capitalizeName() {
    var inputField = document.getElementById("fname"); // Get the input field by its id
    inputField.value = inputField.value.toUpperCase();  // Convert the input field content to uppercase
}

// Attach the 'blur' event listener to the input field
document.getElementById("fname").addEventListener("blur", capitalizeName);
