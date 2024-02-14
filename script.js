document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        redirectToVideo('lval-happy.html');
    });

    noBtn.addEventListener('click', () => {
        redirectToVideo('val_sad.html');
    });

    function redirectToVideo(videoPage) {
        window.location.href = videoPage;
    }
});
