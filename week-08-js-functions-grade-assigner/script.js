function assignedScore(score) {
// Check if the score is valid and return the correct grade
    if (score < 0 || score > 100) {
        return "Please enter a score between 0 and 100.";
    } 
    else if (score >= 90) {
        return "Yay! You earned an A!";
    } 
    else if (score >= 80) {
        return "You earned a B.";
    } 
    else if (score >= 70) {
        return "You earned a C.";
    } 
    else if (score >= 60) {
        return "You earned a D.";
    } 
    else {
        return "You earned an F.";
    }
}

// Get the score entered by the user
function checkGrade() {
    let testScore = Number(document.getElementById("testScore").value);

    // Display the returned result
    alert(assignedScore(testScore));
}