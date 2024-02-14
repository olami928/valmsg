document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        window.location.href = 'val-happy.html';
    });

    noBtn.addEventListener('click', () => {
        window.location.href = 'val_sad.html';
    });
});
