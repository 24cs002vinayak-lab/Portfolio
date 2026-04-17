document.addEventListener("DOMContentLoaded", function() {

    /* ===== COUNTERS ===== */
    const skills = document.querySelectorAll('#skills .skill-card');
    const skillsCount = document.getElementById('skills-count');
    if (skillsCount) skillsCount.textContent = skills.length;

    const projects = document.querySelectorAll('#projects .project');
    const projectsCount = document.getElementById('projects-count');
    if (projectsCount) projectsCount.textContent = projects.length;

    const exp = document.querySelectorAll('#experience p');
    const expCount = document.getElementById('exp-count');
    if (expCount) expCount.textContent = exp.length;

    /* ===== HORIZONTAL SCROLL ===== */
    const container = document.querySelector('.skills-container');

    if (container) {
        container.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            container.scrollLeft += evt.deltaY;
        });
    }

});