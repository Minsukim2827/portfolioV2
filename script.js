//ON BUTTON PRESS, SLIDE TO SECTION
function scrollToSection(section) {
    const container = document.querySelector(section);
    container.scrollIntoView({ behavior: "smooth" });
}
