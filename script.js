document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        window.location.href = 'loving-video.html';
    });

    noBtn.addEventListener('click', () => {
        window.location.href = 'sad-video.html';
    });
});
