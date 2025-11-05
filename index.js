// on click of the button send message it should do something
document.getElementById("send").addEventListener("click", function() {
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("input[name='message']").value;   
    if(email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please enter both email and message.");
    }  
});

// toggle between light and dark mode
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});