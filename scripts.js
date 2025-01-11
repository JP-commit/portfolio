document.addEventListener("DOMContentLoaded", function() {
    const words = ["developer", "data analyst", "writer", "gamer"];
    let i = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 2000;
    const changingText = document.getElementById("changing-text");

    function typeWriter(text, index) {
        if (index < text.length) {
            changingText.textContent += text.charAt(index);
            index++;
            setTimeout(() => typeWriter(text, index), typingSpeed);
        } else {
            setTimeout(() => eraseText(text), delayBetweenWords);
        }
    }

    function eraseText(text) {
        if (text.length > 0) {
            changingText.textContent = text.slice(0, -1);
            setTimeout(() => eraseText(text.slice(0, -1)), erasingSpeed);
        } else {
            i = (i + 1) % words.length;
            setTimeout(() => typeWriter(words[i], 0), typingSpeed);
        }
    }

    typeWriter(words[i], 0);
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}
