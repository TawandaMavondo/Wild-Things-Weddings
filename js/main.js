
const displayVideoToggles = document.querySelectorAll('.display-video');

let displayVideo = (e, it) => {
    it.childNodes[1].classList.add('show-video')
};

displayVideoToggles.forEach(it => {
    it.addEventListener('click', (e) => displayVideo(e, it));
});

UIkit.modal(document.querySelector('#mod')).show();