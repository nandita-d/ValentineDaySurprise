document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const text = document.querySelector("p");

    /* ===== COLORS ===== */
    heading.style.color = "#ff4d6d";
    text.style.color = "#ff8fa3";

    heading.style.transition = "all 0.3s ease";
    text.style.transition = "all 0.3s ease";

    /* ===== FADE IN ===== */
    heading.style.opacity = 0;
    text.style.opacity = 0;

    setTimeout(() => {
        heading.style.opacity = 1;
        text.style.opacity = 1;
    }, 300);

    /* ===== HEARTBEAT ===== */
    setInterval(() => {
        heading.style.transform = "scale(1.1)";
        text.style.transform = "scale(1.05)";

        setTimeout(() => {
            heading.style.transform = "scale(1)";
            text.style.transform = "scale(1)";
        }, 300);
    }, 900);

    /* ===== GLOW EFFECT ===== */
    setInterval(() => {
        heading.style.textShadow = "0 0 10px #ff4d6d";
        text.style.textShadow = "0 0 8px #ff8fa3";

        setTimeout(() => {
            heading.style.textShadow = "none";
            text.style.textShadow = "none";
        }, 400);
    }, 1500);

    /* ===== SHAKE ON CLICK ===== */
    heading.addEventListener("click", () => {
        heading.style.transform = "translateX(-5px)";
        setTimeout(() => heading.style.transform = "translateX(5px)", 80);
        setTimeout(() => heading.style.transform = "translateX(0)", 160);
    });

    /* ===== FLOATING HEARTS ===== */
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.opacity = 1;
        heart.style.transition = "transform 3s linear, opacity 3s linear";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-100vh)";
            heart.style.opacity = 0;
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 700);
});
