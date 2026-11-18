# Student Result & Grade Calculator

Hey! This is a simple web-based Student Result & Grade Calculator I built for my first-year college practical project. 

It takes a student's name and marks for 5 subjects, then instantly calculates their total marks, percentage, average, letter grade, and whether they passed or failed.

## What It Does
- **Easy Marks Entry:** Enter marks for 5 subjects (out of 100 each). Accepts decimal marks too (like 75.5).
- **Automatic Calculations:** Calculates Total (out of 500), Percentage (%), and Average marks in one click.
- **Pass/Fail Decision:**
  - A student must score **at least 35 in every subject** and **50% overall** to pass.
  - If a student scores below 35 in any subject, they fail (Grade F).
- **Input Validation:** Shows a friendly warning if a box is left empty or if marks are below 0 or above 100.
- **Light & Dark Mode:** Easy toggle button (🌙 / ☀️) in the top-right corner that remembers your choice even if you refresh.
- **Print Result:** A "Print Results" button that formats a clean result sheet ready for printing or saving as PDF.

## Grading System
| Percentage | Grade |
|---|---|
| 90–100% | A+ |
| 80–89.99% | A |
| 70–79.99% | B |
| 60–69.99% | C |
| 50–59.99% | D |
| Below 50% | F |

## Screenshots

### 1. Marks Entry Form
![Marks Entry Form](assets/screenshot-form.png)

### 2. Calculated Result Summary
![Result Summary](assets/screenshot-result.jpg)

### 3. Print Preview (Clean Result Sheet)
![Print Preview](assets/screenshot-print.jpg)

### 4. Grading Criteria Table
![Grading Criteria](assets/screenshot-rules.png)

## Tech Stack
- **HTML5** for structure
- **CSS3** for styling, dark mode, and print design
- **JavaScript (Vanilla JS)** for logic and calculations
- **VS Code** as the code editor

## How to Run
No setup or installation needed:
1. Download or clone this folder.
2. Double-click **`index.html`** to open it in Chrome, Edge, Safari, or any browser.
3. Enter student name, fill in the marks, and click **Calculate Result**!

---
**Author:** Ansh Dwivedi  
**Project:** 1st Year College Submission
