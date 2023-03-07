window.addEventListener("load", () => {
    const container = document.getElementById("homeContainer");
    const numSnowflakes = 40;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snow";
        container.appendChild(snowflake);
        snowflake.style.left = Math.random() * 100 + "vw";

        const delay = Math.floor(Math.random() * 10000);
        // snowflake.style.animationDelay = `${delay}ms`;

        setTimeout(() => {
            snowflake.classList.add("is-falling");
        }, 100 + delay);

        // Add an animationstart event listener to set the opacity to 0.3
        snowflake.addEventListener("animationstart", () => {
            snowflake.style.opacity = 0.3;
        });
    }
});
