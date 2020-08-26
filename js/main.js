
const displayVideoToggles = document.querySelectorAll('.display-video');

let displayVideo = (e) => {
    e.path[2].classList.add('show-video');
};

displayVideoToggles.forEach(it => {
    it.addEventListener('click', displayVideo);
});

