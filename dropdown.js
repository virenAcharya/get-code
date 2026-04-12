document.querySelectorAll(".dropdown a").forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        let filter = this.getAttribute("data-filter");
        
        document.querySelectorAll(".block").forEach(div => {
            if (filter === "all") {
                div.style.display = "block"; // Show all divs when "All" is selected
            } else {
                div.style.display = div.id === filter ? "block" : "none"; // Show only the selected div
            }
        });
    });
});
