//javascript

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            //if its submit
            if(event.target.textContent.trim() == "Submit") {
                alert("Form Submitted");
            }
            //if its adding to cart
            else if(event.target.textContent.trim() == "Add to Cart"){
                alert("Added to Cart!");
            }
            else{
                //do nothing
            }
        });
    });
});