document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const countButton = document.getElementById('countButton');
    const resetButton = document.getElementById('resetButton');
    const countDisplay = document.getElementById('countDisplay');

    countButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = `カウント: ${count}`;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        countDisplay.textContent = `カウント: ${count}`;
    });
});
