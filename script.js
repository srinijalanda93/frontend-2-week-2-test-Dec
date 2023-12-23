const popup = document.querySelector(".popup-div");
function startQuiz() {
        // toggles the popup
        if (popup.style.display === "none") {
            popup.style.display = "flex";
        }
        else {
            popup.style.display = "none";
        }
    
}

function changeColor(box) {
    // Select the span with class 'color-box' directly using the box parameter
    box.style.backgroundColor = "yellow";

    // Select the close-btn inside the color-box using the box parameter
    let closeButton = box.querySelector('.close-btn');
    closeButton.style.display = "inline-block";
}

function resetColor(closeBtn) {
    let colorBox = closeBtn.parentElement; // Get the color-box containing close-btn
    // Reset the background color of the entire color-box (outer span)
    colorBox.style.backgroundColor = 'grey';
    // Hide the close button
    closeBtn.style.display = 'none';
}





function submitAnswers() {
    // Process and validate user answers
    // Calculate score and navigate to results page
    window.location.href = 'results.html';
}

function retryQuiz() {
    // Reset quiz state and navigate to home page
    window.location.href = 'index.html';
}
