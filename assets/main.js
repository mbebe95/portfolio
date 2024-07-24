
class ProgressBar {
    constructor(container, title, initialValue = 0) {
        this.container = container;
        this.title = title;
        this.progress = initialValue;

        // Create title element
        this.titleElement = document.createElement('div');
        this.titleElement.className = 'progress-title';
        this.titleElement.textContent = this.title;

        // Create progress bar elements
        this.progressBarContainer = document.createElement('div');
        this.progressBarContainer.className = 'progress-container';

        this.progressBar = document.createElement('div');
        this.progressBar.className = 'progress-bar';
        this.progressBar.style.width = '0%'; // Initial width set to 0 for animation

        this.progressBarContainer.appendChild(this.progressBar);

        // Append title and progress bar to container
        this.container.appendChild(this.titleElement);
        this.container.appendChild(this.progressBarContainer);
    }

    setProgress(value) {
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        this.progress = value;
        setTimeout(() => {
            this.progressBar.style.width = `${this.progress}%`;
            this.progressBar.textContent = `${this.progress}%`;
        }, 100); // Slight delay to ensure animation on page load
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const progressBarsContainer = document.getElementById('progress-bars');

    // Create and initialize progress bars with titles
    const titles = ['HTML5', 'CSS3', 'Bootstrap5', 'Javascript', 'PHP' , 'Other [Python,SQL,VBA..etc]'];
    const initialValues = [90, 80, 80, 60, 40, 50]; // Example initial values
    const progressBars = [];
    titles.forEach((title, index) => {
        const progressBar = new ProgressBar(progressBarsContainer, title, initialValues[index]);
        progressBars.push(progressBar);
    });

    // Set progress for each progress bar with animation
    progressBars.forEach((progressBar, index) => {
        setTimeout(() => {
            progressBar.setProgress(initialValues[index]);
        }, 500 * index); // Staggered delay for each bar
    });
});

