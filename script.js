//ON BUTTON PRESS, SLIDE TO SECTION
function scrollToSection(section) {
    const container = document.querySelector(section);
    container.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("openPdfBtn").addEventListener("click", function () {
    document
        .getElementById("pdfEmbed")
        .setAttribute("src", "resume/resume.pdf");
    document.getElementById("pdfModal").style.display = "block";
});

document.getElementById("closePdfBtn").addEventListener("click", function () {
    document.getElementById("pdfModal").style.display = "none";
});

// Close modal by clicking outside
document.getElementById("pdfModal").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
