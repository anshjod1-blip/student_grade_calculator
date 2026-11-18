// ========================================================
// Student Result & Grade Calculator - JavaScript (script.js)
// Simple, beginner-friendly logic with Print & Theme features
// ========================================================

// 1. Get references to HTML elements
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const printBtn = document.getElementById("printBtn");
const errorMessage = document.getElementById("errorMessage");
const resultCard = document.getElementById("resultCard");

// Theme Toggle Elements
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// ========================================================
// 2. Light Mode & Dark Mode Logic (with Local Storage)
// ========================================================

// Check if user previously saved a theme preference in Local Storage
const savedTheme = localStorage.getItem("calculatorTheme");

// If dark mode was saved earlier, apply it immediately on page load
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "assets/sun.svg";
    themeText.innerText = "Light Mode";
} else {
    // Light Mode is default
    document.body.classList.remove("dark-mode");
    themeIcon.src = "assets/moon.svg";
    themeText.innerText = "Dark Mode";
}

// Add click event listener to switch between themes
themeToggleBtn.addEventListener("click", function () {
    // Toggle the 'dark-mode' class on the body tag
    document.body.classList.toggle("dark-mode");

    // Check if the body now has the dark-mode class
    if (document.body.classList.contains("dark-mode")) {
        // Update button icon and text for switching to Light Mode
        themeIcon.src = "assets/sun.svg";
        themeText.innerText = "Light Mode";
        // Save choice in browser's Local Storage
        localStorage.setItem("calculatorTheme", "dark");
    } else {
        // Update button icon and text for switching to Dark Mode
        themeIcon.src = "assets/moon.svg";
        themeText.innerText = "Dark Mode";
        // Save choice in browser's Local Storage
        localStorage.setItem("calculatorTheme", "light");
    }
});

// ========================================================
// 3. Calculator Event Listeners
// ========================================================
calculateBtn.addEventListener("click", calculateResult);
resetBtn.addEventListener("click", resetAll);
printBtn.addEventListener("click", printResult);

// ========================================================
// Function to Calculate the Result and Grade
// ========================================================
function calculateResult() {
    // Hide previous error message
    errorMessage.style.display = "none";
    errorMessage.innerText = "";

    // Step A: Get values from input fields
    const nameInput = document.getElementById("studentName").value.trim();
    const sub1Input = document.getElementById("subject1").value.trim();
    const sub2Input = document.getElementById("subject2").value.trim();
    const sub3Input = document.getElementById("subject3").value.trim();
    const sub4Input = document.getElementById("subject4").value.trim();
    const sub5Input = document.getElementById("subject5").value.trim();

    // Step B: Input Validation
    // 1. Check if student name is empty
    if (nameInput === "") {
        showError("Please enter the student's name.");
        return;
    }

    // 2. Check if any subject marks field is empty
    if (sub1Input === "" || sub2Input === "" || sub3Input === "" || sub4Input === "" || sub5Input === "") {
        showError("Please enter marks for all 5 subjects.");
        return;
    }

    // Convert inputs from text strings to numbers
    const mark1 = Number(sub1Input);
    const mark2 = Number(sub2Input);
    const mark3 = Number(sub3Input);
    const mark4 = Number(sub4Input);
    const mark5 = Number(sub5Input);

    // 3. Check if marks are valid numbers between 0 and 100
    if (
        isNaN(mark1) || mark1 < 0 || mark1 > 100 ||
        isNaN(mark2) || mark2 < 0 || mark2 > 100 ||
        isNaN(mark3) || mark3 < 0 || mark3 > 100 ||
        isNaN(mark4) || mark4 < 0 || mark4 > 100 ||
        isNaN(mark5) || mark5 < 0 || mark5 > 100
    ) {
        showError("Marks must be numbers between 0 and 100.");
        return;
    }

    // Step C: Perform Calculations
    // 1. Total marks out of 500
    const totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;

    // 2. Percentage calculation
    const percentage = (totalMarks / 500) * 100;

    // 3. Average marks calculation (total divided by 5 subjects)
    const averageMarks = totalMarks / 5;

    // Step D: Determine Pass or Fail Status
    // Passing Condition: A student must score at least 35 in every subject AND at least 50% overall to pass
    let status = "";
    let grade = "";
    let message = "";
    let isPassed = true;

    if (mark1 < 35 || mark2 < 35 || mark3 < 35 || mark4 < 35 || mark5 < 35 || percentage < 50) {
        isPassed = false;
        status = "Fail";
        grade = "F";
        message = "Don't give up! Keep practicing and try again.";
    } else {
        isPassed = true;
        status = "Pass";
        message = "Congratulations! You have successfully passed.";

        // Assign Grade based on percentage
        // 90–100% = A+
        // 80–89.99% = A
        // 70–79.99% = B
        // 60–69.99% = C
        // 50–59.99% = D
        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        }
    }

    // Step E: Display Results in the Result Card
    // Student Name
    document.getElementById("displayStudentName").innerText = nameInput;

    // Subject-wise marks breakdown
    document.getElementById("displaySub1").innerText = mark1 + " / 100";
    document.getElementById("displaySub2").innerText = mark2 + " / 100";
    document.getElementById("displaySub3").innerText = mark3 + " / 100";
    document.getElementById("displaySub4").innerText = mark4 + " / 100";
    document.getElementById("displaySub5").innerText = mark5 + " / 100";

    // Summary details
    document.getElementById("displayTotalMarks").innerText = totalMarks + " / 500";
    document.getElementById("displayPercentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("displayAverageMarks").innerText = averageMarks.toFixed(2);
    document.getElementById("displayGrade").innerText = grade;

    // Set Pass / Fail status badge and feedback message
    const statusElement = document.getElementById("displayStatus");
    const messageElement = document.getElementById("displayMessage");

    statusElement.innerText = status;
    messageElement.innerText = message;

    // Apply color styles (Green for Pass, Red for Fail)
    if (isPassed) {
        statusElement.className = "value status-badge pass";
        messageElement.className = "feedback-message pass-msg";
    } else {
        statusElement.className = "value status-badge fail";
        messageElement.className = "feedback-message fail-msg";
    }

    // Make the result card visible
    resultCard.style.display = "block";
}

// ========================================================
// Function to Print the Results (Browser window.print())
// ========================================================
function printResult() {
    window.print();
}

// ========================================================
// Function to Display Simple Error Messages
// ========================================================
function showError(msg) {
    errorMessage.innerText = msg;
    errorMessage.style.display = "block";
    resultCard.style.display = "none"; // Hide result if error occurs
}

// ========================================================
// Function to Reset all input fields and results
// ========================================================
function resetAll() {
    // Clear input fields
    document.getElementById("studentName").value = "";
    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";

    // Clear subject breakdown
    document.getElementById("displaySub1").innerText = "";
    document.getElementById("displaySub2").innerText = "";
    document.getElementById("displaySub3").innerText = "";
    document.getElementById("displaySub4").innerText = "";
    document.getElementById("displaySub5").innerText = "";

    // Hide error message
    errorMessage.style.display = "none";
    errorMessage.innerText = "";

    // Hide result card
    resultCard.style.display = "none";
}
