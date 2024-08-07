// Add your JavaScript functionality here

document.addEventListener("DOMContentLoaded", () => {
    // Example function to handle cart additions
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Added to cart!");
        });
    });
});
