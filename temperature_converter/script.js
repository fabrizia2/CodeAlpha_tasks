// Define an array of temperature scale options
const temperatureScales = ["Celsius", "Fahrenheit", "Kelvin"];

// Function to populate a dropdown menu
function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);

    // Clear existing options
    dropdown.innerHTML = "";

    // Add new options
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        dropdown.appendChild(optionElement);
    });
}

// Populate the "From" and "To" dropdowns on page load
window.addEventListener("load", function() {
    populateDropdown("from-scale", temperatureScales);
    populateDropdown("to-scale", temperatureScales);
});

// Function to display the conversion result
function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}

// Define conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}

// Event listener for the "Convert" button
document.getElementById("convert-button").addEventListener("click", function() {
    const fromScale = document.getElementById("from-scale").value;
    const toScale = document.getElementById("to-scale").value;
    const inputValue = parseFloat(document.getElementById("temperature-input").value);

    let result;
    if (fromScale === "Celsius" && toScale === "Fahrenheit") {
        result = `${celsiusToFahrenheit(inputValue).toFixed(2)}`;
    } else if (fromScale === "Fahrenheit" && toScale === "Celsius") {
        result = `${fahrenheitToCelsius(inputValue).toFixed(2)}`;
    } else if (fromScale === "Celsius" && toScale === "Kelvin") {
        result = `${celsiusToKelvin(inputValue).toFixed(2)}`;
    } else if (fromScale === "Kelvin" && toScale === "Celsius") {
        result = `${kelvinToCelsius(inputValue).toFixed(2)}`;
    } else if (fromScale === "Fahrenheit" && toScale === "Kelvin") {
        result = `${fahrenheitToKelvin(inputValue).toFixed(2)}`;
    } else if (fromScale === "Kelvin" && toScale === "Fahrenheit") {
        result = `${kelvinToFahrenheit(inputValue).toFixed(2)}`;
    } else {
        // Handle the case where fromScale and toScale are the same
        if (fromScale === toScale) {
            result = `${inputValue}`;
        } else {
            result = "Invalid";
        }
    }
    
    // Display the result
    displayResult(result);
});

// Get references to DOM elements
const body = document.querySelector("body"),
  
  modeSwitch = document.querySelector(".mode-switch");

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  // add "dark" class to body and set modeSwitch text to "Light Mode"
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

// add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
  // toggle the "dark" class on the body element
  body.classList.toggle("dark");
  // check if the "dark" class is currently present on the body element
  const isDarkMode = body.classList.contains("dark");
  // set modeSwitch text based on "dark" class presence
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  // set localStorage "mode" item based on "dark" class presence
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});
