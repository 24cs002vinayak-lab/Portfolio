const container = document.querySelector('.skills-container');

container.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
});