// Progresszív sáv elem kiválasztása
const progressBar = document.getElementById('progressBar');

// Progresszív sáv frissítése
function updateProgress(percent) {
    progressBar.style.width = percent + '%';
}

// Példa: A progresszív sáv 0%-ról 100%-ra való növelése 1 másodperc alatt
const totalTime = 1000; // 1 másodperc
const interval = 10; // 10 ms-es időközönként frissítjük
let currentTime = 0;

function animateProgressBar() {
    const intervalId = setInterval(function() {
        currentTime += interval;
        const percent = Math.min((currentTime / totalTime) * 100, 80); // maximum 80%-ig
        updateProgress(percent);
        if (percent >= 80) {
            clearInterval(intervalId);
        }
    }, interval);
}

animateProgressBar();