const sections = document.querySelectorAll("section");
for(let section of sections) {
    let button = section.firstElementChild;
    let content = section.lastElementChild;
    button.addEventListener("click", function() {
        content.classList.toggle("show");
    });
}