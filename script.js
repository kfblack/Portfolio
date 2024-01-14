let linkedinPhoto = document.getElementById("linkedin");
let gitPhoto = document.getElementById("github");
let restaurantPhoto = document.getElementById("restaurant");
let submitButton = document.getElementById("submit");
let contactForm = document.getElementById("form");
let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let messageField = document.getElementById("message");

const publicKey = "eeD7X_4YtFaaqYdOn";
const serviceId = "service_toze04u";
const templateId = "template_o187od1";

emailjs.init(publicKey);

contactForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    submitButton.innerText = "Just a moment...";
    const fields = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
    };
    emailjs.send(serviceId, templateId, fields).then(() => {
        submitButton.innerText = "Message sent successfully!";
        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
    });
});

linkedinPhoto.addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/kalin-black/", "_blank")
})

gitPhoto.addEventListener("click", function() {
    window.open("https://github.com/kfblack", "_blank")
})

restaurantPhoto.addEventListener("click", function() {
    window.open("https://restaurant-rater-cc16561bec50.herokuapp.com/", "_blank")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

