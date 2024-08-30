window.addEventListener('scroll', function () {
    const scrollDown = document.getElementById('scroll-down');
    if (window.scrollY > 0) {
        scrollDown.classList.add('arrow-hidden');
    } else {
        scrollDown.classList.remove('arrow-hidden');
    }
});
