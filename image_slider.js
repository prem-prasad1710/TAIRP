const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slider.children.length - 1;
    } else if (index >= slider.children.length) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

prevBtn.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Auto slide
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 2000);
