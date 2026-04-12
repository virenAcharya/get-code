function copyText() {
    // Get references to both HTML and CSS code blocks
    var htmlCode = document.getElementById("html-code");
    var cssCode = document.getElementById("css-code");
    var textToCopy = "";

    // Determine which code block is currently visible
    if (htmlCode.style.display !== "none") {
        textToCopy = htmlCode.innerText.trim(); // Copy HTML code
    } else if (cssCode.style.display !== "none") {
        textToCopy = cssCode.innerText.trim(); // Copy CSS code
    }

    if (textToCopy) {
        // Create a temporary textarea element to hold the text
        var tempTextarea = document.createElement("textarea");
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Select and copy the text
        tempTextarea.select();
        document.execCommand("copy");

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Show custom alert
        showAlert("Copied!");
    }
}

// Function to show a temporary alert message
function showAlert(message) {
    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    // Add styles dynamically
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "#434141";
    alertBox.style.color = "white";
    alertBox.style.padding = "15px 25px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.fontSize = "18px";
    alertBox.style.fontWeight = "bold";
    alertBox.style.boxShadow = "0px 4px 10px rgba(173, 65, 65, 0.2)";
    alertBox.style.zIndex = "1000";
    alertBox.style.opacity = "1";
    alertBox.style.transition = "opacity 1s ease-in-out";

    // Fade out alert after 2 seconds
    setTimeout(function () {
        alertBox.style.opacity = "0";
        setTimeout(function () {
            document.body.removeChild(alertBox);
        }, 1000);
    }, 2000);
}
