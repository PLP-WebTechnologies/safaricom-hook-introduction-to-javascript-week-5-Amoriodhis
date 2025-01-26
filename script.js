// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Gaming"];
let user = { name: "John", age: 25, profession: "Developer" };

console.log("Name:", name, "(Type:", typeof name + ")");
console.log("Age:", age, "(Type:", typeof age + ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent + ")");
console.log("Hobbies:", hobbies, "(Type:", typeof hobbies + ")");
console.log("User object:", user, "(Type:", typeof user + ")");

// Operators (Calculator)
function calculator() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operation = prompt("Choose an operation (+, -, *, /):");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}

// Functions: greetUser
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Display greeting in the browser
let greeting = greetUser("John");
document.getElementById("dynamic-content").innerHTML = `<p>${greeting}</p>`;

// Part 2: JavaScript Control Structures

// If Statements: Voting Eligibility
let ageForVoting = prompt("Please enter your age:");

if (parseInt(ageForVoting) >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("You are not eligible to vote yet.");
}

// Loops: Display numbers from 1 to 10
let numberList = "<ol>";
for (let i = 1; i <= 10; i++) {
    numberList += `<li>${i}</li>`;
}
numberList += "</ol>";

// Display list on the webpage
document.getElementById("dynamic-content").innerHTML += numberList;

// Part 3: Introduction to the DOM

// Modify the heading text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add dynamic content
let newPara = document.createElement("p");
newPara.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newPara);
