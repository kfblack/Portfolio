let linkedinPhoto = document.getElementById("linkedin");
let gitPhoto = document.getElementById("github");
let restaurantPhoto = document.getElementById("restaurant");

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